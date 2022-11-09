import React, { useState } from 'react';
import { Pagination } from 'antd';

function PaginationCustom({ postPerPage, setCurrentPage, totalPosts }) {
  const [current, setCurrent] = useState(1);
  const onChange = (page) => {
    setCurrent(page);
    setCurrentPage(page);
  };
  return <Pagination defaultCurrent={1} current={current} onChange={onChange} pageSize={postPerPage} total={totalPosts} />;
}

export default PaginationCustom;
