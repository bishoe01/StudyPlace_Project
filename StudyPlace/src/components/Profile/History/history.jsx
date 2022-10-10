import React, { useEffect, useState } from 'react';
import { Table } from 'antd';

function History() {
  const columns = [
    {
      title: '날짜',
      dataIndex: 'date',
      sorter: {
        compare: (a, b) => new Date(a.date) - new Date(b.date),
        multiple: 3,
      },
    },
    {
      title: '시간',
      dataIndex: 'time',
    },
    {
      title: '장소',
      dataIndex: 'place',
    },
    {
      title: '인원',
      dataIndex: 'peoples',
    },
  ];
  const data = [
    {
      key: '1',
      date: '2022-05-20',
      time: '11:00~14:30',
      place: '소프트웨어융합대학 팀플실A',
      peoples: '4~6',
    },
    {
      key: '2',
      date: '2022-07-01',
      time: '11:00~12:00',
      place: '소프트웨어융합대학 팀플실B',
      peoples: '4~10',
    },
    {
      key: '3',
      date: '2022-08-05',
      time: '15:00~16:30',
      place: '소프트웨어융합대학 팀플실A',
      peoples: '2~4',
    },
    {
      key: '4',
      date: '2022-09-20',
      time: '15:00~16:30',
      place: '소프트웨어융합대학 팀플실C',
      peoples: '6~8',
    },
    {
      key: '5',
      date: '2022-09-20',
      time: '15:00~16:30',
      place: '소프트웨어융합대학 팀플실C',
      peoples: '6~8',
    },
    {
      key: '6',
      date: '2022-09-20',
      time: '15:00~16:30',
      place: '소프트웨어융합대학 팀플실C',
      peoples: '6~8',
    },
    {
      key: '7',
      date: '2022-09-20',
      time: '15:00~16:30',
      place: '소프트웨어융합대학 팀플실C',
      peoples: '6~8',
    },
    {
      key: '8',
      date: '2022-09-20',
      time: '15:00~16:30',
      place: '소프트웨어융합대학 팀플실C',
      peoples: '6~8',
    },
    {
      key: '9',
      date: '2022-09-20',
      time: '15:00~16:30',
      place: '소프트웨어융합대학 팀플실C',
      peoples: '6~8',
    },
    {
      key: '10',
      date: '2022-09-20',
      time: '15:00~16:30',
      place: '소프트웨어융합대학 팀플실C',
      peoples: '6~8',
    },
    {
      key: '11',
      date: '2022-09-20',
      time: '15:00~16:30',
      place: '소프트웨어융합대학 팀플실C',
      peoples: '6~8',
    },
    {
      key: '12',
      date: '2022-09-20',
      time: '15:00~16:30',
      place: '소프트웨어융합대학 팀플실C',
      peoples: '6~8',
    },
    {
      key: '13',
      date: '2022-09-20',
      time: '15:00~16:30',
      place: '소프트웨어융합대학 팀플실C',
      peoples: '6~8',
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  return <Table columns={columns} dataSource={data} onChange={onChange} />;
}

export default History;
