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
        contents: [
            {
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
            }
        ];
    };
};

export const Presenter: React.FC<Props> = (props) => {
    const { postData } = props;
    // console.log(postData);

    return (
        <BaseLayout>
            <div className={styles.container_categories}>
                <h1 className={styles.blog_categories}>
                    『
                    {postData.contents.map((content) => {
                        return (
                            <span key={content.id}>
                                {content.category.name}
                            </span>
                        );
                    })}
                    』カテゴリーの記事一覧
                </h1>
                <div className={styles.blog_items__list}>
                    {postData.contents.map((content) => {
                        return (
                            <div className={styles.blog_item} key={content.id}>
                                <Link href={`/posts/${content.id}`}>
                                    <div>
                                        <div className={styles.blog_item__img}>
                                            <Image
                                                src={content.img.url}
                                                width={360}
                                                height={200}
                                            />
                                        </div>
                                        <div
                                            className={
                                                styles.blog_item__metadata
                                            }
                                        >
                                            <div
                                                className={
                                                    styles.blog_item__date
                                                }
                                            >
                                                投稿日：
                                                <Date
                                                    dateString={content.date}
                                                />
                                            </div>
                                        </div>
                                        <h2 className={styles.blog_item__title}>
                                            {content.title}
                                        </h2>
                                        <p
                                            className={
                                                styles.blog_item__category
                                            }
                                        >
                                            {content.category.name}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </BaseLayout>
    );
};
