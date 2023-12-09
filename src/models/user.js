const {Schema,model}=require('mongoose');
const Thought=require('./thought');
const emailRegex= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const userSchema=new Schema({
    username:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        match:emailRegex
    },
    thoughts:[{
        type:Schema.Types.ObjectId,
        ref:'Thought'
    }],
    friends:[{
        type:Schema.Types.ObjectId,
        ref:'User'
    }]
})
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User=model('User',userSchema);

module.exports=User;