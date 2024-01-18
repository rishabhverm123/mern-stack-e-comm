const express=require('express');
const User=require('./db/User');
const validate=require('./db/User');
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


app.get('/',(req,res)=>{
    res.send("Server is Started");
})

app.listen(5000);