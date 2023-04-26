import express from 'express'
import { createUserCtrl, deleteUserCtrl, getUsersCtrl, updateUserCtrl } from '../controllers/userCtrl'

const router = express.Router()

router.get('/users', getUsersCtrl)

router.get('/add_user', createUserCtrl)
.post('/add_user', createUserCtrl)

router.get('/update_user/:id', updateUserCtrl)
.post('/update_user/:id', updateUserCtrl)

router.get('/delete_user/:id', deleteUserCtrl)

export { router as usersRouter }