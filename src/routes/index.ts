import {Router} from 'express'
import {addProduct, getProduct, getProducts} from '../controllers/products'

const router:Router = Router()

router.get('/products', getProducts)
router.get('/product/:id', getProduct)
router.post('/products', addProduct)

export default router