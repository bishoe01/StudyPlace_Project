import React from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.css';
function Footer(props) {
    return (
        <footer className={styles.footer}>
            <section className={styles.leftContainer}>
                <h2 className={styles.h2}>HY-Together</h2>
                <p>
                    <h6 className={styles.tel}>TEL +82-10-3733-0690</h6>
                    <h6 className={styles.email}>Email : contact@hanyang.ac.kr</h6>
                </p>
                <span className={styles.copyright}>Copyright 2022 Hanyang Univ. All Rights Reserved.</span>
            </section>
            <section className={styles.rightContainer}>
                <ul className={styles.links} >
                    <li><Link to="/" className={styles.navbtn} onClick={() => { }}>HOME</Link></li>
                    <li><Link to="/about" className={styles.navbtn}>ABOUT</Link></li>
                    <li><Link to="/profile" className={styles.navbtn}>PROFILE</Link></li >
                    <li><Link to="/settings" className={styles.navbtn} >SETTINGS</Link></li>
                </ul>
                <div className={styles.logos}>
                <i className={`fa-brands fa-github ${styles.logo}`}></i>
                    <i className={`fa-solid fa-comment-dots ${styles.logo}`}></i>
                    <i className={`fa-brands fa-instagram ${styles.logo}`}></i>
                    <i className={`fa-brands fa-discord ${styles.logo}`}></i>
                    <i className={`fa-brands fa-facebook ${styles.logo}`}></i>
                    </div>
            </section>
        </footer>
    );
}
export default Footer;

