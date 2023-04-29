import { Response, Request } from "express";
import { getAbsencesListByUserId } from "../../services/absenceServ";
import { getUserById } from "../../services/userServ";


export const professorDashboardCtrl = async (req: Request, res: Response) => {
    const pathname = req.url.split('/').at(2)
    const session: any = req.session
    const user = await getUserById(session.userId)
    const NofSessions = (await getAbsencesListByUserId(session.userId)).length
    res.render('pages/professor/dashboard', {pathname, user, NofSessions})
}