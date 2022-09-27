import React, { useEffect, useState } from 'react';
import styles from './userPost.module.scss';
import styled from 'styled-components';
import { Button, PageHeader } from 'antd';
import CustomBtn from './../styledComponent/styledComponent';

const CustomHeader = styled(PageHeader)`
  border-top: 3px solid #2462a2;
  border-bottom: 1px solid #e3e9ed;
  font-size: 20px;
`;
const PostBtn = styled(CustomBtn)`
  width: 90px;
  height: 35px;
`;

function UserPost() {
  return (
    <>
      <section className={styles.postWrap}>
        <div className={styles.postArea}>
          <div className={styles.headerArea}>
            <h3>공지사항</h3>
          </div>
          <div className={styles.postInner}>
            <PostHeader />
            <div className={styles.postContent}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eligendi, cupiditate quas ea saepe quasi, minima odit architecto vel animi quae necessitatibus est sunt voluptates
                eveniet, harum magni nam fugiat.
              </p>
            </div>
          </div>
          <div className={styles.btnWrap}>
            <PostBtn type='primary'>글쓰기</PostBtn>
          </div>
        </div>
      </section>
    </>
  );
}

function PostHeader() {
  return (
    <>
      <CustomHeader className='site-page-header' onBack={() => window.history.back()} title="[학사] (긴급) 제11호 태풍 '힌남노'북상에 따른 수업형태 전환 안내">
        <div className={styles.postInfoWrap}>
          <span>작성자: 소프트웨어융합대학</span>
          <span>작성일: 2022.09.24</span>
          <span>조회수: 102</span>
        </div>
      </CustomHeader>
    </>
  );
}

export default UserPost;
