import Prompt from "@models/Prompt";
import connectToDb  from "@utils/connectMongo";

export const GET = async (request) => {
    try {
        await connectToDb()

        const prompts = await Prompt.find({}).populate('creator')

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 