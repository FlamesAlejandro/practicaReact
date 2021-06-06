import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    <a className="nav-link" href="#">Features</a>
                    <a className="nav-link" href="#">Pricing</a>
                    <a className="nav-link disabled" href="#" tabindex="-1">Disabled</a>
                </div>
                </div>
            </div>
        </nav>
    )
}
