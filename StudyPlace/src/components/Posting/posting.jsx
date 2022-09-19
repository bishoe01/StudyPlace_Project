import React, { useEffect, useState } from 'react';
import Editor from '../Editor/editor';
import styles from './posting.module.css';

function Posting() {
  return (
    <div className={styles.postingWrap}>
      <div className={styles.postingArea}>
        <section className={styles.postingForm}>
          <div className={styles.titleInputWrap}>
            <input type='text' placeholder='제목을 입력해주세요.' />
          </div>
          <div className={styles.editorWrap}>
            <Editor />
          </div>
          <div className={styles.postBtnWrap}>
            <button className={styles.cancel}>취소</button>
            <button className={styles.posting}>등록</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Posting;
