import React, { useEffect, useState } from 'react';
import styles from './profile.module.scss';

// import EmailModal from './modal/emailModal';
// import DeptModal from './modal/deptModal';
import History from './History/history';
import '../../common/fontello/css/fontello.css';

function Profile(props) {
  console.log(styles.container);
  let [emailModal, setEmailModal] = useState(false);
  let [deptModal, setDeptModal] = useState(false);
  let icons = ['mail', 'vcard', 'building', 'pencil'];

  let [userName, setName] = useState('하냥이');
  let [userInfo, setInfo] = useState(['hanyang@hanyang.ac.kr', 2022932803, '소프트웨어융합대학', '소프트웨어학부 소프트웨어전공']);

  return (
    <div className={styles.container}>
      <section className={`${styles.box} ${styles.profile}`}>
        <div className={styles.boxInner}>
          <div className={styles.imgBox}>
            <img src='/imgs/HanyangE/defaultImg.png' alt='' />
          </div>
          <div className={styles.userNameBox}>
            <span>{userName}</span>
            {/* <button className={styles.modifyBtn}>수정</button> */}
          </div>
        </div>
        <div className={styles.verticalLine}></div>
        <div className={styles.boxInner}>
          <ul className={styles.info}>
            {icons.map(function (icon, i) {
              return (
                <li key={i}>
                  <div className={`${styles.infoItem} icon-${icon}`}>
                    <span>{userInfo[i]}</span>
                  </div>
                </li>
              );
            })}
            <li>
              <div className={`${styles.infoItem} ${`icon-lock`}`}>
                <span className={styles.infoText}>비밀번호 변경</span>
                <button className={`${styles.modifyBtn} ${styles.liBtn}`}>
                  <span>수정</span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className={`${styles.box} ${styles.reservation}`}>
        <h3>예약 내역</h3>
        <div className={styles.historyWrap}>
          <History />
        </div>
      </section>
      {/* {emailModal ? <EmailModal emailModal={emailModal} setEmailModal={setEmailModal} /> : null} */}
      {/* {deptModal ? <DeptModal deptModal={deptModal} setDeptModal={setDeptModal} /> : null} */}
    </div>
  );
}

export default Profile;
