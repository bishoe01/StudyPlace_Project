import React, { useEffect, useState } from 'react';
import styles from './notice.module.css';
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
        <article className={styles.tableWrap}>
          <table className={styles.noticeTable}>
            <NoticeList />
          </table>
        </article>
        <section className={styles.bottomMenu}>
          <button className={styles.postBtn}>글쓰기</button>
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
