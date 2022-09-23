import React, { useEffect, useState } from 'react';
import styles from './userPost.module.css';
import styled from 'styled-components';

import { Button, Descriptions, PageHeader, Row, Statistic, Tag } from 'antd';

const BorderedDesciptions = styled(Descriptions.Item)`
  color: red;
`;

function UserPost() {
  return (
    <>
      <section className={styles.postWrap}>
        <div className={styles.postInner}>
          <PostHeader />
        </div>
      </section>
    </>
  );
}

function PostHeader() {
  return (
    <>
      <PageHeader className='site-page-header' onBack={() => window.history.back()} title="[학사] (긴급) 제11호 태풍 '힌남노'북상에 따른 수업형태 전환 안내" styles={{ fontSize: '16px' }} extra={[]}>
        <Descriptions size='small' column={3}>
          <Descriptions.Item label='작성자'>소프트웨어융합대학</Descriptions.Item>
          <Descriptions.Item label='작성일'>2022-09-19</Descriptions.Item>
          <Descriptions.Item label='조회수'>200</Descriptions.Item>
        </Descriptions>
      </PageHeader>
    </>
  );
}

export default UserPost;
