import React from 'react';
import {Link} from 'react-router-dom';
import styles from './block.module.css';
function Block({imgsrc, linkto ,name}) {
    return (
        <div className={styles.block}>
        <Link to={linkto}>
        <img className={styles.logo} src={imgsrc} alt="" />
        </Link>
        <span className={styles.linkDetails}>{name}</span>


            
        </div>
    );
}

export default Block;