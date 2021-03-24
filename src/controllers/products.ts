import {Response, Request} from 'express'
import {IProduct} from '../types/product'
import Product from '../models/product'

export const getProducts = async (req: Request, res:Response) =>{
    try {
        const products:IProduct[] = await Product.find()
        return res.status(200).json({
            message:'products found',
            products
        })
    } catch (error) {
        throw error
    }
}

export const getProduct = async (req:Request, res:Response) =>{
    try {
        const id = req.params.id
        const product:IProduct | null = await Product.findById(id)
        if(!product) res.status(404).json({
            message:'product not found'
        })

        res.status(200).json({
            message:'product found', product
        })
    } catch (error) {
        
    }
}

export const addProduct = async (req:Request, res:Response) =>{
    try {
        const body:IProduct = req.body
        const product:IProduct = new Product({
            name: body.name,
            price: body.price,
            image:body.image
        })

        const newProduct:IProduct = await product.save()
        res.status(200).json({
            message:'added succesfully', product: newProduct
        })

    } catch (error) {
        throw error
    }
}