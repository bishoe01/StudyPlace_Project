import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';

const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: true,
  action: 'localhost:3000/posting',

  onChange(info) {
    const { status } = info.file;
    console.log(status);
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }

    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },

  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};
//

const Size = Quill.import('formats/size');
Size.whitelist = ['extra-small', 'small', 'medium', 'large'];
Quill.register(Size, true);

function CustomToolbar() {
  return (
    <div id='toolbar'>
      <span className='ql-formats'>
        <select className='ql-font'>
          <option value='고딕'>고딕</option>
          <option value='궁서'>궁서</option>
          <option value='맑은 고딕'>맑은 고딕</option>
        </select>
        <select className='ql-size'>
          <option value='large'>크게</option>
          <option value='medium'>중간</option>
          <option value='small'>작게</option>
        </select>
        <select className='ql-align' />
      </span>
      <span className='ql-formats'>
        <button className='ql-bold' />
        <button className='ql-underline' />
        <select className='ql-color' />
        <select className='ql-background' />
      </span>
      <span className='ql-formats'>
        <button className='ql-link' />
        <button className='ql-image' />
      </span>
    </div>
  );
}

function Editor() {
  const modules = {
    toolbar: {
      container: '#toolbar',
      // [
      //   [{ header: [1, 2, 3, 4, 5, 6, false] }],
      //   [{ font: [] }],
      //   [{ align: [] }],
      //   ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      //   [{ list: 'ordered' }, { list: 'bullet' }, 'link'],
      //   [
      //     {
      //       color: [
      //         '#000000',
      //         '#e60000',
      //         '#ff9900',
      //         '#ffff00',
      //         '#008a00',
      //         '#0066cc',
      //         '#9933ff',
      //         '#ffffff',
      //         '#facccc',
      //         '#ffebcc',
      //         '#ffffcc',
      //         '#cce8cc',
      //         '#cce0f5',
      //         '#ebd6ff',
      //         '#bbbbbb',
      //         '#f06666',
      //         '#ffc266',
      //         '#ffff66',
      //         '#66b966',
      //         '#66a3e0',
      //         '#c285ff',
      //         '#888888',
      //         '#a10000',
      //         '#b26b00',
      //         '#b2b200',
      //         '#006100',
      //         '#0047b2',
      //         '#6b24b2',
      //         '#444444',
      //         '#5c0000',
      //         '#663d00',
      //         '#666600',
      //         '#003700',
      //         '#002966',
      //         '#3d1466',
      //         'custom-color',
      //       ],
      //     },
      //     { background: [] },
      //   ],
      //   ['image'],
      // ],
    },
  };
  const formats = ['header', 'font', 'size', 'underline', 'bold', 'italic', 'list', 'bullet', 'link', 'image', 'align', 'color', 'background'];
  return (
    <>
      <CustomToolbar />
      <ReactQuill modules={modules} formats={formats} style={{ height: '400px', marginBottom: '3px' }}>
        {/* <EditArea /> */}
      </ReactQuill>
      <Dragger {...props}>
        <p className='ant-upload-drag-icon'>
          <InboxOutlined />
        </p>
        <p className='ant-upload-text'>마우스로 파일을 끌어오거나 클릭해서 업로드 해주세요.</p>
      </Dragger>
    </>
  );
}

export default Editor;
