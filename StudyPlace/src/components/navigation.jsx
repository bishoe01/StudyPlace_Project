import React from 'react';
import LOGO from '../imgs/LOGO.png';
function Navigation() {
    return (
        <div className="navbar">
            <div className="navbar__left">
                <img className='navbar__logo' src={LOGO} alt="logo" />
            </div>
            <div className="navbar__right">
                <button className='navbar__btn'>내정보</button>
                <i className="navbar__profile fa-solid fa-circle-user"></i>
            </div>
        </div>
    );
}

export default Navigation;