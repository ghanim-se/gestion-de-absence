import express from 'express'
import { createSectorCtrl, deleteSectorCtrl, getSectorsCtrl, updateSectorCtrl } from '../controllers/sectorCtrl'

const router = express.Router()


router.get('/sectors', getSectorsCtrl)

router.get('/add_sector', createSectorCtrl)
.post('/add_sector', createSectorCtrl)

router.get('/update_sector/:id', updateSectorCtrl)
.post('/update_sector/:id', updateSectorCtrl)

router.get('/delete_sector/:id', deleteSectorCtrl)


export {router as sectorsRouter}