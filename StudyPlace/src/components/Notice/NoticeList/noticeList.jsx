import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import styles from './noticeList.module.scss';
import { Pagination } from 'antd';

function NoticeList({ lists }) {
  return (
    <>
      <tbody>
        {lists.map((info, i) => {
          return (
            <tr className={styles.tableRow} key={i}>
              <td style={{ width: '10%' }}>{info.number}</td>
              <td style={{ width: '50%' }} className={styles.title}>
                <a href='#'>{info.title}</a>
              </td>
              <td style={{ width: '20%' }}>{info.dept}</td>
              <td style={{ width: '10%' }}>{info.date}</td>
              <td style={{ width: '10%' }}>{info.views}</td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
}

export default NoticeList;
