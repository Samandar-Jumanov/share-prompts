import Prompt from "@models/Prompt";
import connectDb from "@utils/connectMongo";


export const GET =  async (request , { params }) =>{
     try {
      await connectDb();

        const prompt = await Prompt.findById(params.id);
        return new Response(JSON.stringify(prompt) , { status : 200})
     } catch (error) {
           return new Response( "Failed to get prompt", { status : 400})
     }
}

export const PATCH = async (request , { params}) =>{
    const {  prompt , tag } = request.json();
   try{
      await connectDb();
     const prompt = await Prompt.findById(params.id);
     if(!prompt)  return new Response("Cannot find prompt" ,{status : 500});
     prompt.tag = tag;
     prompt.prompt = prompt;
     await prompt.save();

      return new Response(JSON.stringify(prompt) , { status : 200})
     } catch (error) {
           return new Response( "Failed to update prompt", { status : 500})
     }
   };


export const DELETE = async ( request , { params }) =>{
      try {
        await connectDb();
        const prompt = await Prompt.findByIdAndRemove(params.id);
        return new Response("Deleted succesfully", { status : 200})
      } catch (error) {
            return new Response( "Failed to delete prompt", { status : 500})
      }
}  