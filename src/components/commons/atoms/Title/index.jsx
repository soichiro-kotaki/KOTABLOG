import styles from "./styles.module.scss";

export const Title = (props) => {
    const { title, subtitle } = props;

    return (
        <h1 className={styles.title}>
            {title}
            <span className={styles.subtitle}>{subtitle}</span>
        </h1>
    );
};
