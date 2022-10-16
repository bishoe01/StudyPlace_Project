import React, { useEffect, useState, useRef } from 'react';
import Link from 'react-router-dom';
import styles from './dropDownMenu.module.scss';
import styled from 'styled-components';
import classNames from 'classnames';
import { AiOutlineDown } from 'react-icons/ai';

function DropDownMenu() {
  const [visibility, setVisibility] = useState(false);
  console.log(visibility);
  return (
    <>
      <div className={styles.dropDownMenu}>
        <label
          onClick={() => {
            setVisibility(!visibility);
          }}>
          <span>제목</span>
          <div className={styles.arrowWrap}>
            <AiOutlineDown className={styles.arrow} />
          </div>
        </label>
        <ul className={`${styles.dropDown} ${visibility ? styles.fadeIn : styles.fadeOut}`}>
          <li>제목</li>
          <li>내용</li>
          <li>제목+내용</li>
        </ul>
      </div>
    </>
  );
}

function DropDown(props) {
  const [visibilityAnimation, setVisibilityAnimation] = useState(false);
  const [repeat, setRepeat] = useState(null);
  useEffect(() => {
    if (props.visibility) {
      setTimeout(() => {
        setRepeat(null);
      }, 100);
      setVisibilityAnimation(true);
    } else {
      setRepeat(
        setTimeout(() => {
          setVisibilityAnimation(false);
        }, 100)
      );
    }
    return clearTimeout(repeat);
  }, [props.visibility]);
  {
    console.log(props.visibility);
  }
  return <div className={`${styles.dropDownComp} ${props.visibility ? styles.fadeIn : styles.fadeOut}`}>{visibilityAnimation && props.children}</div>;
}
export default DropDownMenu;
