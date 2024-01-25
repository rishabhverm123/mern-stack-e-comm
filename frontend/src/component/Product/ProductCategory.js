import React from 'react';
export const ProductCategory=(props)=>{
    const setCategory=(e,category)=>{
        debugger;
        e.preventDefault();

        props.event(category);
    }
    return (
      
                      <ul className='nav-tabs'>
                {
                    props.categories.map((item,index)=>{
                        return(
                     
                            <li className='nav-item' key={index}>
                               
                                <a className={`nav-link ${props.current===item.name?'active':''}`} href="!#" onClick={(e)=>setCategory(e,item.name)}> {item.name}</a>
                                </li>

                        
                        
                        )
                            
                        

                        
                    })
                }



</ul>
      
    )
}