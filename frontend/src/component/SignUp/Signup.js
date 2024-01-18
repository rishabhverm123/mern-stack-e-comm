import { useState } from "react";

import {Userapi} from './../../api/user-api'
import { NotificationService } from "../../api/notification_service";
import { NotificationType } from "../../helperclasses/enums";
import { useNavigate } from "react-router-dom";

export const Signup=()=>{

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const navigate=useNavigate();

    const service_user=new Userapi();

    const service_notifier=new NotificationService();
    const register=()=>{

        const body={
            name:name,
            email:email,
            password:password,
        }
        service_user.registerUser(JSON.stringify(body)).then(
            (response)=>{
            const user=response.data;
            service_notifier.showNotification(NotificationType.Success,`User "${user.name}" has been registered successfully`)
            localStorage.setItem('user_id',user._id);
            navigate('/');
        }).catch((error) => {
                debugger;
                error=error.response
            service_notifier.showNotification(NotificationType.Error,error.data.message)

          
      });
    }


    return (
        <div className='auth-page div_center'>
        <div className='login_card'>
            <div className='auth_header'>
            <h3>Register Here</h3>
            </div>
            <div className='auth_main'>
            <label className='form_label' for="username">Name <span className='text_astric'>*</span></label>
    <input type="text" className='form-control' value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" id="name" />
    <label className='form_label' for="username">Email <span className='text_astric'>*</span></label>
    <input type="text" className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" id="email" />

    <label for="password" className='form_label'>Password</label>
    <input type="password" className='form-control' value={password}  onChange={(e)=>setPassword(e.target.value)} placeholder="Password" id="password" />

    <div className='auth_footer'>
        <span className='text_link' onClick={()=>navigate('/login')}>Already have account? Login Here</span>
        <button className='btn' onClick={()=>register()}>Register Here</button>
    </div>
            </div>
        </div>
    </div>



    )
}