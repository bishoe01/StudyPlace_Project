import React, { useEffect, useState } from 'react';
import styles from './modal.module.css';
import departmentList from '../../../data/ERICA_Department.js';

function DeptModal({ deptModal, setDeptModal }) {
  let [department] = useState(Object.keys(departmentList));
  let [major] = useState(Object.values(departmentList));
  let [visibility, setVisibility] = useState(Array.from({ length: department.length }, () => false));
  return (
    <div className={styles.modalBg}>
      <div className={`${styles.modalInner} ${styles.deptModal}`}>
        <h3 className={styles.modalHeader}>학과 선택</h3>
        <div className={styles.dropDownSection}>
          {department.map((dept, i) => {
            return <DropDown visibility={visibility} setVisibility={setVisibility} dept={dept} majors={major[i]} idx={i} key={i} />;
          })}
        </div>
        <div className={styles.modalBtnSection}>
          <button
            className={styles.confirmBtn}
            onClick={() => {
              setDeptModal(false);
            }}>
            취소
          </button>
          <button className={styles.confirmBtn}>확인</button>
        </div>
      </div>
    </div>
  );
}

function DropDown({ visibility, setVisibility, dept, majors, idx }) {
  return (
    <div className={styles.dropDownFrame}>
      <button
        className={styles.dropDownBtn}
        onClick={() => {
          let tmp = [...visibility];
          tmp[idx] = !tmp[idx];
          setVisibility(tmp);
        }}>
        {dept}
        <span className={styles.btnArrow}>🔻</span>
      </button>
      {visibility[idx] ? (
        <ul className={styles.dropDown}>
          {majors.map((major) => {
            return <li>{major}</li>;
          })}
        </ul>
      ) : null}
    </div>
  );
}

export default DeptModal;
