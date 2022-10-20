import React, { useEffect, useState, useRef } from 'react';
import Link from 'react-router-dom';
import styles from './dropDownMenu.module.scss';
import styled from 'styled-components';
import classNames from 'classnames';
import { AiOutlineDown } from 'react-icons/ai';

function DropDownMenu() {
  const [visibility, setVisibility] = useState(false);
  const [filter, setFilter] = useState('제목');
  const filters = ['제목', '내용', '제목+내용'];

  const ref = useRef();
  const handleClickOutSide = (e) => {
    console.log(ref.current.contains(e.target));
    if (visibility && !ref.current.contains(e.target)) {
      setVisibility(false);
    }
  };

  useEffect(() => {
    if (visibility) document.addEventListener('mousedown', handleClickOutSide);
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  });

  return (
    <>
      <div className={styles.dropDownMenu} ref={ref}>
        <label
          onClick={() => {
            setVisibility(!visibility);
          }}>
          <span>{filter}</span>
          <div className={styles.arrowWrap}>
            <AiOutlineDown className={styles.arrow} />
          </div>
        </label>
        <ul className={`${styles.dropDown} ${visibility ? styles.fadeIn : styles.fadeOut}`}>
          {filters.map((f, i) => {
            return (
              <li
                key={i}
                onClick={(e) => {
                  setFilter(e.target.innerText);
                  setVisibility(!visibility);
                }}>
                {f}
              </li>
            );
          })}
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
