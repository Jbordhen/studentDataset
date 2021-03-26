import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import morgan from 'morgan'
import studentRoutes from './routes/studentRoutes.js'
import subjectRoutes from './routes/subjectRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(morgan('dev'))

app.use(express.json())

app.use('/api/students', studentRoutes)
app.use('/api/subjects', subjectRoutes)

app.get('/', (req, res) => {
    res.send(`Api is running`)
})

const { PORT } = process.env

app.listen(PORT, console.log(`Server is running on port: ${PORT}`))
