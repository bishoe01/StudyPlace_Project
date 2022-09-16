/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import styles from './rent.module.css';
import { useNavigate } from 'react-router-dom';
function Rent({roomInfo}) {
    const 경상대학 = roomInfo["경상대학"];
    console.log(경상대학);
    return(
    <section className={styles.rent}>
        <roomInterFace roomData={경상대학}/>
        <h1 style={{fontSize:"42px"}}>경상대학-팀플실</h1>
        <h5 style={{fontSize:"22px"}}>다목적-회의,스터디,자습(2인~6인)</h5>
        
    </section>
    );
}
export default Rent;

function roomInterFace({roomData}){
    const room__department = roomData.department;
    console.log(room__department);
    return(
        <>
        <h1>{roomData}</h1>
        room
        </>
    );
}
