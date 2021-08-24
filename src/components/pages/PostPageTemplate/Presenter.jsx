import { BaseLayout } from "../../layouts/BaseLayout";

import styles from "./styles.module.scss";

export const Presenter = (props) => {
    const { postData } = props;
    return (
        <BaseLayout>
            <article className={styles.container_post}>
                <h1 className={styles.title_post}>{postData.title}</h1>
                <p className={styles.date_post}>{postData.date}</p>
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
