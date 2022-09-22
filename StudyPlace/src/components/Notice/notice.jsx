import React, { useEffect, useState } from 'react';
import styles from './notice.module.scss';
import NoticeList from './NoticeList/noticeList';
import SelectBox from './SelectBox/selectBox';
import Paging from './Paging/paging';

function Notice() {
  return (
    <div className={styles.contentWrap}>
      <div className={styles.contentArea}>
        <section className={styles.headerWrap}>
          <h3 className={styles.noticeHeader}>공지사항</h3>
        </section>
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
        <section className={styles.bottomMenu}>
          <button>글쓰기</button>
        </section>
        <Paging />
        <section className={styles.searchWrap}>
          <SelectBox />
          <input type='text' />
          <button>검색</button>
        </section>
        <div></div>
      </div>
    </div>
  );
}

export default Notice;
