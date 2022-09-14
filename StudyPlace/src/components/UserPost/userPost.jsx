import React, { useEffect, useState } from 'react';
import styles from './userPost.module.css';

function UserPost() {
  return (
    <div className={styles.contentWrap}>
      <div className={styles.contentArea}>
        <section className={styles.headerWrap}>
          <h3 className={styles.noticeHeader}>공지사항</h3>
        </section>
      </div>
    </div>
  );
}

export default UserPost;
