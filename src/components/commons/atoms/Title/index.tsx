import React from "react";
import styles from "./styles.module.scss";

type Props = {
    title: string;
    subtitle: string;
};

export const Title: React.FC<Props> = (props) => {
    const { title, subtitle } = props;

    return (
        <h1 className={styles.title}>
            {title}
            <span className={styles.subtitle}>{subtitle}</span>
        </h1>
    );
};
