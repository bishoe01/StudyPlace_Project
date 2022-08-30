import React, { useEffect, useState } from 'react';
import styles from './rent.module.css';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
function Rent(props) {
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const openModal = () => {
        setModal(!modal);
    }
    return (
        <section className={styles.section}>
            {modal ? <ReserveModal openModal={openModal} /> : null}
            <div className={styles.mapSection}>
                <img className={styles.map} src="https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/301644926_169730408938998_1695423759586484617_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=okiAJ0QXl4MAX85X-6d&_nc_ht=scontent-ssn1-1.xx&oh=00_AT8hxLD4ShJOAYs4EK7JNdmrbNG2lUzwF5Mmpt4sYTEOog&oe=6310B6A5" alt="" />
                <img className={styles.map} src="https://ieng.hanyang.ac.kr/front/intro/location/file-load?id=21&fileId=8&mw=1280" alt="" />
            </div>
            <h1 className={styles.title}>팀플실 예약</h1>
            <div className={styles.info}>
                <img className={styles.roomImg} src={'/imgs/studyroom/studyroom1.jpeg'} alt="" />
                <div className={styles.btnSeciton}>
                    <h1 className={`${styles.btn} ${styles.maintitle}`}>팀플실</h1>
                    <div className={styles.selection}>
                        <button className={styles.btn} onClick={openModal}>팀플실1</button>
                        <button className={styles.btn}>팀플실2</button>
                        <button className={styles.btn}>팀플실3</button>
                        <button className={styles.btn}>팀플실4</button>
                        <button className={styles.btn}>팀플실5</button>
                        <button className={styles.btn}>팀플실6</button>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Rent;


function ReserveModal({ openModal }) {
    return (
        <modal className={styles.modal}>
            <section className={styles.modalLeft}>
                <header className={styles.modalHeader}>
                    <h1>팀플실1</h1>
                    <button className={styles.modalBtn} onClick={openModal}>X</button>
                </header>
                <img className={styles.roomState} src="/imgs/studyroom/Group.svg" alt="" />
            </section>
            <section className={styles.modalRight}>
                <Form.Select size="lg">
                    <option>인원수 선택</option>
                    <option value="1">2인</option>
                    <option value="2">3인</option>
                    <option value="3">4인</option>
                    <option value="4">4~6인</option>
                </Form.Select>
            </section>
        </modal>
    );
}
