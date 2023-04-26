import express from 'express'
import { createStudentCtrl, deleteStudentCtrl, getStudentsCtrl, updateStudentCtrl } from '../controllers/studentCtrl'

const router = express.Router()


router.get('/students', getStudentsCtrl)

router.get('/add_student', createStudentCtrl)
.post('/add_student', createStudentCtrl)

router.get('/update_student/:id', updateStudentCtrl)
.post('/update_student/:id', updateStudentCtrl)

router.get('/delete_student/:id', deleteStudentCtrl)


export {router as studentsRouter}