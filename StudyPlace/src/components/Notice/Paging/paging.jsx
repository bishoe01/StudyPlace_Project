import React, { useEffect, useState } from 'react';
import styles from './paging.module.css';

function Paging() {
  return (
    <div className={styles.pagingWrap}>
      <div className={styles.paging}>
        <a className={`${styles.arrow} ${styles.pprev}`} href='#'></a>
        <a className={`${styles.arrow} ${styles.prev}`} href='#'></a>
        <a href='#'>1</a>
        <a href='#'>2</a>
        <a href='#'>3</a>
        <a href='#'>4</a>
        <a href='#'>5</a>
        <a href='#'>6</a>
        <a href='#'>7</a>
        <a href='#'>8</a>
        <a href='#'>9</a>
        <a href='#'>10</a>
        <a className={`${styles.arrow} ${styles.next}`} href='#'></a>
        <a className={`${styles.arrow} ${styles.nnext}`} href='#'></a>
      </div>
    </div>
  );
}

export default Paging;
