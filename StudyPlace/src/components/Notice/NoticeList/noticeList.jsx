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
              <td>{info.number}</td>
              <td className={styles.title}>
                <a href='#'>{info.title}</a>
              </td>
              <td>{info.dept}</td>
              <td>{info.date}</td>
              <td>{info.views}</td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
}

export default NoticeList;
