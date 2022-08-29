import React from 'react';
import { Link } from 'react-router-dom';
import Block from '../block/block';
import styles from './department.module.css';
function Department(props) {
    return (
        <section className={styles.section}>
        <div className={styles.department}>
            <Block imgsrc={"/imgs/department/Engineering.svg"} linkto={'/engineer'} name={'공학대학'}></Block>
            <Block imgsrc={"/imgs/department/Software.svg"} linkto={'/software'} name={'소프트웨어'}></Block>
            <Block imgsrc={"/imgs/department/Culture.svg"} linkto={'/culture'} name={'국제문화'}></Block>
        </div>
        <div className={styles.department}>
            <img className={styles.logo} src="/imgs/department/Engineering.svg" alt="" />
            <img className={styles.logo} src="/imgs/department/Software.svg" alt="" />
            <img className={styles.logo} src="/imgs/department/Culture.svg" alt="" />
        </div>
        <div className={styles.department}>
            <img className={styles.logo} src="/imgs/department/Engineering.svg" alt="" />
            <img className={styles.logo} src="/imgs/department/Software.svg" alt="" />
            <img className={styles.logo} src="/imgs/department/Culture.svg" alt="" />
        </div>
        </section>
    );
}

export default Department;