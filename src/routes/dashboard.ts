import express from 'express'
import { dashboardCtrl } from '../controllers/dashboardCtrl'

const router = express.Router()

router.get('/dashboard', dashboardCtrl)

export { router as dashboardRouter }