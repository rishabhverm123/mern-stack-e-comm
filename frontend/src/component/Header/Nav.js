
import {Link, useNavigate} from 'react-router-dom';
import './Nav.css'
export const Nav=()=>{
    const navigate=useNavigate();
    const logout=(e)=>{
        e.preventDefault();
        localStorage.clear();
        navigate('/login')
    }
    return(
        <div>
            <ul className='nav-ul'>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Products</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li className='div_logout'>
                   <a href='!#' onClick={(e)=>logout(e)}>Logout</a> 
                </li>
            </ul>
           
        </div>
    )
}