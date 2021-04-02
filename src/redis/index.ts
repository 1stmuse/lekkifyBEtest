import {Request, Response, NextFunction} from 'express'
import {redixClient} from '../database/db'

export const cacheAllProducts = (req:any, res:any, next:any)=>{
    
    redixClient.get('allProducts', (err, data: any)=>{
        if(err) throw err

        if(data !== null){
            console.log('from redis')
            res.json({
                message:'found ',
                products: JSON.parse(data)
            })
        }else{
            next()
        }
    })
}