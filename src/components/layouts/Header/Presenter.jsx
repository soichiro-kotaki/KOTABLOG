/**
 * layouts/Header
 * PresentationalComponent
 */
import React from "react";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";

/* components */
// import { MenuIcon } from "../../commons/ToTopButton/icons/MenuIcon";
/* styles */
import styles from "./styles.module.scss";

export const Presenter = (props) => {
    return (
        <header className={styles.menu}>
            <img src="/seminar-logo.png" className={styles.logo} />
            <h1 className={styles.seminar}>
                長野県立大学 グローバル教養 萱津ゼミ{" "}
            </h1>
            <ul className={styles.nav}>
                <li className={styles.link}>
                    <Scroll
                        to="news"
                        offset={-130}
                        duration={600}
                        smooth={true}
                    >
                        <span className={styles.subtitle}>News</span>新着情報
                    </Scroll>
                </li>
                <li className={styles.link}>
                    <Scroll
                        to="about"
                        offset={-90}
                        duration={600}
                        smooth={true}
                    >
                        <span className={styles.subtitle}>About</span>研究紹介
                    </Scroll>
                </li>
                <li className={styles.link}>
                    <Scroll
                        to="member"
                        offset={-80}
                        duration={600}
                        smooth={true}
                    >
                        <span className={styles.subtitle}>Member</span>
                        教員と学生
                    </Scroll>
                </li>
                <li className={styles.link}>
                    <Scroll to="contact" duration={600} smooth={true}>
                        <span className={styles.subtitle}>Contact</span>
                        お問い合わせ
                    </Scroll>
                </li>
            </ul>
            {/*  */}
            <div className={styles.menubar} onClick={props.handleOpenMenuModal}>
                <img src="/menu.png" />
            </div>
        </header>
    );
};
