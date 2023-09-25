import React from 'react';
//Style
import styles from "../component/Nave.module.css";
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <>
            <div className={styles.navContainer}>
                <div className={styles.logo}>
                    <h2>CT</h2>
                </div>
                <div className={styles.links}>
                    <ul>
                        <li>
                            <Link to="/" className={styles.link}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className={styles.link}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/work" className={styles.link}>
                                Work
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className={styles.link}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.btn}>
                    <Link to="/contact" className={styles.btnLink}>
                        Let's Talk
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Nav;