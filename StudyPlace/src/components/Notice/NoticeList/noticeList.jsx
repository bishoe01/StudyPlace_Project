import React, { useEffect, useState } from 'react';
import styles from './noticeList.module.css';

function NoticeList() {
  return (
    <>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
          <th>조회수</th>
        </tr>
      </thead>
      <tbody>
        <tr className={styles.tableRow}>
          <td>3</td>
          <td className={styles.title}>
            <a href='#'>공지글입니다.</a>
          </td>
          <td>소융대</td>
          <td>2022.09.12</td>
          <td>1</td>
        </tr>
        <tr className={styles.tableRow}>
          <td>2</td>
          <td className={styles.title}>
            <a href='#'>공지글입니다.</a>
          </td>
          <td>소융대</td>
          <td>2022.09.12</td>
          <td>1</td>
        </tr>{' '}
        <tr className={styles.tableRow}>
          <td>1</td>
          <td className={styles.title}>
            <a href='#'>공지글입니다.</a>
          </td>
          <td>소융대</td>
          <td>2022.09.12</td>
          <td>1</td>
        </tr>
      </tbody>
    </>
  );
}

export default NoticeList;
