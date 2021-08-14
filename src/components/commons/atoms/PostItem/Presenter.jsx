import styles from "./styles.module.scss";

export function Presenter() {
    return (
        <>
            <li className={styles.post_item}>
                <time className={styles.post_time_stamp} dateTime="2020-11">
                    2020.11.11
                </time>
                <a
                    href="https://www.u-nagano.ac.jp/"
                    className={styles.post_title}
                >
                    高橋郷くんが、中村ゼミを辞めました。
                </a>
            </li>
            <li className={styles.post_item}>
                <time className={styles.post_time_stamp} dateTime="2020-11">
                    2020.11.11
                </time>
                <a
                    href="https://www.u-nagano.ac.jp/"
                    className={styles.post_title}
                >
                    宮本優くんが、ゼミに遅刻してきました。
                </a>
            </li>
        </>
    );
}
