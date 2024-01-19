
import {Link, useLocation, useNavigate} from 'react-router-dom';
import './Nav.css'
import { useEffect, useState } from 'react';
import logo from './../../assets/img/Logo.png'
export const Nav=()=>{
    const navigate=useNavigate();
    const location = useLocation();
    const[active, setActive]=useState(location.pathname)
    const logout=(e)=>{
        e.preventDefault();
        localStorage.clear();
        navigate('/login')
    }

    return(
        <div>
            <span className='logo' ><img src={logo} style={{width:'100px' }} alt='logo'/></span>

            <ul className='nav-ul'>

                <li className={active==='/'?'active':''}><Link onClick={()=>setActive('/')} to="/">Products</Link></li>
                <li className={active==='/add'?'active':''}><Link onClick={()=>setActive('/add')} to="/add">Add Product</Link></li>
                <li className={active==='/update'?'active':''}><Link onClick={()=>setActive('/update')} to="/update">Update Products</Link></li>
                <li className={active==='/profile'?'active':''}><Link onClick={()=>setActive('/profile')} to="/profile">Profile</Link></li>
                <li className='div_logout'>
                   <a href='!#' onClick={(e)=>logout(e)}><i class="pi pi-sign-out btn-icon"></i>Logout</a> 
                </li>
            </ul>
           
        </div>
    )
}