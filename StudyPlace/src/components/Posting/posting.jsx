import React, { useEffect, useState } from 'react';
import styles from './posting.module.css';
import Editor from '../Editor/editor';

function Posting() {
  return (
    <div className={styles.postingWrap}>
      <div className={styles.postingArea}>
        <article className={styles.postingForm}>
          <Editor />
        </article>
      </div>
    </div>
  );
}

export default Posting;
