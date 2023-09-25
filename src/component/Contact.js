import React from 'react';
//Image
import icon from "../image/icon.png";
//Icon
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephoneInbound } from "react-icons/bs";
import { BiSolidMap } from "react-icons/bi";
//Style
import styles from "../component/Contact.module.css";

const Contact = () => {
    return (
        <>
            <div className={styles.contact}>
                <div className={styles.container}>
                    <div className={styles.leftBox}>
                        <h3>contact info</h3>
                        <div className={styles.info}>
                            <div className={styles.box}>
                                <div className={styles.icon}>
                                    <HiOutlineMail/>
                                </div>
                                <div className={styles.detail}>
                                    <h4>mail us</h4>
                                    <p>shadibagheri80@gmail.com</p>
                                </div>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.icon}>
                                    <BsTelephoneInbound/>
                                </div>
                                <div className={styles.detail}>
                                    <h4>contact us</h4>
                                    <p>+98 9193855854</p>
                                </div>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.icon}>
                                    <BiSolidMap/>
                                </div>
                                <div className={styles.detail}>
                                    <h4>location</h4>
                                    <p>Tehran, Iran</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightBox}>
                        {/*<img src={icon} alt="icon"/>*/}
                        <h2>let's talk <span>together</span></h2>
                        <div className={styles.form}>
                            <input type="text"  placeholder="Name"/>
                            <input type="text"  placeholder="E-mail"/>
                            <input type="text"  placeholder="Subject"/>
                            <textarea placeholder="Message"/>
                            <button type="submit">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;