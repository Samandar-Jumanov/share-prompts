import connectDb from "@utils/connectMongo";
import Prompt from "@components/Prompt";

export const POST =  async ( request , response ) =>{
    const {userId , tag , prompt} = request.json();

    try{

       await connectDb();
       const newPrompt = new  Prompt({ creator : userId , prompt : prompt , tag : tag });
       await newPrompt.save();
       console.log("Created a new prompt");
       
        return new  Response(JSON.stringify(newPrompt) , { status : 201 } )

    }catch{
         return new  Response("something went wrong ", {status : 500} );

    }
}