import React from "react";
import Link from "next/link";

import styles from "./styles.module.scss";

export const Button: React.FC = () => {
    return (
        <div className={styles.link}>
            <Link href="/about">
                <div className={styles.btn}>MORE</div>
            </Link>
        </div>
    );
};
