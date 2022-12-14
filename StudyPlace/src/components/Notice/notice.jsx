import React, { useEffect, useState } from 'react';
import styles from './notice.module.css';
import Paging from './Paging/paging';
import NoticeList from './NoticeList/noticeList';

function Notice() {
  return (
    <div className={styles.contentWrap}>
      <div className={styles.contentArea}>
        <section className={styles.headerWrap}>
          <h3 className={styles.noticeHeader}>공지사항</h3>
        </section>
        <article className={styles.tableWrap}>
          <table className={styles.noticeTable}>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>조회수</th>
              </tr>
            </thead>
            <NoticeList />
          </table>
        </article>
        <section className={styles.bottomMenu}>
          <button className={styles.postBtn}>글쓰기</button>
        </section>
        <Paging />
      </div>
    </div>
  );
}

export default Notice;
