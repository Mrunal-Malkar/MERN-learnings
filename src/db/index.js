import mongoose from "mongoose";

const DB=async()=>{
    try{
        const connectioninstance=await mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)
        console.log("Database connected on db",connectioninstance)
    }catch(error){
        console.log("error:",error)
        process.exit(1)
    }
}

export default DB;