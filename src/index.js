import DB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config(
    {path:"./.env"}
);
// const dotenv = require("dotenv");
console.log("hello")
console.log(process.env.PORT)
DB()

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