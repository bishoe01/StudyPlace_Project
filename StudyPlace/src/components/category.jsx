import React, { useState } from 'react';
import { Radio } from 'antd';
import '../App.scss';
import { Steps } from 'antd';
import { Fade, Zoom } from 'react-reveal';
import { color } from '@chakra-ui/react';
const { Step } = Steps;
function Category({ BuildingList, roomInfo }) {
    let fakedata = {
        "info": {
            "id": 1,
            "studyroom_name": "큐브0",
            "university": "소프트웨어융합대학",
            "department": "소프트웨어학부",
            "location": "제5공학관",
            "capacity": 10,
            "descriptions": [
                "투명한 벽으로 구분된 팀플실"
            ],
            "cautions": [
                "음식물 반입금지",
                "시끄럽게 떠드는 행위 금지"
            ],
            "drinks": [
                "커피",
                "물"
            ],
            "tags": [
                "태그1",
                "태그2"
            ]
        },
        "reservation": [
            {
                "year" : "2022",
                "month": "10",
                "date" : "19",
                "name": "홍길동",
                "startTime": 15,
                "endTime": 17
            },
            {
                "year" : "2022",
                "month": "10",
                "date" : "19",
                "name": "광개토",
                "startTime": 17,
                "endTime": 19
            },
            {
                "year" : "2022",
                "month": "10",
                "date" : "19",
                "name": "이순신",
                "startTime": 19,
                "endTime": 21
            },
        ]
    }
    let today = new Date();

    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    const [tabRoom, setTabRoom] = useState("1");
    const showRoom = (date) => {
        setTabRoom(date);
        setClickBtn(null);
    }
    let reserveDate = [];
    for (let i = today.getDate(); i < today.getDate() + 7; i++) {
        reserveDate.push(i);
    }
    const [clickBtn, setClickBtn] = useState(null);
    const [current, setCurrent] = useState(0);
    // const showDate = (date) => 
        
    // }
    // function search(roomNum,date){
    //     fakedata["reservation"].forEach((item) => {
    //         if(item["date"] == date && item["roomNum"] == roomNum){
    //             const tmp = {...roomInfo};
    //             tmp["소프트웨어융합대학"].reserve[item] = true;
    //             roomInfo["소프트웨어융합대학"].reserve[item]= true
    //         }
    //     }
    // }
    
    
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
                            {roomInfo["소프트웨어융합대학"].room.map((item, index) => {
                                return (
                                    <button onClick={() => {
                                        showRoom(item);
                                        setCurrent(1);
                                        
                                    }}
                                        style={{ backgroundColor: item === tabRoom ? "#5A8DFF" : " " , 
                                        color: item === tabRoom ? "white" : " " , 
                                    }}
                                    >{item}</button>
                                )
                            }
                            )}
                            <button style={{backgroundColor : "#AEBDCA", color:"gray" ,fontSize: "20px"}}>팀플실 선택</button>
                        </div>

                        <div className='number'>
                            {
                                roomInfo["소프트웨어융합대학"].room.map((item, index) => {
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
                                Object.keys(roomInfo["소프트웨어융합대학"].reserve).map((item, index) => {
                                    return (
                                        <button
                                        onClick={() => {
                                            setClickBtn(item);
                                            setCurrent(3);
                                        }}
                                        style={{
                                            backgroundColor : roomInfo["소프트웨어융합대학"].reserve[item] !== true ? "gray" : "" ,
                                            cursor : roomInfo["소프트웨어융합대학"].reserve[item] !== true ? "not-allowed" : "" ,
                                    }}>{`${item}:00`}</button>
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