import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import { studentsRouter } from './routes/students'
import { sectorsRouter } from './routes/sectors'
import { modulesRouter } from './routes/modules'
import { usersRouter } from './routes/users'
import { dashboardRouter } from './routes/dashboard'


dotenv.config()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const staticPath = path.join(__dirname, '..', 'public')
app.set('view engine', 'ejs')
app.use(express.static(staticPath));



app.get('/', (req, res) => {
    res.render('pages/index')
})
app.use('/', studentsRouter)
app.use('/', sectorsRouter)
app.use('/', modulesRouter)
app.use('/', usersRouter)
app.use('/', dashboardRouter)

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`app is runnig on port ${PORT}`))