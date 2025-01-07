
const asynchandler=(fun)=>{
    (req,res,next)=>{
        Promise.resolve(fun(req,res,next)).catch(
            (error)=>next(error)
        )
    }
}

export default {asynchandler}


// const asynchandler=(fn)=>(req,res,next)=>{
//     try{
//         fn(req,res,next)
//     }catch (error){
//         res.status(error.code||500).json({
//             sucess:false,
//             message:error.message
//         })
//     }
// }