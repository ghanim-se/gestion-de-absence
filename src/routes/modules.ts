import express from 'express'
import { getModulesCtrl, createModuleCtrl, updateModuleCtrl, deleteModuleCtrl } from '../controllers/moduleCtrl'

const router = express.Router()

router.get('/modules', getModulesCtrl)

router.get('/add_module', createModuleCtrl)
.post('/add_module', createModuleCtrl)

router.get('/update_module/:id', updateModuleCtrl)
.post('/update_module/:id', updateModuleCtrl)

router.get('/delete_module/:id', deleteModuleCtrl)


export {router as modulesRouter}