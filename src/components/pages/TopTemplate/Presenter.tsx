import React from "react";

// コンポーネント
import { BaseLayout } from "../../layouts/BaseLayout";
import { BlogItem } from "../../commons/molecules/BlogItem";
import { CategoriesCard } from "../../commons/molecules/CategoriesCard";
import { ProfileCard } from "../../commons/molecules/ProfileCard";

// ライブラリ
// import GoogleMapReact from "google-map-react";

// スタイリング
import styles from "./styles.module.scss";

// データ型
import { AuthorType } from "../../../types/Author";
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
                author: AuthorType;
            }
        ];
    };
    result: CategoriesType[];
    totalCount: number;
};

export const Presenter: React.FC<Props> = (props) => {
    const { allPostsData, result, totalCount } = props;

    return (
        <BaseLayout
            title="KOTABLOG ~大学生の技術ブログ~
        "
        >
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className={styles.post_title}>最新の記事一覧</h1>
                    <div className={styles.postlist}>
                        <BlogItem postData={allPostsData} />
                    </div>
                </main>
                <aside className={styles.aside}>
                    <ProfileCard
                        profileData={allPostsData.contents[0].author}
                    />
                    <div className={styles.categories_wrapper}>
                        <CategoriesCard categories={result} />
                    </div>
                </aside>
            </div>
        </BaseLayout>
    );
};
