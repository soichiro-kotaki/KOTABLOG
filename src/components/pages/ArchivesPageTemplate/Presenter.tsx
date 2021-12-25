import React from "react";

// コンポーネント
import { BaseLayout } from "src/components/layouts/BaseLayout";
import { ArchiveDate } from "src/components/commons/atoms/ArchiveDate";
import { BlogItem } from "src/components/commons/molecules/BlogItem";

// スタイリング
import styles from "./styles.module.scss";

// データ型
import { PostDataType } from "src/types/Post/Post";

type Props = {
    postsData: {
        contents: PostDataType[];
    };
    archiveDate: string;
};

export const Presenter: React.FC<Props> = (props: Props) => {
    const { postsData, archiveDate } = props;

    return (
        <BaseLayout title={`『${archiveDate.replace("-", "年")}月』の記事一覧`}>
            <div className={styles.container_archives}>
                <div className={styles.blog_archives}>
                    <ArchiveDate archiveDate={archiveDate} />
                    の記事一覧
                </div>
                <div className={styles.blog_items__list}>
                    {postsData.contents.map((content) => {
                        return <BlogItem postData={content} key={content.id} />;
                    })}
                </div>
            </div>
        </BaseLayout>
    );
};
