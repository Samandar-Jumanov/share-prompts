import mongoose from "mongoose";

let isMongoConnected = false  



async function connectDb(){

    mongoose.set('strictQuery' , true )
  
    if(isMongoConnected){
          console.log("Mongo db connected");
          return;
    };

    try {
        mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          console.log("Mongo db connected");
          isMongoConnected = true;
    } catch (error) {
          console.log(error.message);
          return
    }
}

export default connectDb;

