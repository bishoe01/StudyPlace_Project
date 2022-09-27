import React, { useEffect, useState } from 'react';
import styles from './notice.module.scss';
import styled from 'styled-components';
import NoticeList from './NoticeList/noticeList';
import DropDownMenu from './DropDownMenu/dropDownMenu';
import PaginationCustom from './Pagination/paginationCustom';
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const CustomBtn = styled(Button)`
  font-size: 16px;
  background-color: #2462a2;
`;

const SearchBtn = styled(CustomBtn)`
  width: 90px;
  height: 35px;
`;

const PostBtn = styled(CustomBtn)`
  width: 100px;
  height: 35px;
`;

const InputBox = styled(Input)`
  width: 370px;
  height: 35px;
  padding: 3px 5px;
  margin: 0 5px;
  border: 1px solid rgb(227, 227, 227);
`;

function Notice() {
  const [size, setSize] = useState('large');
  return (
    <div className={styles.contentWrap}>
      <div className={styles.contentArea}>
        <section className={styles.headerWrap}>
          <h3 className={styles.noticeHeader}>공지사항</h3>
        </section>
        <table className={styles.noticeTable}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>조회수</th>
            </tr>
          </thead>
          <NoticeList />
        </table>
        <section className={styles.bottomMenu}>
          <PostBtn type='primary'>글쓰기</PostBtn>
        </section>
        <section className={styles.pagination}>
          <PaginationCustom />
        </section>
        <section className={styles.searchWrap}>
          <DropDownMenu />
          <InputBox placeholder='검색어 입력' />
          <SearchBtn type='primary' icon={<SearchOutlined />}>
            검색
          </SearchBtn>
        </section>
        <div></div>
      </div>
    </div>
  );
}

export default Notice;
