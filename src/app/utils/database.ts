import mongoose from 'mongoose'

const connectDB = async ()=>{
    try {
         await mongoose.connect("mongodb+srv://vikasprins15740:JYGcIaQGBMDqWxWx@cluster0.ifvgyet.mongodb.net/",{
        dbName:'Auth_App'
    })
        console.log("MongoDb Connected successful");
          
    } catch (error) {
    console.error("MongoDB connection error:", error);
  }
   
}
export default connectDB