
const asyncHandeler = (requestHandeler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandeler(req,res,next)).
        catch((error)=>next(error))
            
    }
}

export {asyncHandeler}



// const asyncHandeler = (fun)=>async (res,req,next)=>{
//     try {
//         await fun(req,res,next) 
//     } catch (error) {
       
//         res.status(error.cod || 500).json({
//             success:false,
//             message:error.message
//         })
        
//     }

// }