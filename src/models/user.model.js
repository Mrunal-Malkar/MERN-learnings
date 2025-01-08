import mongoose,{schema} from "mongoose"

const userschema=new schema({

    username:{
        type:String,
        required:[true,"username is required"],
        unique:[true,"usernmae is already taken"],
        lowercase:[true,"username must be in lowercase"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"email already taken"],
        trim:true,
        lowercase:true
    },
    watchhistory:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"video"
        }
    ],
    fullname:{
        type:String,
        lowercase:[true,"the name should be in lowercase only"],
        required:true,
        index:true
    },
    password:{
        type:String,
        required:[true,"password is required"],
    },
    refreshtoken:{
        type:String,
    },
    avatar:{
        type:String,
        required:true
    },
    coverimage:{
        type:String,
    }

},{timestamp:true});

export const User=mongoose.model("User","userschema")