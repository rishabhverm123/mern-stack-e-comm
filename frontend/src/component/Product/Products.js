import { useEffect, useState } from "react"
import { Productapi } from '../../api/Product-api';
import category from './../../helperclasses/category';
import { NotificationType } from "../../helperclasses/enums";
import { NotificationService } from "../../api/notification_service";

import { ProductCard } from "./ProductCard";
import { ProductCategory } from "./ProductCategory";
export const Products=()=>{
    const service_product=new Productapi();
    const service_notifier=new NotificationService();



    const updateCategory=(category)=>{
      
        setCurrentcategory(category);
        // updateProduct()
    }

    const updateProduct=()=>{
        debugger;
       
        if(Currentcategory==='All'){
            setCurrentProductCategory(products);
            return;
          }
          const Filteredproducts=products.filter((item)=>item.category===Currentcategory);
      
            setCurrentProductCategory(Filteredproducts);
       
          
    }

    const[products,setProducts]=useState([]);
    const[Currentcategory,setCurrentcategory]=useState('All');

    const [CurrentProductCategory,setCurrentProductCategory]=useState([]);

    const allCategories=[{name:'All'}, ...category]

    const deleteProduct=(id)=>{
        service_product.deleteProduct(id).then(
            (response)=>{
            debugger;
            service_notifier.showNotification(NotificationType.Success,"Product Deleted Successfully")
             getAllProduct();
            }
        ).catch((error)=>{
            error=error.response;
            service_notifier.showNotification(NotificationType.Error,error.data.message)
        })
    }

    useEffect(()=>{
      
            getAllProduct();
        

        
    },[]);

    useEffect(()=>{
        updateProduct();
    },[products,Currentcategory])

    const getAllProduct=()=>{
        service_product.getAllProduct().then(
            (response)=>{
            debugger;
            setProducts(response.data);
            // setTimeout(()=>{
            //     updateProduct()
            // },2000);
            
            }
        ).catch((error)=>{
            error=error.response;
            service_notifier.showNotification(NotificationType.Error,error.data.message)
        })
    }
    return(
        <div className="container-fluid" style={{textAlign:'center', padding: '10px 10px', height:'100%'}}>
            <div className="product_header">
                <span className="text_format">All Product</span>
            </div>

            <div className="tab_panel">

                <ProductCategory categories={allCategories} current={Currentcategory} event={updateCategory}/>
            </div>
            {
                CurrentProductCategory.length? <div className="product-list">
                {
                    CurrentProductCategory.map((item,index)=>{
    
                        return(
                                <ProductCard product={item} delete={deleteProduct} key={index}/>
                        )
                    })
                }
                </div>
                :
                <div className="no_data">No Products Available...!</div>
            }

 
        </div>
    )
}