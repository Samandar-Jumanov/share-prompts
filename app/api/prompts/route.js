import Prompt from "@models/Prompt"
import connectDb from "@utils/connectMongo";


export const  GET = async(request , response ) =>{
    try {
           await connectDb()
          const prompts = await Prompt.find({}).populate("creator");

          return  new Response(JSON.stringify(prompts), {status : 200})
    } catch (error) {
         return new  Response("Failed to fetch",  {status : 500})
    }
}