import React, {useState} from 'react';
import './scss/nav.scss';
import {Link} from 'react-router-dom';
const Header=()=>{
    const [show,setShow] = useState(false);
    function toggle(){
        show? setShow(false):setShow(true)
    }
    return(
        <div className="header">
            <div className="name">Desert Dream Doodles</div>
            <div className="nav">
            <Link className="link" to='/'>Home</Link>
            <Link className="link" to='/about'>About Us</Link>
            <Link className="link" to='/contact'>Contact</Link>
            <div className="links">
            <span>Info</span>
            <Link className="link" to='/our_mission'>Our Mission</Link>
            <Link className="link" to='/why_us'>Why Us</Link>
            <Link className="link" to='/why_irish_goldendoodles'>Why Irish Goldendoodles</Link>
            <Link className="link" to='/puppies'>Puppies</Link>
            </div>
            </div>
        </div>
    )

}
export default Header;