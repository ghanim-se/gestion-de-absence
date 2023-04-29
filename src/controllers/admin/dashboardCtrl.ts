import { Response, Request } from "express";
import { getStudents } from "../../services/studentServ";
import { getUserById, getUsers } from "../../services/userServ";
import { getSectors } from "../../services/sectorServ";
import { getabsenceLists } from "../../services/absenceServ";


export const dashboardCtrl = async (req: Request, res: Response) => {
    const pathname = req.url.replace('/', '') 
    const session: any = req.session
    const user = await getUserById(session.userId)
    const promies = await Promise.all([
                            (await getStudents()).length, 
                            (await getUsers()).length,
                            (await getSectors()).length,
                            (await getabsenceLists()).length
                        ])
    res.render('pages/admin/dashboard', {pathname, user, NofStudents: promies[0], NofSectors: promies[1], NofUsers: promies[2], NofAbsenceLists: promies[3]})
}