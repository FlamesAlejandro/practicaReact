import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">useContext</Link>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    <Link className="nav-link" to="/about">About</Link>
                    <Link className="nav-link" to="/alogin">Login</Link>
                </div>
                </div>
            </div>
        </nav>
    )
}
