import {model, Schema} from 'mongoose'
import {IProduct} from '../types/product'


const productSchema:Schema = new Schema({
    name:{ type: String, required:true},
    price:{type:String, required:true},
    image:{type:String, required:true}
}, {timestamps:true})

export default model<IProduct>('Product', productSchema)