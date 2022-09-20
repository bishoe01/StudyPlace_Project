import React, { useEffect, useState } from 'react';
import styles from './userPost.module.css';

import { Button, Descriptions, PageHeader, Row, Statistic, Tag } from 'antd';

function UserPost() {
  return (
    <div className={styles.postWrap}>
      <div className={styles.postInner}>
        <div className={styles.headerWrap}>
          <PostHeader />
        </div>
      </div>
    </div>
  );
}

function PostHeader() {
  return (
    <>
      <PageHeader className='site-page-header' title='공지사항입니다.' extra={[]}>
        <Descriptions size='small' column={3}>
          <Descriptions.Item label='작성자'>소프트웨어융합대학</Descriptions.Item>
          <Descriptions.Item label='작성일'>2022-09-19</Descriptions.Item>
          <Descriptions.Item label='조회수'>200</Descriptions.Item>
        </Descriptions>
      </PageHeader>{' '}
    </>
  );
}

export default UserPost;
