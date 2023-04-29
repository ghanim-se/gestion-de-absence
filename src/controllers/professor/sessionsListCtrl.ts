import { Response, Request } from "express";
import { getAbsencesListByUserId, getabsenceLists } from "../../services/absenceServ";
import { getSessionListUtil } from "../../utils/sessions";
import { getUserById } from "../../services/userServ";


export const getSessionsListCtrl = async (req: Request, res: Response) => {
    const pathname = req.url.split('/').at(2)
    const session: any = req.session
    const user = await getUserById(session.userId)
    const absenceLists = await getAbsencesListByUserId(session.userId)
    const perfectAbsenceLists = await Promise.all(absenceLists.map(absenceList => getSessionListUtil(absenceList)))
    res.render('pages/professor/absence/sessionsList', {pathname, user, absenceLists: perfectAbsenceLists})
}