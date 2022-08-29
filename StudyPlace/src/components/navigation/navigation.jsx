/*eslint-disable*/
import React from 'react';
import styles from './navigation.module.css';
import { Routes, Route, Link } from "react-router-dom";
function Navigation() {
    
    return (
        <nav className={styles.nav}>
            <img className={styles.img} src="/imgs/HY-Together/logotext.png" alt="" />
            <ul className={styles.links} >
                <li><Link to="/" className={styles.navbtn} onClick={() => {}}>HOME</Link></li>
                <li><Link to="/about" className={styles.navbtn}>ABOUT</Link></li>
                <li><Link to="/profile" className={styles.navbtn}>PROFILE</Link></li >
                <li><Link to="/settings" className={styles.navbtn} >SETTINGS</Link></li>
            </ul>
            <ul className={styles.etc}>
                <li>Log In</li>
                <li className={styles.profile} ><i className="fa-solid fa-gear"></i></li>
            </ul>
        </nav>
    );
}

export default Navigation;