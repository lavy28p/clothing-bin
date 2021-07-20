import { Router } from 'express'
import * as controllers from '../controllers/products.js'
// import restrict pending

const router = Router()

router.get('/products', controllers.getProducts)
router.get('/products/:id', controllers.getProduct)


export default router