import { Router } from 'express'
import * as controllers from '../controllers/users.js'

const router = Router()

console.log("inside routes user")

router.post('/sign-up', controllers.signUp)
router.post('/sign-in', controllers.signIn)
router.get('/verify', controllers.verify)

export default router