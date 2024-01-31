import Prompt from "@models/Prompt"
import connectDb from "@utils/connectMongo";


export default GET = async(request , response ) =>{
    try {
           await connectDb()
          const prompts = await Prompt.find({}).populate("creator");

          return Response(JSON.stringify(prompts) ,  {status : 200})
    } catch (error) {
         return Response(JSON.stringify(error.message),  {status : 500})
    }
}