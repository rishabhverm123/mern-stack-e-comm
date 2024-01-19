import './Footer.css';
import logo from './../../assets/img/Logo.png'
export const Footer=()=>{
    return (
    <div className="footer">
            <span className='footer-logo'><img src={logo} style={{width:'100px' }} alt='logo'/></span>
        
    </div>

    )
}