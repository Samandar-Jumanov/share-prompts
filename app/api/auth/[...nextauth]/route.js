import connectDb from "@utils/connectMongo";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "@models/users";


const handler = NextAuth({
     providers: [
        GoogleProvider ({
             clientId : process.env.GOOGLE_CLIENT_ID,
             clientSecret : process.env.GOOGLE_CLIENT_SECRET
         })
     ],

     async session ({session}){
          const sessionUser = await User.findOne({
                email : session.user.email
          });
            session.user.id =  sessionUser._id.toString();

            return session;
     },
    
     async signIn({ profile }){
         try {
             await connectDb();
             const user = await User.findOne({email: profile.email});

             if(user){
                return user;
             };

             const newUser = await User.create({
                 name: profile.name.replace(" " , '').toLowerCase(),
                 email: profile.email,
                 image: profile.image,
             })


         } catch (error) {
          
         }
     }

})



export { handler as GET , handler as  POST}