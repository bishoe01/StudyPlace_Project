import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './notice.module.scss';
import styled from 'styled-components';
import NoticeList from './NoticeList/noticeList';
import DropDownMenu from './DropDownMenu/dropDownMenu';
import PaginationCustom from './Pagination/paginationCustom';
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { lists } from './listsData.js';

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
  const [searchText, setText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const [totalPosts, setTotalPosts] = useState(lists.length);
  const [list, setList] = useState(lists);
  const initialList = lists;
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const filterLists = (searchText) => {
    let currentLists = 0;
    if (searchText === null || searchText === '') {
      setTotalPosts(initialList.length);
      currentLists = initialList.slice(indexOfFirst, indexOfLast);
      console.log('slice');
    } else {
      const filteredLists = initialList.filter((row) => row.title.includes(searchText));
      setTotalPosts(filteredLists.length);
      currentLists = filteredLists.slice(indexOfFirst, indexOfLast);
      console.log('filtered slice');
    }
    setList(currentLists);
  };

  useEffect(() => {
    setTotalPosts();
  }, [list]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      filterLists(searchText);
    }
  };
  const handleClick = (e) => {
    filterLists(searchText);
  };

  useEffect(() => {
    filterLists(searchText);
  }, [indexOfFirst, indexOfLast]);

  return (
    <div className={styles.contentWrap}>
      <div className={styles.contentArea}>
        <section className={styles.headerWrap}>
          <h3 className={styles.noticeHeader}>공지사항</h3>
        </section>
        <table className={styles.noticeTable}>
          <thead>
            <tr>
              <th style={{ width: '10%' }}>번호</th>
              <th style={{ width: '50%' }}>제목</th>
              <th style={{ width: '20%' }}>작성자</th>
              <th style={{ width: '10%' }}>작성일</th>
              <th style={{ width: '10%' }}>조회수</th>
            </tr>
          </thead>
          <NoticeList lists={list} />
        </table>
        <section className={styles.bottomMenu}>
          <Link to='/posting'>
            <PostBtn type='primary'>글쓰기</PostBtn>
          </Link>
        </section>
        <section className={styles.pagination}>
          <PaginationCustom postPerPage={postsPerPage} setCurrentPage={setCurrentPage} totalPosts={totalPosts} />
        </section>
        <section className={styles.searchWrap}>
          <DropDownMenu />
          <InputBox
            placeholder='검색어 입력'
            onChange={(e) => {
              setText(e.target.value);
            }}
            onKeyPress={handleKeyPress}
          />
          <SearchBtn type='primary' icon={<SearchOutlined />} onClick={handleClick}>
            검색
          </SearchBtn>
        </section>
      </div>
    </div>
  );
}

export default Notice;
