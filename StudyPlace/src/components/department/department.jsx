import React from 'react';
import { Link } from 'react-router-dom';
import Block from '../block/block';
import styles from './department.module.css';
import '../../App.scss';
function Department(props) {
    return (
        <div>
            <section className="graphSection">
                <button className="down"><i className={`fa-solid fa-arrow-down`}></i></button>
            </section>
        <section className={styles.section}>
            <div className={styles.department}>
                <Block imgsrc={"/imgs/HanyangE/engineer.png"} linkto={'/engineer'} name={'공학대학'}></Block>
                <Block imgsrc={"/imgs/HanyangE/software.png"} linkto={'/software'} name={'소프트웨어융합대학'}></Block>
                <Block imgsrc={"/imgs/HanyangE/science.png"} linkto={'/science'} name={'과학기술대학'}></Block>
            </div>
            <div className={styles.department}>
            <Block imgsrc={"/imgs/HanyangE/culture.png"} linkto={'/culture'} name={'국제문화대학'}></Block>
                <Block imgsrc={"/imgs/HanyangE/media.png"} linkto={'/media'} name={'언론정보대학'}></Block>
                <Block imgsrc={"/imgs/HanyangE/eco.png"} linkto={'/bea'} name={'경상대학'}></Block>
            </div>
            <div className={styles.department}>
            <Block imgsrc={"/imgs/HanyangE/Design.png"} linkto={'/design'} name={'디자인대학'}></Block>
                <Block imgsrc={"/imgs/HanyangE/ArtPhysical.png"} linkto={'/artphysical'} name={'예체능대학'}></Block>
                <Block imgsrc={"/imgs/HanyangE/Pharmacy.png"} linkto={'/pharmacy'} name={'약학대학'}></Block>
            </div>
        </section>
        </div>
    );
}

export default Department;