/**
 * layouts/Footer
 * PresentationalComponent
 */
import React from "react";
/* styles */
import styles from "./styles.module.scss";

/**
 * presenter
 */
export const Presenter = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.copy}>
                Copyright© 2021 The University of Nagano. Kayatsu Seminar.
            </p>
        </footer>
    );
};
