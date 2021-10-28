import React from "react";
import { BaseLayout } from "../../layouts/BaseLayout";

// スタイリング
import styles from "./styles.module.scss";

type Props = {
    postData: {
        id: string;
        contentHtml: string;
        title: string;
        date: string;
    };
};

export const Presenter: React.FC<Props> = (props) => {
    const { postData } = props;

    return (
        <BaseLayout>
            <article className={styles.container_post}>
                <h1 className={styles.title_post}>{postData.title}</h1>
                <p className={styles.date_post}>{`投稿日: ${postData.date}`}</p>
                <div className={styles.content_post}>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: postData.contentHtml,
                        }}
                        className={styles.text_post}
                    />
                </div>
            </article>
        </BaseLayout>
    );
};
