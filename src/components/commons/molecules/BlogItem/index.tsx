import React from "react";
import Link from "next/link";
import Image from "next/image";

// コンポーネント
import { Date } from "src/components/commons/atoms/Date";

// スタイリング
import styles from "./styles.module.scss";

// データ型
import { PostDataType } from "src/types/Post/Post";

type Props = {
    postData: PostDataType;
};

export const BlogItem: React.FC<Props> = (props) => {
    const { postData } = props;

    return (
        <>
            <div className={styles.blog_item} key={postData.id}>
                <Link href={`/posts/${postData.id}`}>
                    <div>
                        <div className={styles.blog_item__wrapper___img}>
                            <Image
                                src={postData.img.url}
                                width={360}
                                height={200}
                                className={styles.blog_item__img}
                            />
                        </div>
                        <div className={styles.blog_item__metadata}>
                            <div className={styles.blog_item__date}>
                                投稿日：
                                <Date dateString={postData.date} />
                            </div>
                        </div>
                        <h2 className={styles.blog_item__title}>
                            {postData.title}
                        </h2>
                        {postData.category.map((category) => {
                            return (
                                <p
                                    className={styles.blog_item__category}
                                    key={category.id}
                                >
                                    {category.name}
                                </p>
                            );
                        })}
                    </div>
                </Link>
            </div>
        </>
    );
};
