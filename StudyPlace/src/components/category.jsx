import React, { useState } from 'react';
import { Radio } from 'antd';
import '../App.scss';
import { Fade, Zoom } from 'react-reveal';
function Category(props) {
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <Fade top>
        <section className='category'>
            <h1 className='h1'>카테고리</h1>
            <div className='category__check'>
                <div className='check__title'>
                    <h4>검색모드</h4>
                </div>
                <div className='check__list'>
                    <Radio.Group onChange={onChange} value={value} className="list__radio">
                        <Radio className='radio' value={1}>전체항목</Radio>
                        <Radio className='radio' value={2}>소속대학만</Radio>
                    </Radio.Group>
                </div>
            </div>
            <div className='selection'>
                <div className='people'>
                    <button>학술정보관</button>
                    <button>경상대학</button>
                    <button>국제문화대학</button>
                    <button>공학대학</button>
                </div>
                <div className='number'></div>
                <div className='time'></div>
            </div>
        </section>
        </Fade>
    );
}

export default Category;


