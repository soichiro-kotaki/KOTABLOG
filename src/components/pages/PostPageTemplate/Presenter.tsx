import React from "react";
import Link from "next/link";
import Image from "next/image";

// コンポーネント
import { BaseLayout } from "src/components/layouts/BaseLayout";
import { Date } from "src/components/commons/atoms/Date";
import { ProfileCard } from "src/components/commons/molecules/ProfileCard";
import { CategoriesCard } from "src/components/commons/molecules/CategoriesCard";
import { ArchivesCard } from "src/components/commons/molecules/ArchivesCard";

// スタイリング
import styles from "./styles.module.scss";

// データ型
import { PostDataType } from "src/types/Post/Post";
import { CategoriesType } from "src/types/Categories";

type Props = {
    postData: PostDataType;
    result: CategoriesType[];
    archivesList: string[];
};

export const Presenter: React.FC<Props> = (props: Props) => {
    const { postData, result, archivesList } = props;

    return (
        <BaseLayout title={postData.title}>
            <article className={styles.container_post}>
                <div className={styles.content_post}>
                    <div className={styles.img_post}>
                        <Image
                            src={postData.img.url}
                            width={900}
                            height={450}
                            className={styles.img}
                        />
                    </div>
                    <h1 className={styles.title_post}>{postData.title}</h1>
                    {postData.category.map((category) => {
                        return (
                            <div
                                className={styles.categories_post}
                                key={category.id}
                            >
                                <Link href={`/categories/${category.id}`}>
                                    {category.name}
                                </Link>
                            </div>
                        );
                    })}
                    <p className={styles.date_post}>
                        投稿日： <Date dateString={postData.date} /> 更新日：
                        <Date dateString={postData.updatedAt} />
                    </p>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: postData.body,
                        }}
                        className={styles.text_post}
                    />
                </div>
                <aside className={styles.aside}>
                    <ProfileCard profileData={postData.author} />
                    <div className={styles.categories_wrapper}>
                        <CategoriesCard categories={result} />
                    </div>
                    <div className={styles.archives_wrapper}>
                        <ArchivesCard archivesList={archivesList} />
                    </div>
                </aside>
            </article>
        </BaseLayout>
    );
};
