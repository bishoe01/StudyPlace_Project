import React, { useEffect, useState } from 'react';
import styles from './profile.module.css';

import EmailModal from './modal/emailModal';
import DeptModal from './modal/deptModal';
import '../../common/fontello/css/fontello.css';

function Profile(props) {
  let [emailModal, setEmailModal] = useState(false);
  let [deptModal, setDeptModal] = useState(false);

  return (
    <div className={styles.container}>
      <section className={styles.box}>
        <div className={styles.imgBox}>
          <img className={styles.profileImg} src='/imgs/HanyangE/defaultImg.png' alt='' />
        </div>
        <div className={styles.imgBtnBox}>
          <button className={styles.imgBtn}>이미지 업로드</button>
          <button className={styles.imgBtn}>이미지 제거</button>
        </div>
        <div className={styles.userNameBox}>
          <span className={styles.name}>하냥이</span>
          <button className={styles.modifyBtn}>수정</button>
        </div>
      </section>
      <section className={styles.box}>
        <ul className={styles.info}>
          <li>
            <div className={`${styles.infoItem} ${`icon-mail`}`}>
              <span className={styles.infoText}>hanyang@hanyang.ac.kr</span>
              <button
                className={`${styles.modifyBtn} ${styles.liBtn}`}
                onClick={() => {
                  setEmailModal(true);
                }}>
                수정
              </button>
            </div>
          </li>
          <li>
            <div className={`${styles.infoItem} ${`icon-building`}`}>
              <span className={styles.infoText}>소프트웨어학부</span>
              <button
                className={`${styles.modifyBtn} ${styles.liBtn}`}
                onClick={() => {
                  setDeptModal(true);
                }}>
                수정
              </button>
            </div>
          </li>
          <li>
            <div className={`${styles.infoItem} ${`icon-lock`}`}>
              <span className={styles.infoText}>비밀번호 변경</span>
              <button className={`${styles.modifyBtn} ${styles.liBtn}`}>수정</button>
            </div>
          </li>
        </ul>
      </section>
      <section className={styles.box}>
        <h3>예약 내역</h3>
      </section>
      {emailModal ? <EmailModal emailModal={emailModal} setEmailModal={setEmailModal} /> : null}
      {deptModal ? <DeptModal deptModal={deptModal} setDeptModal={setDeptModal} /> : null}
    </div>
  );
}

export default Profile;
