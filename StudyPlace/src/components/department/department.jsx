import React from 'react';
import styles from './department.module.css';
function Department(props) {
    return (
        <section className={styles.section}>
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
        <div className={styles.department}>
            <img className={styles.logo} src="/imgs/department/Engineering.svg" alt="" />
            <img className={styles.logo} src="/imgs/department/Software.svg" alt="" />
            <img className={styles.logo} src="/imgs/department/Culture.svg" alt="" />
        </div>
        </section>
    );
}

export default Department;