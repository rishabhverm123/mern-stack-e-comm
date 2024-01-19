import { useState } from 'react';
import category from './../../helperclasses/category'
import { Dropdown } from 'primereact/dropdown';
import { NotificationService } from '../../api/notification_service';
import { NotificationType } from '../../helperclasses/enums';
import { Appglobal } from '../../api/appglobal';
import { Productapi } from '../../api/Product-api';
export const AddProduct=()=>{

    const initialValues = {
        name: "",
        price: "",
        category: null,
        description: "",
        image: "",
      };
      const [values, setValues] = useState(initialValues);
      const service_notifier=new NotificationService();
      const service_product=new Productapi();
      const app_global=new Appglobal();
      const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        setValues({
          ...values,
          [name]: value,
        });
      };

      const add=()=>{
            if(values.name.trim()==='' ||values.price.trim()==='' ||values.category===null ||values.description.trim()==='' ||values.image.trim()==='' ){
                service_notifier.showNotification(NotificationType.Error,'Please fill mandatory fields');
                app_global.scroll_to_element('initial_field')
                return;
            }

            let body={
                name:values.name,
                price:values.price,
                category:values.category.name,
                description:values.description,
                image:values.image,
            }
            service_product.addProduct(JSON.stringify(body)).then(
                (response)=>{
            service_notifier.showNotification(NotificationType.Success,`New Product Added Successfully`);
            setValues(initialValues);
                }
            ).catch((error)=>{
                error=error.response;
                service_notifier.showNotification(NotificationType.Error,error.data.message)
            })

      }


    return (
        <div className="product_add" id='add_product_form'>
            <div className="product_header">
                <span className="text_format">Add Product</span>
            </div>
            <div  className="product_main">
                <div id="initial_field" className="form_lables">
                    <label className="text_label">Name <span className="text_astric">*</span></label>
    
                    <input type="text" name="name" onChange={handleInputChange} value={values.name}className="form-control" />                  

                        
        
                
                </div>
               
                <div className="form_lables">
                    <label className="text_label">Price <span className="text_astric">*</span></label>
                    <input type="number" name="price" onChange={handleInputChange} value={values.price} min={0} className="form-control" />
                    
                </div>
                <div className="form_lables">
                    <label className="text_label">Category <span className="text_astric">*</span></label>
                    {/* <input type="text" className="form-control" /> */}
                    <Dropdown options={category} value={values.category} name='category' onChange={(e) => handleInputChange(e)} optionLabel="name" 
    placeholder="Select a Category" className="w-full md:w-14rem " />
                    
                </div>

                <div className="form_lables">
                    <label className="text_label">Description <span className="text_astric">*</span></label>
                    <textarea name="description" onChange={handleInputChange} value={values.description} className="form-control"/>
                    
                </div>
                <div className="form_lables">
                    <label className="text_label">Image <span className="text_astric">*</span></label>
                    <input type="text" name="image" onChange={handleInputChange} value={values.image} className="form-control" />
                    
                </div>
                <div className="product_footer">
                <button className="btn" onClick={()=>add()}><i className="pi pi-plus-circle btn-icon"></i>Add</button>
                <button className="btn" onClick={()=>setValues(initialValues)}><i className="pi pi-times-circle btn-icon"></i>Reset</button>
            </div>
            </div>
          
        </div>
    )
}