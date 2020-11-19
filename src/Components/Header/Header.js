import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="Header d-flex justify-content-around row">
            <div className="header__discription d-flex align-content-center flex-wrap  col-md-5 ">
                <h1>Florence agency</h1>
                <p>Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                </p>
                <button className="header__button">See Pricing</button>
            </div>

            <div className="col-md-6 d-flex align-content-center flex-wrap">
                <img className="header__img" src="https://i.ibb.co/PtSYn6n/16-Converted-2x.png" alt=""/>
            </div>
        </div>
    );
};

export default Header;