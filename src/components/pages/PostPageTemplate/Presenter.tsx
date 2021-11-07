import React from "react";
import { BaseLayout } from "../../layouts/BaseLayout";

// コンポーネント
import { Date } from "../../commons/atoms/Date";

// スタイリング
import styles from "./styles.module.scss";

// type Props = {
//     postData: {
//         id: string;
//         contentHtml: string;
//         title: string;
//         date: string;
//     };
// };

type Props = {
    postData: {
        id: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        revisedAt: string;
        img: {
            url: string;
            height: string;
            width: string;
        };
        title: string;
        date: string;
        body: string;
        categories: [];
    };
};

export const Presenter: React.FC<Props> = (props) => {
    const { postData } = props;

    return (
        <BaseLayout>
            <article className={styles.container_post}>
                <h1 className={styles.title_post}>{postData.title}</h1>
                <p className={styles.date_post}>
                    投稿日: <Date dateString={postData.date} />{" "}
                </p>
                <div className={styles.content_post}>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: postData.body,
                        }}
                        className={styles.text_post}
                    />
                </div>
            </article>
        </BaseLayout>
    );
};
