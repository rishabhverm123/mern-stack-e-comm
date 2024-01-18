import { useState } from "react"

export const Signup=()=>{

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const register=()=>{
        console.log("name",name);
        console.log("email",email);
        console.log("password",password);
    }


    return (
        <div className="register-form">
            
            <div className="form" >
            <h1>Register Yourself</h1>
            <input type="text" className="form-control-input" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
            <input type="text" className="form-control-input" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter Email" />
            <input type="password" className="form-control-input" value={password}  onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
            <button className="btn" onClick={()=>register()}>Signup</button>
            </div>

        </div>
    )
}