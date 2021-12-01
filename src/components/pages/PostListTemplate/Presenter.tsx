import React from "react";

// コンポーネント
import { BaseLayout } from "../../layouts/BaseLayout";
import { BlogItem } from "../../commons/molecules/BlogItem";

// スタイリング
import styles from "./styles.module.scss";

// データ型
import { ImageType } from "../../../types/Image";
import { CategoriesType } from "../../../types/Categories";

type Props = {
    allPostsData: {
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
    totalCount: number;
};

export const Presenter: React.FC<Props> = (props) => {
    const { allPostsData, totalCount } = props;

    return (
        <BaseLayout title="投稿記事一覧">
            <div className={styles.container}>
                <h1
                    className={styles.title}
                >{`投稿記事一覧 (全${totalCount}件)`}</h1>
                <div className={styles.postlist}>
                    <BlogItem postData={allPostsData} />
                </div>
            </div>
        </BaseLayout>
    );
};
