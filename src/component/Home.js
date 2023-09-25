import React from 'react';
//Image
import man from "../image/man.png";
import sign from "../image/sign.png";
import work from "../image/work.webp";
import font from "../image/font.png";
//Icon
import { AiOutlineDoubleRight, AiOutlineDribbble, AiOutlineTwitter } from "react-icons/ai";
import { BiCamera } from "react-icons/bi";
import { PiPencilCircleBold } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import {  } from "react-icons/";
//Style
import styles from "../component/Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className={styles.home}>
                <div className={styles.topContainer}>
                    <div className={styles.leftContainer}>
                        <div className={styles.imgContainer}>
                            <div className={styles.imgBox}>
                                <img src={man} alt="man"/>
                            </div>
                        </div>
                        <Link to="/about" className={styles.link}>
                            <div className={styles.detailContainer}>
                                <h4>a web designer</h4>
                                <h3>Shadi Bagheri</h3>
                                <p>I am a Tehran web designer</p>
                                <div className={styles.icon}>
                                    <AiOutlineDoubleRight/>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={styles.rightContainer}>
                        <div className={styles.content}>
                            <div className={styles.topBox}>
                                <p>latest works and featured</p>
                            </div>
                            <div className={styles.bottomBox}>
                                <div className={styles.box}>
                                    <div className={styles.imgBox}>
                                        <img src={sign} alt="sign"/>
                                    </div>
                                    <Link to="/work" className={styles.link}>
                                        <div className={styles.detail}>
                                            <div className={styles.info}>
                                                <p>more about me</p>
                                                <h3>credentials</h3>
                                                <div className={styles.icon}>
                                                    <AiOutlineDoubleRight/>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className={styles.box}>
                                    <div className={styles.imgBox}>
                                        <img src={work} alt="work"/>
                                    </div>
                                    <Link to="/about" className={styles.link}>
                                        <div className={styles.detail}>
                                            <div className={styles.info}>
                                                <p>showcase</p>
                                                <h3>projects</h3>
                                                <div className={styles.icon}>
                                                    <AiOutlineDoubleRight/>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.midContainer}>
                    <div className={styles.content}>
                        <div className={styles.box}>
                            <div className={styles.imgBox}>
                                <img src={font} alt="font"/>
                            </div>
                            <Link to="/blog" className={styles.link}>
                                <div className={styles.detail}>
                                    <div className={styles.info}>
                                        <p>blog</p>
                                        <h3>fonts</h3>
                                    </div>
                                    <div className={styles.icon}>
                                        <AiOutlineDoubleRight/>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className={styles.box2}>
                            <div className={styles.imgBox}>
                                <div className={styles.imgContainer}>
                                    <BiCamera/>
                                    <PiPencilCircleBold/>
                                    <FaReact/>
                                    <BsCodeSlash/>
                                </div>
                            </div>
                            <Link to="/services" className={styles.link}>
                                <div className={styles.detail}>
                                    <div className={styles.info}>
                                        <p>specialization</p>
                                        <h3>services offering</h3>
                                    </div>
                                    <div className={styles.icon}>
                                        <AiOutlineDoubleRight/>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className={styles.box3}>
                            <div className={styles.imgBox}>
                                <div className={styles.imgContainer}>
                                    <div className={styles.img}>
                                        <AiOutlineDribbble/>
                                    </div>
                                    <div className={styles.img}>
                                        <AiOutlineTwitter/>
                                    </div>
                                </div>
                            </div>
                            <Link to="/contact" className={styles.link}>
                                <div className={styles.detail}>
                                    <div className={styles.info}>
                                        <p>stay with me</p>
                                        <h3>profiles</h3>
                                    </div>
                                    <div className={styles.icon}>
                                        <AiOutlineDoubleRight/>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;