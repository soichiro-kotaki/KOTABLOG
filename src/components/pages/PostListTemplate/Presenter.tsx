import React from "react";

// コンポーネント
import { BaseLayout } from "../../layouts/BaseLayout";
import { PostList } from "../../commons/molecules/PostList";
import { Title } from "../../commons/atoms/Title";

// スタイリング
import styles from "./styles.module.scss";

type Props = {
    allPostsData: [
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
            categories: [];
        }
    ];
    totalCount: number;
};

export const Presenter: React.FC<Props> = (props) => {
    const { allPostsData, totalCount } = props;

    return (
        <BaseLayout>
            <div className={styles.container}>
                <Title title="News" subtitle="投稿記事一覧" />
                <PostList allPostsData={allPostsData} totalCount={totalCount} />
            </div>
        </BaseLayout>
    );
};
