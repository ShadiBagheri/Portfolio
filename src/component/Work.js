import React from 'react';
//Image
import project1 from "../image/project1.jpg";
import project2 from "../image/project2.jpg";
import star from "../image/star.png";
import mobile from "../image/mobile.webp";
//Style
import styles from "../component/Work.module.css";

const Work = () => {
    return (
        <>
            <div className={styles.work}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <div className={styles.content}>
                            <div className={styles.box}>
                                <div className={styles.imgBox}>
                                    <img src={project1} alt="project"/>
                                </div>
                                <h3>web design</h3>
                                <p>dynamic</p>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.imgBox}>
                                    <img src={project2} alt="project2"/>
                                </div>
                                <h3>photography</h3>
                                <p>disel 1</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.heading}>
                            <img src={star} alt="star"/>
                            <h2>all projects</h2>
                            <img src={star} alt="star"/>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.box}>
                                <div className={styles.imgBox}>
                                    <img src={mobile} alt="mobile"/>
                                </div>
                                <p>mobile design 1</p>
                                <h3>seven studio</h3>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.imgBox}>
                                    <img src={mobile} alt="mobile"/>
                                </div>
                                <p>mobile design 2</p>
                                <h3>seven studio</h3>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.imgBox}>
                                    <img src={mobile} alt="mobile"/>
                                </div>
                                <p>mobile design 3</p>
                                <h3>seven studio</h3>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.imgBox}>
                                    <img src={mobile} alt="mobile"/>
                                </div>
                                <p>mobile design 4</p>
                                <h3>seven studio</h3>
                            </div>
                            {/*<div className={styles.box}>*/}
                            {/*    <div className={styles.imgBox}>*/}
                            {/*        <img src={mobile} alt="mobile"/>*/}
                            {/*    </div>*/}
                            {/*    <p>mobile design 5</p>*/}
                            {/*    <h3>seven studio</h3>*/}
                            {/*</div>*/}
                            {/*<div className={styles.box}>*/}
                            {/*    <div className={styles.imgBox}>*/}
                            {/*        <img src={mobile} alt="mobile"/>*/}
                            {/*    </div>*/}
                            {/*    <p>mobile design 6</p>*/}
                            {/*    <h3>seven studio</h3>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Work;