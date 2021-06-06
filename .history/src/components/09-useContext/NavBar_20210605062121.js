import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" href="#">useContext</Link>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                    <Link className="nav-link" href="#">Features</Link>
                    <Link className="nav-link" href="#">Pricing</Link>
                </div>
                </div>
            </div>
        </nav>
    )
}
