import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
            <img className="nav__logo" src="https://i.ibb.co/3NRTSGN/Group-86.png" alt=""/>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div  class="collapse navbar-collapse ml-auto" id="navbarNav">
                <ul   class="navbar-nav ml-auto ">
                    <li class="nav-item active d-flex justify-content-center">
                        <a  class="nav-link nav__a" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item d-flex justify-content-center">
                        <a class="nav-link nav__a" href="#">About</a>
                    </li>
                    <li class="nav-item d-flex justify-content-center">
                        <a class="nav-link d-flex justify-content-center nav__a" href="#">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link d-flex justify-content-center nav__a" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link d-flex justify-content-center nav__a" href="#">Our Team</a>
                    </li>
                    <li class="nav-item d-flex justify-content-center nav__a">
                       <button className="nav__button ">Contact Us</button>
                    </li>
                    
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;