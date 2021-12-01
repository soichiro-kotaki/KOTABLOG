import React from "react";

//スタイリング
import styles from "./styles.module.scss";

export const Presenter: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.copy}>©2021 KOTABLOG.</p>
        </footer>
    );
};
