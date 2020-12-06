import React from 'react'
import {Link} from "react-router-dom"
import './Header.css'

function Header() {
    return (
        <nav className="header">
            <div className="booklah">
            <Link to="/"> 
            <h1>Booklah!</h1>
            </Link>
            </div>
            <div className="header_nav">
                {/*Sign up and login link*/}
                <Link to="/sign-up" className="sign_up">
                    <button className="btn-sign-up">Sign Up</button>
                </Link>
                <Link to="/login" className="login">
                    <button className="btn-login">Login</button>
                </Link>
            </div>
        </nav>
    )
}

export default Header
