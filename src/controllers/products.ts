import {Response, Request} from 'express'
import db, {redixClient} from '../database/db'
import { IProduct } from '../types/product'

const Products = () => db('products')

export const getProducts = async (req: Request, res:Response) =>{
    try { 
        redixClient.get('allProducts', async (err, data: any)=>{
            if(err) throw err
    
            if(data !== null){
                console.log('from redis')
                res.json({
                    message:'found ',
                    products: JSON.parse(data)
                })
            }else{
                const products = await Products()
                redixClient.setex('allProducts', 86000, JSON.stringify(products))
                console.log('from db')
                return res.status(200).json({
                    message:'products found',
                    products
                })
            }
        })
    } catch (error) {
        throw error
    }
}

export const getProduct = async (req:Request, res:Response) =>{
    try {
        const id = req.params.id
        redixClient.get(`product-${id}`, async(err, data)=>{
            if(err) throw err
            if(data !== null){
                console.log('from redis')
                res.json({
                    message:'product found',
                    product: JSON.parse(data)
                })
            }else{
                const product= await Products().select("*")
                                .where({id: id})
                if(!product) res.status(404).json({
                message:'product not found'
                })

                res.status(200).json({
                message:'product found', product
                })
            }
        })
    } catch (error) {
        throw error
    }
}

export const addProduct = async (req:Request, res:Response) =>{
    try {
        const {name, price, image} = req.body
        const products = await Products().insert({
            name,
            price,
            image
        }).returning("*")
        redixClient.setex(`product-${products[0]?.id}`, 84000, JSON.stringify(products[0]) )
        res.status(200).json({
            message:'added succesfully', product: products
        })

    } catch (error) {
        console.log(error)
    }
}