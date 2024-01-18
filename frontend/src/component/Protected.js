import { Navigate, Outlet, useNavigate } from "react-router-dom";

import React from 'react';
import { Nav } from "./Header/Nav";
import { Footer } from "./Footer/Footer";
export const Protected=()=>{
    const userData=localStorage.getItem("user_id");
    debugger;
    if(userData){
        return (
            <React.Fragment>
            <div className="app_header">
                <Nav />
            </div>
            <div className="app_main">
                <Outlet />
            </div>

            <div className="app_footer">
                <Footer />
            </div>
            </React.Fragment>

        )
    }
    else{
        return(
            <Navigate to={'/login'} />
        )
      
    }
}