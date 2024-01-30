import connectDb from "@utils/connectMongo";
import Prompt from "@components/Prompt";

export const POST =  async ( request , response ) =>{

    const {userId , tag , prompt} = request.json();

    try{

       await connectDb();
       const post = await Prompt.create({userId,tag,prompt});

    }catch{

    }
}