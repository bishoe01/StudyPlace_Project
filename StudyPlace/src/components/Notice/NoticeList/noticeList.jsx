import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import styles from './noticeList.module.scss';
import { Pagination } from 'antd';

const noticeInfo = [
  {
    number: 1,
    title: '공지글입니다.',
    dept: '소융대',
    date: '2022.09.12',
    views: 2,
  },
  {
    number: 2,
    title: '공지글입니다.',
    dept: '소융대',
    date: '2022.09.20',
    views: 5,
  },
  {
    number: 2,
    title: '공지글입니다.',
    dept: '소융대',
    date: '2022.09.20',
    views: 5,
  },
  {
    number: 2,
    title: '공지글입니다.',
    dept: '소융대',
    date: '2022.09.20',
    views: 5,
  },
  {
    number: 2,
    title: '공지글입니다.',
    dept: '소융대',
    date: '2022.09.20',
    views: 5,
  },
  {
    number: 2,
    title: '공지글입니다.',
    dept: '소융대',
    date: '2022.09.20',
    views: 5,
  },
  {
    number: 2,
    title: '공지글입니다.',
    dept: '소융대',
    date: '2022.09.20',
    views: 5,
  },
  {
    number: 2,
    title: '공지글입니다.',
    dept: '소융대',
    date: '2022.09.20',
    views: 5,
  },
  {
    number: 2,
    title: '공지글입니다.',
    dept: '소융대',
    date: '2022.09.20',
    views: 5,
  },
  {
    number: 2,
    title: '공지글입니다.',
    dept: '소융대',
    date: '2022.09.20',
    views: 5,
  },
  {
    number: 2,
    title: '공지글입니다.',
    dept: '소융대',
    date: '2022.09.20',
    views: 5,
  },
  {
    number: 2,
    title: '공지글입니다.',
    dept: '소융대',
    date: '2022.09.20',
    views: 5,
  },
  {
    number: 2,
    title: '공지글입니다.',
    dept: '소융대',
    date: '2022.09.20',
    views: 5,
  },
  {
    number: 2,
    title: '공지글입니다.',
    dept: '소융대',
    date: '2022.09.20',
    views: 5,
  },
  {
    number: 2,
    title: '공지글입니다.',
    dept: '소융대',
    date: '2022.09.20',
    views: 5,
  },
  {
    number: 2,
    title: '공지글입니다.',
    dept: '소융대',
    date: '2022.09.20',
    views: 5,
  },
  {
    number: 2,
    title: '공지글입니다.',
    dept: '소융대',
    date: '2022.09.20',
    views: 5,
  },
  {
    number: 2,
    title: '공지글입니다.',
    dept: '소융대',
    date: '2022.09.20',
    views: 5,
  },
  {
    number: 2,
    title: '공지글입니다.',
    dept: '소융대',
    date: '2022.09.20',
    views: 5,
  },
  {
    number: 2,
    title: '공지글입니다.',
    dept: '소융대',
    date: '2022.09.20',
    views: 5,
  },
];

function NoticeList() {
  return (
    <>
      <tbody>
        {noticeInfo.map((info, i) => {
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
