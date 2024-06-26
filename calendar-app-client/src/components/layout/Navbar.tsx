import React from 'react'
import '../../styles/Navbar.css'
// import login button and logout button
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';
// import {Link} from 'react-router-dom'
// import { signInWithGoogle } from '../firebase-config';

// created for auth0
function Navbar() {
    return (
        <div className="navbar-wrapper">
        <div className="navbar">
            <div className='navbar-left'>
                <svg className="menulist" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
            </div>
            <div className="navbar-right">
                <a className="navbar-title" href="">Feature</a>
                <a className="navbar-title" href="">About Us</a>
                {/* <div onClick={signInWithGoogle} className="navbar-title" href="">Login</div> */}
                <div className="navbar-title"><LoginButton /></div>
                <div className="navbar-title"><LogoutButton/></div>
            </div>
        </div>
        </div>

    )
}

export default Navbar