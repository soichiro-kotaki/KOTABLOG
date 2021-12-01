import React from "react";

// コンポーネント
import { BaseLayout } from "../../layouts/BaseLayout";
import { ArchiveDate } from "../../commons/atoms/ArchiveDate";
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
    archiveDate: string;
};

export const Presenter: React.FC<Props> = (props) => {
    const { postData, archiveDate } = props;

    return (
        <BaseLayout title={`『${archiveDate.replace("-", "年")}月』の記事一覧`}>
            <div className={styles.container_archives}>
                <div className={styles.blog_archives}>
                    <ArchiveDate archiveDate={archiveDate} />
                    の記事一覧
                </div>
                <div className={styles.blog_items__list}>
                    <BlogItem postData={postData} />
                </div>
            </div>
        </BaseLayout>
    );
};
