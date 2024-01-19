export const ProductCard=(props)=>{
    const product=props.product;
    console.log("Product",product)
    return(
        <div className="card-product">
            <div className="card-header">
                <div  className="product-img w-100 h-100">
                <img src= {product.image} alt='img' />

                </div>
           
            </div>
            <div className="body-card">
                <span class='product-name'>{product.name}</span>
                <span class='product-price'>${product.price}</span>
                <p>{product.description}</p>
            
            </div>
            <div className="footer-card">
                    <button className="btn btn-dlt" style={{margin:'5px'}} onClick={()=>props.delete(product._id)}><i className="pi pi-trash btn-icon"></i>Delete</button>
                    <button className="btn " style={{margin:'5px'}}><i className="pi pi-file-edit btn-icon"></i>Update</button>
                </div>

        </div>
    )
}