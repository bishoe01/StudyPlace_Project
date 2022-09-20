import React, { useEffect, useState } from 'react';
import styles from './profile.module.css';

import EmailModal from './modal/emailModal';
import DeptModal from './modal/deptModal';
import '../../common/fontello/css/fontello.css';

function Profile(props) {
  let [emailModal, setEmailModal] = useState(false);
  let [deptModal, setDeptModal] = useState(false);
  let [icons] = useState(['mail', 'vcard', 'building', 'pencil']);

  let [userName, setName] = useState('하냥이');
  let [userInfo, setInfo] = useState(['hanyang@hanyang.ac.kr', 2022932803, '소프트웨어융합대학', '소프트웨어학부 소프트웨어전공']);

  return (
    <div className={styles.container}>
      <section className={`${styles.box} ${styles.profile}`}>
        <div className={styles.boxInner}>
          <div className={styles.imgBox}>
            <img className={styles.profileImg} src='/imgs/HanyangE/defaultImg.png' alt='' />
          </div>
          {/* <div className={styles.imgBtnBox}>
            <button className={styles.imgBtn}>이미지 업로드</button>
            <button className={styles.imgBtn}>이미지 제거</button>
          </div> */}
          <div className={styles.userNameBox}>
            <span className={styles.name}>{userName}</span>
            {/* <button className={styles.modifyBtn}>수정</button> */}
          </div>
        </div>
        <div className={styles.verticalLine}></div>
        <div className={styles.boxInner}>
          <ul className={styles.info}>
            {icons.map(function (icon, i) {
              return (
                <li>
                  <div className={`${styles.infoItem} icon-${icon}`}>
                    <span className={styles.infoText}>{userInfo[i]}</span>
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
        <div className={styles.resvWarp}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat impedit earum architecto. Voluptatem, numquam in excepturi consequatur fuga obcaecati aspernatur voluptas amet ex hic sint
            qui! Facilis ratione deleniti pariatur. Eius st rerum odit ratione amet pariatur quae id, hic, placeat non voluptas quibusdam adipisci? Quibusdam, ad nulla? Minima aliquid, eos consectetur
            corrupti maiores rem laboum exepturi necessitatibus natus error?
          </p>
        </div>
      </section>
      {emailModal ? <EmailModal emailModal={emailModal} setEmailModal={setEmailModal} /> : null}
      {deptModal ? <DeptModal deptModal={deptModal} setDeptModal={setDeptModal} /> : null}
    </div>
  );
}

export default Profile;
