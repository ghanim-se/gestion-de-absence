import { Request, Response, NextFunction } from "express";
import { createModule, deleteModule, getModuleById, getModules } from "../services/moduleServ";
import path from "path";
import { getPerfectModule } from "../utils/modules";
import { getSectors } from "../services/sectorServ";
import { getSemesters } from "../services/semesterServ";


export const getModulesCtrl = async (req: Request, res: Response, next: NextFunction) => {
    const modules = await getModules()
    const perfectModules = await Promise.all(modules.map(async module => await getPerfectModule(module)))
    const pathname = req.url.replace('/','')
    res.render(path.join(__dirname, '../../views/pages/modules/modules.ejs'), {modules: perfectModules, pathname})
}

export const createModuleCtrl = async (req: Request, res: Response, next: NextFunction) => {
    if (req.method === 'GET') {
        const sectors = await getSectors()
        const semesters = await getSemesters()
        res.render('pages/modules/add_module', {sectors, semesters})
    }
    else if (req.method === 'POST') {
        const {name, sectors, semesters} = req.body
        const module = {name, sectors: [...sectors], semesters: [...semesters]}
        try {
            await createModule(module)
            res.redirect('/modules')
        } catch (e: any) {
            res.send(e.stack)
        }
    }
}


export const updateModuleCtrl = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id)
    if (req.method === 'GET') {
        const sectors = await getSectors()
        const semesters = await getSemesters()
        const module = await getModuleById(id)
    console.log(module?.semesters.map(semester => semester.semesterId).includes(1))
        res.render('pages/modules/update_module', {module, sectors, semesters})
    }
}

export const deleteModuleCtrl = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id)
    try {
        await deleteModule(id)
        res.redirect('/modules')
    } catch(e: any) {
        res.send(`<pre>${e.stack}</pre>`)
    }
}