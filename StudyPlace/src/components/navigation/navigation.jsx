/*eslint-disable*/
import React from 'react';
import styles from './navigation.module.css';
function Navigation() {
    return (
        <nav className={styles.nav}>
            <img className={styles.img} src="/imgs/HY-Together/logotext.png" alt="" />
            <ul className={styles.links} >
                <li><a href="#">HOME</a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">HOME</a></li>
                <li><a href="#">HOME</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;