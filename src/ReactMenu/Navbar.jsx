import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className='container-fluid nav_bg'>
                <div className='row'>
                    <div className='col-10 mx-auto'>

                   
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link  className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item"> <Link active="menu_active " className="menu_active nav-link " aria-current="page" to="/">Home</Link></li>
                            <li className="nav-item"> <Link  className="menu_active nav-link" to="/service">Service</Link></li>
                            <li className="nav-item"> <Link  className="menu_active nav-link" to="/contact">Contact</Link></li>
                            <li className="nav-item"> <Link  className="menu_active nav-link" to="/about">About</Link></li>
                    
                        </ul>
                      
                    </div>
                </div>
            </nav>
            </div>
                </div>
            </div>
        </>
    )
}

export default Navbar