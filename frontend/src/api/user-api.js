import instance from './axios_instance';
import {server_url,ROUTE_USER} from './../constants';
export class Userapi{
    
    registerUser(body){
        return instance.post(server_url+ROUTE_USER+'/register',body,{
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }

    loginUser(body){
        return instance.post(server_url+ROUTE_USER+'/login',body,{
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }

}