import React, { useState } from 'react';
//Image
import icon from "../image/icon.png";
//Icon
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephoneInbound } from "react-icons/bs";
import { BiSolidMap } from "react-icons/bi";
//Style
import styles from "../component/Contact.module.css";

const Contact = () => {

    const [data, setData] = useState({
        Name: "",
        Email: "",
        Subject: "",
        Message: ""
    });

    let Name, Value;
    const inputHandler = (event) => {
        Name = event.target.name;
        Value = event.target.value;
        setData({...data, [Name]:Value});
    }
    const sendData = async (event) => {
        const { Name, Email, Subject, Message } = data;
        event.preventDefault()
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Name, Email, Subject, Message
            })
        }
        const send = await fetch("https://portfolio-ec373-default-rtdb.firebaseio.com/Massage.json", options);
        console.log(send);
    }

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
                            <form method="POST" className={styles.form}>
                                <input type="text" name="Name" value={data.Name} placeholder="Name" onChange={inputHandler}/>
                                <input type="text" name="Email" value={data.Email} placeholder="Email" onChange={inputHandler}/>
                                <input type="text" name="Subject" value={data.Subject} placeholder="Subject" onChange={inputHandler}/>
                                <textarea name="Message" value={data.Message} placeholder="Message" onChange={inputHandler}/>
                                <button type="submit" onClick={sendData}>Send</button>
                            </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;