import React, { useEffect, useState } from 'react';
import styles from './noticeList.module.css';

function NoticeList() {
  return (
    <tbody>
      <tr className={styles.tableRow}>
        <td className={styles.number}>1</td>
        <td className={styles.title}>
          <a href='#'>첫번째 글입니다.</a>
        </td>
        <td className={styles.department}>소융대</td>
        <td className={styles.date}>2022.09.12</td>
        <td className={styles.views}>1</td>
      </tr>
      <tr className={styles.tableRow}>
        <td className={styles.number}>2</td>
        <td className={styles.title}>
          <a href='#'>두번째 글입니다.</a>
        </td>
        <td className={styles.department}>소융대</td>
        <td className={styles.date}>2022.09.12</td>
        <td className={styles.views}>1</td>
      </tr>
      <tr className={styles.tableRow}>
        <td className={styles.number}>3</td>
        <td className={styles.title}>
          <a href='#'>세번째 글입니다.</a>
        </td>
        <td className={styles.department}>소융대</td>
        <td className={styles.date}>2022.09.12</td>
        <td className={styles.views}>1</td>
      </tr>
      <tr className={styles.tableRow}>
        <td className={styles.number}>4</td>
        <td className={styles.title}>
          <a href='#'>네번째 글입니다.</a>
        </td>
        <td className={styles.department}>소융대</td>
        <td className={styles.date}>2022.09.12</td>
        <td className={styles.views}>1</td>
      </tr>
    </tbody>
  );
}

export default NoticeList;
