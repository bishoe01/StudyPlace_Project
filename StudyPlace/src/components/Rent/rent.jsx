import React from 'react';
import { Carousel } from 'react-bootstrap';
import CarouselFade from '../Slide/Carousel';
import styles from './rent.module.css';
function Rent(props) {
    return (
        <section className={styles.section}>
            <div className={styles.mapSection}>
                <img className={styles.map} src="https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/301644926_169730408938998_1695423759586484617_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=okiAJ0QXl4MAX85X-6d&_nc_ht=scontent-ssn1-1.xx&oh=00_AT8hxLD4ShJOAYs4EK7JNdmrbNG2lUzwF5Mmpt4sYTEOog&oe=6310B6A5" alt="" />
                <img className={styles.map} src="https://ieng.hanyang.ac.kr/front/intro/location/file-load?id=21&fileId=8&mw=1280" alt="" />
            </div>
            <h1 className={styles.title}>팀플실 예약</h1>
            <div className={styles.info}>
                <img className={styles.roomImg} src={'/imgs/studyroom/studyroom1.jpeg'} alt="" />
            </div>

        </section>
    );
}

export default Rent;