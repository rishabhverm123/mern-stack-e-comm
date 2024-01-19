import { useEffect, useState } from "react"
import { Productapi } from '../../api/Product-api';
import category from './../../helperclasses/category'
import { NotificationType } from "../../helperclasses/enums";
import { NotificationService } from "../../api/notification_service";
import { Card } from 'primereact/card';
export const Products=()=>{
    const service_product=new Productapi();
    const service_notifier=new NotificationService();

    const[products,setProducts]=useState([]);

    useEffect(()=>{
         service_product.getAllProduct().then(
                (response)=>{
                debugger;
                setProducts(response.data);
                console.log(products)
                }
            ).catch((error)=>{
                error=error.response;
                service_notifier.showNotification(NotificationType.Error,error.data.message)
            })
    },[]);

    return(
        <div style={{textAlign:'center',margin:'10px'}}>
            <h3>Products</h3>

            {
                products.map((item,index)=>{
                    const {name,price,description,image}=item;
                    return(
                        <Card title={name} subTitle={price}  header={<img alt="Card" style={{width:'200px'}} src={image} />} className="md:w-25rem">
    <p className="m-0">
    {description}
    </p>
</Card>
                    )
                })
            }
        </div>
    )
}