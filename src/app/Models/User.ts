import mongoose from "mongoose";

const userSchema =  new mongoose.Schema({
    email:{type: String, require:true, unique:true},
    password:{type: String, require:true},
},
{timestamps:true}
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;