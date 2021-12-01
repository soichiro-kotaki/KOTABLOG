import React from "react";
import Link from "next/link";
import Image from "next/image";

// コンポーネント
import { BaseLayout } from "../../layouts/BaseLayout";
import { Date } from "../../commons/atoms/Date";
import { BlogItem } from "../../commons/molecules/BlogItem";

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

    return (
        <BaseLayout title={`『${categoryId}』の記事一覧`}>
            <div className={styles.container_categories}>
                <h1 className={styles.blog_categories}>
                    『{categoryId}
                    』の記事一覧
                </h1>
                <div className={styles.blog_items__list}>
                    <BlogItem postData={postData} />
                </div>
            </div>
        </BaseLayout>
    );
};
