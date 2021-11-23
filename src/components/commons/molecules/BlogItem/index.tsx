import React from "react";
import Link from "next/link";
import Image from "next/image";

// コンポーネント
import { Date } from "../../atoms/Date";

// スタイリング
import styles from "./styles.module.scss";

// データ型
import { ImageType } from "../../../../types/Image";
import { CategoriesType } from "../../../../types/Categories";

type Props = {
    postData: {
        contents: [
            {
                id: string;
                createdAt: string;
                updatedAt: string;
                publishedAt: string;
                revisedAt: string;
                img: ImageType;
                title: string;
                date: string;
                body: string;
                category: CategoriesType[];
            }
        ];
    };
};

export const BlogItem: React.FC<Props> = (props) => {
    const { postData } = props;

    return (
        <>
            {postData.contents.map((content) => {
                return (
                    <div className={styles.blog_item} key={content.id}>
                        <Link href={`/posts/${content.id}`}>
                            <div>
                                <div
                                    className={styles.blog_item__wrapper___img}
                                >
                                    <Image
                                        src={content.img.url}
                                        width={360}
                                        height={200}
                                        className={styles.blog_item__img}
                                    />
                                </div>
                                <div className={styles.blog_item__metadata}>
                                    <div className={styles.blog_item__date}>
                                        投稿日：
                                        <Date dateString={content.date} />
                                    </div>
                                </div>
                                <h2 className={styles.blog_item__title}>
                                    {content.title}
                                </h2>
                                {content.category.map((category) => {
                                    return (
                                        <p
                                            className={
                                                styles.blog_item__category
                                            }
                                            key={category.id}
                                        >
                                            {category.name}
                                        </p>
                                    );
                                })}
                            </div>
                        </Link>
                    </div>
                );
            })}
        </>
    );
};
