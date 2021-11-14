import React from "react";
import Link from "next/link";
import Image from "next/image";

// コンポーネント
import { BaseLayout } from "../../layouts/BaseLayout";
import { Date } from "../../commons/atoms/Date";

// スタイリング
import styles from "./styles.module.scss";

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
        category: {
            id: string;
            name: string;
        };
    };
};

export const Presenter: React.FC<Props> = (props) => {
    const { postData } = props;
    // console.log(postData);

    return (
        <BaseLayout>
            <article className={styles.container_post}>
                <div className={styles.content_post}>
                    <div className={styles.img_post}>
                        <Image
                            src={postData.img.url}
                            width={900}
                            height={450}
                        />
                    </div>
                    <h1 className={styles.title_post}>{postData.title}</h1>
                    <div className={styles.categories_post}>
                        <Link href={`/categories/${postData.category.id}`}>
                            {postData.category.name}
                        </Link>
                    </div>
                    <p className={styles.date_post}>
                        投稿日： <Date dateString={postData.date} /> 更新日：
                        <Date dateString={postData.updatedAt} />
                    </p>
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
