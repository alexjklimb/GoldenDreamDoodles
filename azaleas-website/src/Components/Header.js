import React from 'react';
import './scss/home.scss';
import {Link} from 'react-router-dom';
const Header=()=>{
    return(
        <div className="header">
            <div className="name">Desert Dream Doodles</div>
            <div className="nav">
            <Link className="link" to='/'>Home</Link>
            <Link className="link" to='/about'>About</Link>
            <Link className="link" to='/our_mission'>Our Mission</Link>
            <Link className="link" to='/why_us'>Why Us</Link>
            <Link className="link" to='/why_irish_goldendoodles'>Why Irish Goldendoodles</Link>
            <Link className="link" to='/puppies'>Puppies</Link>
            <Link className="link" to='/contact'>Contact</Link>
            </div>
        </div>
    )

}
export default Header;