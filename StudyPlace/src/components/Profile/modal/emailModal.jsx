import React, { useEffect, useState } from 'react';
import styles from './modal.module.css';

function EmailModal({ emailModal, setEmailModal }) {
  return (
    <div className={styles.modalBg}>
      <div className={`${styles.modalInner} ${styles.emailModal}`}>
        <h3 className={styles.modalHeader}>이메일 변경</h3>
        <div className={styles.modalInputSection}>
          <input className={styles.modalInput} type='text' placeholder='새 이메일 입력' />
        </div>
        <div className={styles.modalInputSection}>
          <input className={styles.modalInput} type='text' placeholder='이메일 재입력' />
        </div>
        <div className={styles.modalBtnSection}>
          <button
            className={styles.confirmBtn}
            onClick={() => {
              setEmailModal(false);
            }}>
            취소
          </button>
          <button className={styles.confirmBtn}>확인</button>
        </div>
      </div>
    </div>
  );
}

export default EmailModal;
