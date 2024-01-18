import { useState } from "react";

import {Userapi} from './../../api/user-api'
import { NotificationService } from "../../api/notification_service";
import { NotificationType } from "../../helperclasses/enums";

export const Signup=()=>{

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const service_user=new Userapi();

    const service_notifier=new NotificationService();
    const register=()=>{
        console.log("name",name);
        console.log("email",email);
        console.log("password",password);

        const body={
            name:name,
            email:email,
            password:password,
        }
        service_user.registerUser(JSON.stringify(body)).then(
            (response)=>{
                debugger;
            service_notifier.showNotification(NotificationType.Success,`User "${response.data.name}" has been registered successfully`)
            }).catch((error) => {
                debugger;
                error=error.response
            service_notifier.showNotification(NotificationType.Error,error.data.message)

          
      });
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