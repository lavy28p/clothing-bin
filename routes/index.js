import { Router } from 'express'
import productsRoutes from './products.js'

const router = Router()

router.get('/', (req, res) => res.send('This is the api root!'))

router.get('/', productsRoutes)

export default router