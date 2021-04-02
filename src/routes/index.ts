import {Router} from 'express'
import { getProducts, addProduct, getProduct} from '../controllers/products'
import {cacheAllProducts} from '../redis'

const router:Router = Router()

router.get('/products', getProducts)
router.get('/products/:id', getProduct)
router.post('/products', addProduct)

export default router