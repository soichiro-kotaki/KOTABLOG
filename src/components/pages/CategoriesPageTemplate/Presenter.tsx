import React from "react";
import Link from "next/link";
import Image from "next/image";

// コンポーネント
import { BaseLayout } from "../../layouts/BaseLayout";
import { Date } from "../../commons/atoms/Date";

// スタイリング
import styles from "./styles.module.scss";

// データ型
import { ImageType } from "../../../types/Image";
import { CategoriesType } from "../../../types/Categories";

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
    categoryId: string;
};

export const Presenter: React.FC<Props> = (props) => {
    const { postData, categoryId } = props;
    console.log(categoryId);

    return (
        <BaseLayout>
            <div className={styles.container_categories}>
                <h1 className={styles.blog_categories}>
                    『{categoryId}
                    』の記事一覧
                </h1>
                <div className={styles.blog_items__list}>
                    {postData.contents.map((content) => {
                        return (
                            <div className={styles.blog_item} key={content.id}>
                                <Link href={`/posts/${content.id}`}>
                                    <div>
                                        <div
                                            className={
                                                styles.blog_item__wrapper___img
                                            }
                                        >
                                            <Image
                                                src={content.img.url}
                                                width={360}
                                                height={200}
                                                className={
                                                    styles.blog_item__img
                                                }
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
                                        {content.category.map((category) => {
                                            return (
                                                <p
                                                    className={
                                                        styles.blog_item__category
                                                    }
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
                </div>
            </div>
        </BaseLayout>
    );
};
