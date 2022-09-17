/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import styles from './rent.module.css';
import { useNavigate } from 'react-router-dom';
import { Divider, Tag } from 'antd';
function Rent({ roomInfo }) {
    const 경상대학 = roomInfo["경상대학"];
    const 소프트웨어융합대학 = roomInfo["소프트웨어융합대학"];
    return (
        <section className={styles.rent}>
            <RoomInterFace title={"경상대학-팀플실"} roomData={경상대학} />
        </section>
    );
}
export default Rent;

function RoomInterFace({ roomData, title }) {
    const Department = roomData.department;
    const Type = roomData.type;
    const room = roomData.room;
    const description = roomData.description;
    const img = roomData.img;

    return (
        <>
            <section className={styles.headerSection}>
                <h1 style={{ fontSize: "42px", fontWeight: "400w" }}>{title}</h1>
                <p style={{ color: "lightgray", fontSize: "22px" }}>{description}</p>
                {Type.map((type) =>
                    <Tag className={styles.tag} style={{ borderRadius: "20px", fontSize: "14px" }} color='#2db7f5'>
                        {`#${type}`}</Tag>)}
            </section>
            <div className={styles.box}>
                <section className={styles.left__introduce}>
                    <Carousel autoplay effect="fade" className={styles.ImageSection}>
                        {img.map((img) =>
                        (
                            <div className={styles.carousel}><img src={img} />
                            </div>))}
                    </Carousel>
                </section>
                <section className={styles.right__rent}>
                    <h6 className={styles.right__title}>세부사항 선택</h6>
                </section>
            </div>
        </>
    );
}