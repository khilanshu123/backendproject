// require('dotenv').config({path: './env'})
import dotenv from 'dotenv'
import connectDB from './db/index.js';
import { app } from './app.js';


dotenv.config({
    path: './env'
})


connectDB()
.then(()=>{
  app.listen(process.env.PORT   || 8000,()=>{
    const port = (process.env.PORT)
    console.log(`server is runing in port ` + port)
  })
  app.on("error",(err)=>{
    console.log("Eroor: ",err)
    throw err
  })
  
})
.catch((err)=>{
  console.log("MONGODB connection failed !!! " ,err);
})







/*
const app = express()

(async () =>{
    try {
      await  mongoose.connect(`${process.env.MONGO_URI}`/`${DB_NAME}`)
      app.on("error",(error)=>{
        console.log("Error: ",error);
        throw error
      })
      app.listen(process.env.PORT,()=>{
        console.log("your application is run on port nu ",`${process.env.PORT}`)
      })
    } catch (error) {
        console.log("Erroro :",error)
            throw error
        
    }

})
    */