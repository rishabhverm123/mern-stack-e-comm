import { useNavigate } from 'react-router-dom';
import './Login.css';
import { useState } from 'react';
import { Userapi } from '../../api/user-api';
import { NotificationService } from '../../api/notification_service';
import { NotificationType } from '../../helperclasses/enums';

export const Login=()=>{

    const navigate=useNavigate();

    const service_user=new Userapi();

    const service_notifier=new NotificationService();

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const login=()=>{
        if(email.trim()==='' || password.trim()===''){
            service_notifier.showNotification(NotificationType.Error,"Please fill required field");
            return;
        }

        service_user.loginUser({email:email,password:password}).then(
            (response)=>{
                response=response.data;
            service_notifier.showNotification(NotificationType.Success,`User ${response.user.name} Logged in successfully`);

            localStorage.setItem('user_id',response.user._id);
            navigate('/')

            }
        ).catch((error)=>{
            debugger;
            error=error.response;
            service_notifier.showNotification(NotificationType.Error,error.data.message)
        })

    }

    return (
        <div className='auth-page div_center'>
            <div className='login_card'>
                <div className='auth_header'>
                <h3>Login Here</h3>
                </div>
                <div className='auth_main'>
        <label className='form_label' for="username">Email <span className='text_astric'>*</span></label>
        <input type="text" className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" id="email" />

        <label for="password" className='form_label'>Password</label>
        <input type="password" className='form-control'  value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" id="password" />

        <div className='auth_footer'>
            <span className='text_link' onClick={()=>navigate('/register')}>Doesn't have account? Register Here</span>
            <button className='btn' onClick={()=>login()}>Login Here</button>
        </div>
                </div>
            </div>
        </div>
    )
}