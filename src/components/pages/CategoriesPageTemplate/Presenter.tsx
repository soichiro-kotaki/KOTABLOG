import React from "react";

// コンポーネント
import { BaseLayout } from "src/components/layouts/BaseLayout";
import { BlogItem } from "src/components/commons/molecules/BlogItem";

// スタイリング
import styles from "./styles.module.scss";

// データ型
import { PostDataType } from "src/types/Post/Post";

type Props = {
    postsData: {
        contents: PostDataType[];
    };
    categoryId: string;
};

export const Presenter: React.FC<Props> = (props: Props) => {
    const { postsData, categoryId } = props;

    return (
        <BaseLayout title={`『${categoryId}』の記事一覧`}>
            <div className={styles.container_categories}>
                <h1 className={styles.blog_categories}>
                    『{categoryId}
                    』の記事一覧
                </h1>
                <div className={styles.blog_items__list}>
                    {postsData.contents.map((content) => {
                        return <BlogItem postData={content} key={content.id} />;
                    })}
                </div>
            </div>
        </BaseLayout>
    );
};
