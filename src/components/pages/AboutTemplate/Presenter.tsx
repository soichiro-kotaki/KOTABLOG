import React from "react";

// コンポーネント
import { BaseLayout } from "src/components/layouts/BaseLayout";

//スタイリング
import styles from "./styles.module.scss";

export const Presenter: React.FC = () => {
    return (
        <BaseLayout title={"このブログについて"}>
            <div className={styles.container}>
                <h1 className={styles.title}>Coming Soon.....</h1>
            </div>
        </BaseLayout>
    );
};
