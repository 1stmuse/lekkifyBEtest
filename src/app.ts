import express, {Application, json} from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

import routes from './routes'

const app:Application = express()

const dbUri: string | undefined = process.env.DB

mongoose.connect(`${dbUri}`, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
    })
    .then(()=> console.log(`Connected ... working`))
    .catch(err=>console.log(err))
    
    mongoose.Promise = global.Promise

app.use(cors())
app.use(json())
app.use('/api', routes)

const port: string | number = process.env.PORT || 8080

app.listen(port, ()=>{
    console.log('connected', port)
})