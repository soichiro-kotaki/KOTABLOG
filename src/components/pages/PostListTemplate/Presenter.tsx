import React from "react";

// コンポーネント
import { BaseLayout } from "../../layouts/BaseLayout";
import { PostList } from "../../commons/molecules/PostList";
import { Title } from "../../commons/atoms/Title";

// スタイリング
import styles from "./styles.module.scss";

// データ型
import { AllPostDataType } from "../../../types/Post/AllPost";

type Props = {
    allPostsData: AllPostDataType[];
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
