import React from "react";

// コンポーネント
import { BaseLayout } from "src/components/layouts/BaseLayout";
import { BlogItem } from "src/components/commons/molecules/BlogItem";

// スタイリング
import styles from "./styles.module.scss";

// データ型
import { PostDataType } from "src/types/Post/Post";

type Props = {
    allPostsData: {
        contents: PostDataType[];
    };
    totalCount: number;
};

export const Presenter: React.FC<Props> = (props: Props) => {
    const { allPostsData, totalCount } = props;

    return (
        <BaseLayout title="投稿記事一覧">
            <div className={styles.container}>
                <h1
                    className={styles.title}
                >{`投稿記事一覧 (全${totalCount}件)`}</h1>
                <div className={styles.postlist}>
                    {allPostsData.contents.map((content) => {
                        return <BlogItem postData={content} key={content.id} />;
                    })}
                </div>
            </div>
        </BaseLayout>
    );
};
