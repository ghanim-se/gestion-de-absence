import { Request, Response, NextFunction } from "express"
import { createSector, deleteSectorById, getSectors, getSectorById, updateSectorById } from "../services/sectorServ"




// /sectors
export const getSectorsCtrl = async (req: Request, res: Response, next: NextFunction) => {
    const sectors = await getSectors()
    const pathname = req.url.replace('/', '')
    res.render('pages/sectors/sectors', {sectors, pathname})
}

// /update_sector
export const createSectorCtrl = async (req: Request, res: Response, next: NextFunction) => {
    if (req.method === 'GET')
        res.render('pages/sectors/add_sector')
    else if (req.method === 'POST') {
        const { name }  = req.body
        const sector = { name }
        try {
            await createSector(sector)
            res.redirect('/sectors')
        } catch(e: any) {
            res.send(e.stack)
        }
    }
}


export const updateSectorCtrl = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id)
    if (req.method === 'GET') {
        const sector = await getSectorById(id)
        res.render('pages/sectors/update_sector', {sector})
    }
    else if (req.method === 'POST') {
        const { name }  = req.body
        const sector = { name }
        try {
            await updateSectorById(sector, id)
            res.redirect('/sectors')
        } catch(e: any) {
            res.send(e.stack)
        }
    }

}

export const deleteSectorCtrl = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id)
    try {
        await deleteSectorById(id)
        res.redirect('/sectors')
    } catch(e: any) {
       res.send(e.stack) 
    }
}