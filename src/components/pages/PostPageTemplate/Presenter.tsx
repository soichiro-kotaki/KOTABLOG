import React from "react";
import Link from "next/link";
import Image from "next/image";

// コンポーネント
import { BaseLayout } from "../../layouts/BaseLayout";
import { Date } from "../../commons/atoms/Date";

// スタイリング
import styles from "./styles.module.scss";

// データ型
import { PostDataType } from "../../../types/Post/Post";
import { CategoriesType } from "../../../types/Categories";
import { data } from "cypress/types/jquery";

type Props = {
    postData: PostDataType;
    result: CategoriesType[];
};

export const Presenter: React.FC<Props> = (props) => {
    const { postData, result } = props;

    return (
        <BaseLayout>
            <article className={styles.container_post}>
                <div className={styles.content_post}>
                    <div className={styles.img_post}>
                        <Image
                            src={postData.img.url}
                            width={900}
                            height={450}
                        />
                    </div>
                    <h1 className={styles.title_post}>{postData.title}</h1>
                    {/* <div className={styles.categories_post}> */}
                    {postData.category.map((category) => {
                        return (
                            <div className={styles.categories_post}>
                                <Link href={`/categories/${category.id}`}>
                                    {category.name}
                                </Link>
                            </div>
                        );
                    })}
                    {/* <Link href={`/categories/${postData.category.id}`}>
                            {postData.category.name}
                        </Link> */}
                    {/* </div> */}
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
                <aside className={styles.nav}>
                    <h1 className={styles.author_title}>著者プロフィール</h1>
                    <div className={styles.author_img}>
                        <Image
                            src={postData.author.img.url}
                            width={120}
                            height={120}
                            objectFit={"cover"}
                            className={styles.img}
                        ></Image>
                    </div>
                    <p className={styles.author_name}>{postData.author.name}</p>
                    <p className={styles.author_text}>
                        {postData.author.englishName}
                    </p>
                    <p className={styles.author_text}>
                        {postData.author.position}
                    </p>
                    <p className={styles.author_text}>
                        {postData.author.description}
                    </p>
                    <a
                        href="https://github.com/soichiro-kotaki"
                        className={styles.author_link__github}
                    >
                        GitHubはこちら
                    </a>
                    <div className={styles.categories}>
                        <h2 className={styles.categories_title}>
                            カテゴリータグ一覧
                        </h2>
                        {result.map((data) => {
                            return (
                                <Link
                                    href={`/categories/${data.id}`}
                                    key={data.id}
                                >
                                    <p className={styles.categories_link}>
                                        {data.name}
                                    </p>
                                </Link>
                            );
                        })}
                    </div>
                </aside>
            </article>
        </BaseLayout>
    );
};
