/*eslint-disable*/
import React, { useState } from 'react';
import styles from './navigation.module.scss';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
function Navigation() {
  const navigate = useNavigate();
  const [setting, setSetting] = useState(false);
  const [none, setnone] = useState('none');
  return (
    <nav className={styles.nav}>
      <img
        className={styles.img}
        onClick={() => {
          navigate('/');
        }}
        src='/imgs/HY-Together/logotext.png'
        alt=''
      />
      <ul className={styles.links}>
        <li>
          <Link to='/' className={styles.navbtn} onClick={() => {}}>
            HOME
          </Link>
        </li>
        <li>
          <Link to='/about' className={styles.navbtn}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link to='/profile' className={styles.navbtn}>
            PROFILE
          </Link>
        </li>
        <li>
          <Link to='/notice' className={styles.navbtn}>
            NOTICE
          </Link>
        </li>
        <li>
          <Link to='/settings' className={styles.navbtn}>
            SETTINGS
          </Link>
        </li>
      </ul>
      <div className={styles.nav__btn}>
        <button className={styles.btn__reserve}>예약 확인</button>
        <button className={styles.btn__profile}>프로필 수정</button>
      </div>
    </nav>
  );
}

export default Navigation;
