import React, { useState } from 'react';
import { Radio } from 'antd';
import '../App.scss';
import { Steps } from 'antd';
import { Fade, Zoom } from 'react-reveal';
import { color } from '@chakra-ui/react';
const { Step } = Steps;
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
    const [clickBtn, setClickBtn] = useState(null);
    const [current, setCurrent] = useState(0);
    return (
        <Fade top>
            <div>
                <section className='category'>
                    <img className='banner' src="https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" />
                    <div className="step">
                        <StepSection current={current} />
                    </div>
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
                            {roomInfo[tabRoom].room.map((item, index) => {
                                return (
                                    <button onClick={() => {
                                        showRoom(item);
                                        setCurrent(1);
                                    }}
                                    //     style={{ backgroundColor: item === tabRoom ? "#5A8DFF" : " " , 
                                    //     color: item === tabRoom ? "white" : " " , 
                                    // }}
                                    >{item}</button>
                                )
                            }
                            )}
                            <button style={{backgroundColor : "#AEBDCA", color:"gray" ,fontSize: "20px"}}>팀플실 선택</button>
                        </div>

                        <div className='number'>
                            {
                                roomInfo[tabRoom].room.map((item, index) => {
                                    return (
                                        <button onClick={() => {
                                            setClickBtn(item);
                                            setCurrent(2);
                                        }}
                                            style={{ backgroundColor: item === clickBtn ? "#5A8DFF" : "" }}>
                                            {item}</button>
                                    )
                                })
                            }
                        </div>
                        {/* Time */}
                        <div className='time'>
                            {
                                roomInfo[tabRoom].reserve.map((item, index) => {
                                    return (
                                        <button
                                        style={{
                                            backgroundColor : item.available !== true ? "gray" : "" ,
                                            cursor : item.available !== true ? "not-allowed" : "" ,
                                    }}>{`${item.time}`}</button>
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


const StepSection = ({ current }) => (
    <Steps size="default" current={current}>
        <Step title="단과대학 선택" />
        <Step title="팀플실 선택" />
        <Step title="이용시간 선택" />
    </Steps>
);