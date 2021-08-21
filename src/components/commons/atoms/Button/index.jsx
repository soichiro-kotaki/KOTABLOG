import Link from "next/link";

import styles from "./styles.module.scss";

export function Button() {
    return (
        <div className={styles.link}>
            <Link href="/about">
                <div className={styles.btn}>MORE</div>
            </Link>
        </div>
    );
}
