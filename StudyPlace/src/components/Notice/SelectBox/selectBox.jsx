import React, { useEffect, useState } from 'react';
import styles from './selectBox.module.css';

function SelectBox() {
  const [isShown, setShown] = useState(false);
  const [curValue, setValue] = useState('제목');
  const handelSelectedValue = (e) => {
    const { innerText } = e.target;
    setValue(innerText);
  };
  return (
    <div className={styles.wrap} onClick={() => setShown((prev) => !prev)}>
      <label>{curValue}</label>
      {isShown ? (
        <ul className={styles.opList}>
          <li onClick={handelSelectedValue}>제목</li>
          <li onClick={handelSelectedValue}>내용</li>
          <li onClick={handelSelectedValue}>제목+내용</li>
        </ul>
      ) : null}
    </div>
  );
}

export default SelectBox;
