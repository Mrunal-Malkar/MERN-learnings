//METHOD 1: in which you connect to database in differenct file and import it in this file, and then start server in this file.

import DB from "./db/index.js";
import dotenv from "dotenv";
import express from "express"

const app=express();

dotenv.config(
    {path:"./.env"}
);

DB()
.then(()=>{
    console.log("Database connected !!")
    app.listen(process.env.PORT||4000,()=>{console.log("Server is running on port:",process.env.PORT||4000)})
})
.catch((err)=>{
    console.log("Error:",err)
})










//ALTERNATIVE METHOD-in which you connect to database and start server in same file:



// const app=express();

// (async()=>{
//     try {
//        await mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)
//         console.log("Database connected")
//         app.on("error",()=>console.log("Error in server"))
//         app.listen(process.env.PORT,()=>{
//             console.log("server is running on port:",process.env.PORT)
//         })
//     }catch(error){
//         console.log("Error:",error)
//     }
// }
// )()