const express=require('express')
const bodyParser=require('body-parser')
const app=express()
app.use(bodyParser.json())
app.listen(2000,()=>console.log('server started at port 2000'))
const mongoose=require('mongoose')

const mongo_uri="mongodb://127.0.0.1:27017/bhanudb"
mongoose.connect(mongo_uri)
.then(()=>console.log("Connected"))
.catch((err)=>console.log("error in connecting",err))

const userschema=new mongoose.Schema({
    name :{type:String, required:true},
    email :{type:String, required:true, unique:true},
    password :{type:String, required:true},
    createdAt :{type:Date, default: Date.now}
});

const usermodel=mongoose.model(
    "user",userschema
)

app.post("/api/users/register",async (req,res)=>{
    try{
        const {name,email,password}=req.body
        const user=new usermodel({name,email,password});
        await user.save()
        res.status(201).json({message:"user created successfully",user});
    }catch(error){
            res.status(400).json({message:"error in creating user",error});
    }
});

app.get("/api/users/:id",async (req,res)=>{
    try{
        const user=await usermodel.findById(req.params.id);
        if(!user) return res.status(404).json({message:"user not found"});
        res.json(user);
        }catch(error){
            res.status(400).json({message:"error in finding user",error});
    }
});

app.put("/api/users/:id",async (req,res)=>{
    try{
        const user=await usermodel.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!user) return res.status(404).json({message:"user not found"});
        res.json(user);
        }catch(error){
            res.status(400).json({message:"error in updating user",error});
    }    
});

app.delete("/api/users/:id",async (req,res)=>{
    try{
        const user=await usermodel.findByIdAndDelete(req.params.id);
        if(!user) return res.status(404).json({message:"user not found"});
        res.json({message:"user deleted successfully"});
        }catch(error){
            res.status(400).json({message:"error in deleting user",error});
    }    
});

const port=5000
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
    })