import { Router } from 'express'
import productsRoutes from './products.js'
import userRoutes from './users.js'

const router = Router()

router.get('/', (req, res) => res.send('This is the api root!'))

router.use('/', productsRoutes)
router.use('/', userRoutes)

export default router