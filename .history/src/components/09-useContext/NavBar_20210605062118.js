import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                < className="navbar-brand" href="#">useContext</>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    < className="nav-link active" aria-current="page" href="#">Home</>
                    < className="nav-link" href="#">Features</>
                    < className="nav-link" href="#">Pricing</>
                </div>
                </div>
            </div>
        </nav>
    )
}
