import instance from './axios_instance';
import {server_url,ROUTE_PRODUCT} from './../constants';
export class Productapi{
    
    addProduct(body){
        return instance.post(server_url+ROUTE_PRODUCT+'/add',body,{
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }

    getAllProduct(){
        return instance.get(server_url+ROUTE_PRODUCT+'/getAllProducts');
    }

    deleteProduct(id){
        return instance.delete(server_url+ROUTE_PRODUCT+`/delete/${id}`);
    }



}