const express=require('express');
const User=require('./db/User');
const Product=require('./db/Product');
const validate=require('./db/User');
const validate_product=require('./db/Product');
const cors=require("cors");

// const router = express.Router();

require('./db/config')

const app=express();

app.use(cors())

app.use(express.json());



app.post('/api/user/register',async (req,res)=>{
    const { error } = validate(req.body)
    if (error) {
        return res.status(400).send(error.details[0].message)
    }
    let user = await User.findOne({ email: req.body.email })
    if (user) {
        return res.status(400).json({message:'User already exisits. Please sign in'})
    }
    try{        
        const user = new User(req.body);
        let result=await user.save();
        res.send(result);
    }
    catch(err){
        return res.status(400).json({ message: err.message })
    }
})

app.post('/api/user/login',async(req,res)=>{
   
   try{
    let user_dto=await User.findOne({email:req.body.email});
  
    if(user_dto){
        if(user_dto.password==req.body.password){
            res.status(200).json({message:"User Login Successfully",user:user_dto}); 
        }
        else{
            return res.status(400).json({message:"Invalid Credentials"})
        }
    }
    else{
        return res.status(400).json({message:"User not found"})
    }
   }
   catch(err){
    return res.status(400).json({ message: err.message })
   }
})

app.post('/api/product/add',async (req,res)=>{
    const { error } = validate(req.body)
    if (error) {
        return res.status(400).send(error.details[0].message)
    }

    try{        
        const product = new Product(req.body);
        let result=await product.save();
        res.send(result);
    }
    catch(err){
        return res.status(400).json({ message: err.message })
    }
})

app.get('/api/product/getAllProducts',async (req,res)=>{
    try{
        const products=await Product.find({});
        res.send(products);
    }
    catch(err){
        return res.status(400).json({message:err.message});
    }
})


app.get('/',(req,res)=>{
    res.send("Server is Started");
})

app.listen(5000);