import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true, 
      minlength: 2,   
      maxlength: 30
    },
    email: { 
      type: String, 
      required: true, 
      unique: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
    },
    password: { 
      type: String, 
      minlength: 6,   
      maxlength: 128, 
      
    },
    googleId: { 
      type: String 
    },
    avatar: { 
      type: String, 
    },
   
  }, 
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
