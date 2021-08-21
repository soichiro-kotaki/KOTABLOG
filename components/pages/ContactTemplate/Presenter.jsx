import { BaseLayout } from "../../layouts/BaseLayout";

import styles from "./styles.module.scss";

export const Presenter = () => {
    return (
        <BaseLayout>
            <div className={styles.container}>
                <h1 className={styles.title}>Coming Soon.....</h1>
            </div>
        </BaseLayout>
    );
};
