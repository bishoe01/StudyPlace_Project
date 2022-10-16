import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Editor from '../Editor/editor';
import styles from './posting.module.scss';
import styled from 'styled-components';
import CustomBtn from '../styledComponent/styledComponent';
import { Input } from 'antd';

const baseBtn = styled(CustomBtn)`
  width: 70px;
  height: 40px;
  padding: 5px 3px;
  font-size: 18px;
`;

const CancelBtn = styled(baseBtn)`
  background-color: #fff;
  margin-right: 10px;
`;
const PostBtn = styled(baseBtn)`
  color: #fff;
`;

function Posting() {
  return (
    <div className={styles.postingWrap}>
      <div className={styles.postingArea}>
        <section className={styles.postingForm}>
          <div className={styles.titleInputWrap}>
            <Input placeholder='제목을 입력해주세요.' />
          </div>
          <div className={styles.editorWrap}>
            <Editor />
          </div>
          <div className={styles.postBtnWrap}>
            <Link to='/Notice'>
              <CancelBtn>취소</CancelBtn>
            </Link>
            <PostBtn type='primary'>등록</PostBtn>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Posting;
