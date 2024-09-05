import express from 'express'
import cors from 'cors'
import "dotenv/config"
import connectToDb from './db'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(cors())



// route import

// route declaration

connectToDb()
.then(()=>{
    app.listen(3000, ()=>{
        console.log("listening on port 3000")
    })
}).catch(error => console.log(error))