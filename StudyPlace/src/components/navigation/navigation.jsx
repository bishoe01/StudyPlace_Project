/*eslint-disable*/
import React from 'react';
import styles from './navigation.module.css';
import { Routes, Route, Link } from "react-router-dom";
function Navigation() {
    return (
        <nav className={styles.nav}>
            <img className={styles.img} src="/imgs/HY-Together/logotext.png" alt="" />
            <ul className={styles.links} >
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/settings">Settings</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;