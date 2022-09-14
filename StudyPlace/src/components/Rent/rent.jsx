import React, { useEffect, useState } from 'react';
import styles from './rent.module.css';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Tab, Tabs } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
                <img className={styles.map} src="https://images.unsplash.com/photo-1562504208-03d85cc8c23e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                <img className={styles.map} src="https://ieng.hanyang.ac.kr/front/intro/location/file-load?id=21&fileId=8&mw=1280" alt="" />
            </div>
            <div className={styles.info}>
                <ReserveModal />
            </div>

        </section>
    );
}

export default Rent;


function ReserveModal({ openModal }) {
    return (
        <modal className={styles.modal}>
            <Container fluid>
                <Row>
                    <Col xl={1} sm={12} style={{backgroundColor: "lightgray"}}>
                        <h3>날짜</h3>
                        <ul className={styles.dateList}>
                            <div className={styles.month}>
                                <h2>9</h2>
                                <span>2022</span>
                            </div>
                            <li>금 21</li>
                            <li>토 22</li>
                            <li>일 23</li>
                            <li>월 24</li>
                            <li>화 25</li>
                            <li>수 26</li>
                            <li>목 27</li>
                        </ul>
                    </Col>
                    <Col xl={6} sm={12} style={{backgroundColor: "skyblue"}}>
                        <h3>팀플실</h3>
                    <ul className={styles.ul}>
                            <li className={styles.room}>팀플실 1</li>
                            <li className={styles.room}>팀플실 2</li>
                            <li className={styles.room}>팀플실 3</li>
                            <li className={styles.room}>팀플실 4</li>
                            <li className={styles.room}>팀플실 5</li>
                            <li className={styles.room}>팀플실 6</li>
                            <li className={styles.room}>팀플실 7</li>
                            <li className={styles.room}>팀플실 8</li>
                        </ul>
                    </Col>
                    <Col xl={1} sm={12} style={{backgroundColor: "powderblue"}}>
                        <h3>인원</h3>
                        <ul className={styles.member}>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                            <li>6+</li>
                        </ul>
                    </Col>
                    <Col xl={4} sm={12} style={{backgroundColor: "cadetblue"}}>
                        <h3>시간</h3>
                        
                    </Col>
                    
                </Row>
            </Container>
        </modal>
    );
}



function Tabs_({ props }) {
    return (
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3">
            <Tab eventKey="home" title="Home">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consequuntur.
            </Tab>
            <Tab eventKey="profile" title="Profile">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consequuntur.
            </Tab>
            <Tab eventKey="contact" title="Contact">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consequuntur.
            </Tab>
        </Tabs>
    )
}
