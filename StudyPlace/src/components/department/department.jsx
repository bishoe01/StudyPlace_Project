import React from 'react';
import { Link } from 'react-router-dom';
import styles from './department.module.css';
import '../../App.scss';
import { useState } from 'react';
import { Fade } from 'react-reveal';
function Department(props) {
    const [blockbtn, setBlockbtn] = useState([
        { imgsrc: "/imgs/HanyangE/ArtPhysical.png", linkto: "/artphysical", name: "예체능대학" },
        { imgsrc: "/imgs/HanyangE/Design.png", linkto: '/design', name: '디자인대학' },
        { imgsrc: "/imgs/HanyangE/culture.png", linkto: "/culture", name: "국제문화대학" },
        { imgsrc: "/imgs/HanyangE/science.png", linkto: "/science", name: "과학기술대학" },
        { imgsrc: "/imgs/HanyangE/engineer.png", linkto: "/engineer", name: "공학대학" },
        { imgsrc: "/imgs/HanyangE/media.png", linkto: '/media', name: '언론정보대학' },
        { imgsrc: "/imgs/HanyangE/Pharmacy.png", linkto: '/pharmacy', name: '약학대학' },
        { imgsrc: "/imgs/HanyangE/software.png", linkto: "/software", name: "소프트웨어융합대학" },
        { imgsrc: "/imgs/HanyangE/eco.png", linkto: "/bea", name: "경상대학" },
    ]);
    return (
        <Fade cascade>
            <div>
                <img className='graphSection' src="https://images.unsplash.com/flagged/photo-1578928534298-9747fc52ec97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt="" />
                <section className="department_section">
                        {blockbtn.map((item, index) => {
                            return (
                                <div className="block">
                                <Link to={item.linkto}>
                                <img className="logo" src={item.imgsrc} alt={""} />
                                </Link>
                                <span className="linkDetails">{item.name}</span>
                                </div>
                            )
                        })}
                </section>
            </div>
        </Fade>
    );
}

export default Department;