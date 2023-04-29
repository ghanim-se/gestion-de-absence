import { Response, Request } from "express";
import { getUserByEmail, getUserById } from "../services/userServ";

export const loginPageCtrl = async (req: Request, res: Response) => {
    const session: any = req.session
    if (req.method === 'GET') {
        if (!session.userId) return res.render('pages/login')

        const role = (await getUserById(session.userId))?.role
        if (role === 'ADMIN') res.redirect('/dashboard')
        else if(role === 'USER') res.redirect('/professor/dashboard')
    }

    else if (req.method === 'POST') {
        const { email, password } = req.body
        const user = await getUserByEmail(email)

        if (user && user.password === password) {
            session.userId = user.id
            if (user.role === 'ADMIN') res.redirect('/dashboard')
            else if(user.role === 'USER') res.redirect('/professor/dashboard')

        } else  res.redirect('/')
    }
}

export const logoutButtonCtrl = (req: Request, res: Response) => {
    req.session.destroy(() => {})
    res.redirect('/')
}