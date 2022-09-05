/*eslint-disable*/
import React, { useState } from 'react';
import styles from './navigation.module.css';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
function Navigation() {
    const navigate = useNavigate();
    const [setting, setSetting] = useState(false);
    const [none, setnone] = useState('none');
    return (
        <nav className={styles.nav}>
            <img className={styles.img} onClick={() => {
                navigate('/');
            }} src="/imgs/HY-Together/logotext.png" alt="" />
            <ul className={styles.links} >
                <li><Link to="/" className={styles.navbtn} onClick={() => { }}>HOME</Link></li>
                <li><Link to="/about" className={styles.navbtn}>ABOUT</Link></li>
                <li><Link to="/profile" className={styles.navbtn}>PROFILE</Link></li >
                <li><Link to="/settings" className={styles.navbtn} >SETTINGS</Link></li>
            </ul>
            <div>
                <ul className={styles.etc}>
                    {/* <li>Log In</li> */}
                    <li className={styles.profile} 
                    onClick={() => {
                        setSetting(!setting);
                        setnone("");
                    }}><i className="fa-solid fa-gear"></i></li>
                </ul>
                {setting && <SettingModal none={none}/>}
                
            </div>
        </nav>
    );
}

export default Navigation;



function SettingModal({none}) {
    return (
        <section className={styles.settingModal}>
            <ul className={styles.setUI}>
            <li className={styles.settingList}>프로필 설정</li>
                <li className={styles.settingList}>예약 확인</li>
                <li className={styles.settingList}>로그아웃</li>
            </ul>
        </section>
    );
}
