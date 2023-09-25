import React from 'react';
//Image
import font from "../image/font.png";
//Icons
import { AiOutlineDoubleRight } from "react-icons/ai";
//Style
import styles from "../component/Footer.module.css";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.topContainer}>
                    <div className={styles.content}>
                        <div className={styles.leftBox}>
                            <div className={styles.box}>
                                <div className={styles.detail}>
                                    <h3>02</h3>
                                    <p>year experience</p>
                                </div>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.detail}>
                                    <h3>25</h3>
                                    <p>client worldwide</p>
                                </div>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.detail}>
                                    <h3>+10</h3>
                                    <p>total projects</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.rightBox}>
                            <img src={font} alt="font"/>
                            <div className={styles.content}>
                                <div className={styles.detail}>
                                    <h2>let's work <span>Together</span></h2>
                                </div>
                                <div className={styles.icon}>
                                    <AiOutlineDoubleRight/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.bottomContainer}>
                    <div className={styles.container}>
                        <h2>CT</h2>
                        <div className={styles.nav}>
                            <ul>
                                <li>
                                    <Link to="/" className={styles.link}>Home</Link>
                                </li>
                                <li>
                                    <Link to="/about" className={styles.link}>About</Link>
                                </li>
                                <li>
                                    <Link to="/work" className={styles.link}>Work</Link>
                                </li>
                                <li>
                                    <Link to="/contact" className={styles.link}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;