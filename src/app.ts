import express from 'express'
import organizerRoutes from './routes/organizer.route'

const app = express()

app.use(express.json())
app.use('/api/organizer', organizerRoutes)

export default app