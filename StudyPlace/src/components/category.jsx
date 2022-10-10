import React, { useState } from 'react';
import { Radio } from 'antd';
import '../App.scss';
import { Fade, Zoom } from 'react-reveal';
function Category({ BuildingList, roomInfo }) {
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    const [tabRoom, setTabRoom] = useState("경상대학");
    const showRoom = (roomName) => {
        setTabRoom(roomName);
    }
    const [clickBtn, setClickBtn] = useState(false);

    return (
        <Fade top>

            <div>
                <section className='category'>
                    <h1 className='h1'>카테고리</h1>
                    <div className='category__check'>
                        <div className='check__title'>
                            <span>검색모드</span>
                        </div>
                        <div className='check__list'>
                            <Radio.Group onChange={onChange} value={value} className="list__radio">
                                <Radio className='radio' value={1}>전체항목</Radio>
                                <Radio className='radio' value={2}>소속대학만</Radio>
                            </Radio.Group>
                        </div>
                    </div>
                    <div className='selection'>
                        <div className='building'>
                            {BuildingList.map((item, index) => {
                                return (
                                    <button onClick={() => showRoom(item)}
                                        style={{ backgroundColor: item===tabRoom ? "#5A8DFF" : " " }}>{item}</button>
                                )}
                            )}
                        </div>
                        <div className='number'>
                            {
                                roomInfo[tabRoom].room.map((item, index) => {
                                    return (
                                        <button>{item}</button>
                                    )})
                            }
                        </div>
                        <div className='people'>
                            {
                                roomInfo[tabRoom].people.map((item, index) => {
                                    return (
                                        <button>{`${item}인`}</button>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </div>
        </Fade>

    );
}

export default Category;



function CategoryBtn({ name }) {
    return (
        <div>
            <button>{name}</button>
        </div>
    );
}


function RoomTab({ number }) {
    return (
        <div>
            <button>{number}</button>
        </div>
    )
}