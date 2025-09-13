import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import logo from '../assets/logo1.png'
function Navbar() {
    const Navigate = useNavigate()
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5 fixed-top">
                <div className="container-fluid bg-dark navbar-dark px-5 py-3 m-0">
                    <a className="navbar-brand logo" href="/"><img src={logo} alt="" style={{height : "40px"}}/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item me-5 ms-1">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item me-5 ms-1">
                            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                        </li>
                        <li className="nav-item me-5 ms-1">
                            <Link className="nav-link active" aria-current="page" to="/service">Service</Link>
                        </li>
                        <li className="nav-item me-5 ms-1">
                            <Link className="nav-link active" aria-current="page" to="/blog">Blog</Link>
                        </li>
                        <div className="dropdown">
                            <Link className="nav-link active dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-current="page" to="/blog">Pages</Link>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                {/* <li><a className="dropdown-item" href="/teamdetails">Team Details</a></li> */}
                                <li><a className="dropdown-item" href="/ourteam">Our Team</a></li>
                                <li><a className="dropdown-item" href="/shop">Shop</a></li>
                                <li><a className="dropdown-item" href="/productdetails">Product Details</a></li>
                                <li><a className="dropdown-item" href="/gallery">Gallery</a></li>
                                {/* <li><a className="dropdown-item" href="/gallery">Gallery</a></li> */}
                            </ul>
                        </div>
                    </ul>
                    <button className="btn btn-outline-warning me-3" type="button" onClick={()=> Navigate("/booking")}>Book Online</button>
                    <SignedOut>
                        <SignInButton>
                            
                            <button className="btn btn-outline-warning" type="button">Login</button>
        
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </nav>
        </>
    )
}

export default Navbar;