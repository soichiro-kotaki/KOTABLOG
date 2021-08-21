/**
 * layouts/Footer
 * PresentationalComponent
 */
import React from "react";
/* styles */
import styles from "./styles.module.scss";
import { Link as Scroll } from "react-scroll";

/**
 * presenter
 */
export const Presenter = () => {
    return (
        <Scroll to="top" smooth={true} duration={800}>
            <div className={styles.button}>
                <svg
                    className={styles.icon}
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    width="50px"
                    height="50px"
                    viewBox="0 0 24 24"
                    stroke="#1d2f5f"
                    strokeWidth="2.88"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    fill="none"
                    color="#1d2f5f"
                >
                    {" "}
                    <title id="chevronUpIconTitle">Chevron Up</title>{" "}
                    <polyline points="6 14 12 8 18 14 18 14" />{" "}
                </svg>
            </div>
        </Scroll>
    );
};
