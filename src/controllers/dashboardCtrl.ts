import { Response, Request } from "express";
import { getStudents } from "../services/studentServ";
import { getUsers } from "../services/userServ";
import { getSectors } from "../services/sectorServ";


export const dashboardCtrl = async (req: Request, res: Response) => {
    const pathname = req.url.replace('/', '') 
    const NofStudents = (await getStudents()).length
    const NofUsers = (await getUsers()).length
    const NofSectors = (await getSectors()).length
    res.render('pages/dashboard', {pathname, NofStudents, NofSectors, NofUsers})
}