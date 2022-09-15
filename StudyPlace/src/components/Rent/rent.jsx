import React, { useEffect, useState } from 'react';
import styles from './rent.module.css';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Tab, Tabs } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RentBox from './rentbox/rentbox';
function Rent(props) {

    const today = new Date().getDate();
    let canReserve = [];
    for (let i = today; i < today + 7; i++) {
        canReserve.push(i);
    }
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const openModal = () => {
        setModal(!modal);
    }
    return (
        <section className={styles.section}>
            <div className={styles.mapSection}>
                <img className={styles.map} src="https://images.unsplash.com/photo-1562504208-03d85cc8c23e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                <img className={styles.map} src="https://ieng.hanyang.ac.kr/front/intro/location/file-load?id=21&fileId=8&mw=1280" alt="" />
            </div>
            <ReserveModal canReserve={canReserve} />

        </section>
    );
}

export default Rent;


function ReserveModal({ canReserve }) {
    return (
            <RentBox/>
    );
}



