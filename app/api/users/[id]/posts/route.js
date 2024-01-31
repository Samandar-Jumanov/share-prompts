import connectDb from "@utils/connectMongo";;
import Prompt from "@models/Prompt";


export const GET = async ( request , { params }) =>{
    try {

        await connectDb();
        
        const userPosts =await Prompt.find({
             creator : params.id
        }).populate("creator");

        return new Response(JSON.stringify(userPosts) , { status : 200})
    } catch (error) {
        return new Response(" Failed to fetch posts ", { status : 500})
    }
};
