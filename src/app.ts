import express, {Application, json} from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

import routes from './routes'

const app:Application = express()

app.use(cors())
app.use(json())
app.use('/api', routes)

const port: string | number = process.env.PORT || 8080


app.listen(port, ()=>{
    console.log('connected', port)
})

export default app