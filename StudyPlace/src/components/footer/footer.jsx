import React from 'react';
import styles from './footer.module.css';
function Footer(props) {
    return (
        <footer className={styles.footer}>
            <h2 className={styles.title}>Contact</h2>
            <div className={styles.logoContainer}>
                <i className={`fa-brands fa-github ${styles.logo}`}></i>
                <i className={`fa-solid fa-comment-dots ${styles.logo}`}></i>
            </div>
            <span>@2022 SOFTWARE,ICT ERICA</span>
            
        </footer>
    );
}
export default Footer;