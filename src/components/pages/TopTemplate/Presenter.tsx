import React from "react";

// コンポーネント
import { ArchivesCard } from "src/components/commons/molecules/ArchivesCard";
import { BaseLayout } from "src/components/layouts/BaseLayout";
import { BlogItem } from "src/components/commons/molecules/BlogItem";
import { CategoriesCard } from "src/components/commons/molecules/CategoriesCard";
import { ProfileCard } from "src/components/commons/molecules/ProfileCard";

// スタイリング
import styles from "./styles.module.scss";

// データ型
import { CategoriesType } from "src/types/Categories";
import { PostDataType } from "src/types/Post/Post";

type Props = {
    allPostsData: {
        contents: PostDataType[];
    };
    result: CategoriesType[];
    archivesList: string[];
};

export const Presenter: React.FC<Props> = (props: Props) => {
    const { allPostsData, result, archivesList } = props;

    return (
        <BaseLayout
            title="KOTABLOG ~大学生の技術ブログ~
        "
        >
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className={styles.post_title}>最新の記事一覧</h1>
                    <div className={styles.postlist}>
                        {allPostsData.contents.map((content) => {
                            return (
                                <BlogItem postData={content} key={content.id} />
                            );
                        })}
                    </div>
                </main>
                <aside className={styles.aside}>
                    <ProfileCard
                        profileData={allPostsData.contents[0].author}
                    />
                    <div className={styles.categories_wrapper}>
                        <CategoriesCard categories={result} />
                    </div>
                    <div className={styles.archives_wrapper}>
                        <ArchivesCard archivesList={archivesList} />
                    </div>
                </aside>
            </div>
        </BaseLayout>
    );
};
