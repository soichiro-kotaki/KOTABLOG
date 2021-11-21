import React from "react";

// コンポーネント
import Link from "next/link";
import { Date } from "../Date";

// スタイリング
import styles from "./styles.module.scss";

// データ型
import { AllPostDataType } from "../../../../types/Post/AllPost";

type Props = {
    allPostsData: AllPostDataType[];
    totalCount: number;
};

export const Presenter: React.FC<Props> = (props) => {
    const { allPostsData, totalCount } = props;

    return (
        <>
            {allPostsData.map((postData) => {
                return (
                    <li className={styles.post_item} key={postData.id}>
                        <div className={styles.post_time_stamp}>
                            <Date dateString={postData.date} />
                        </div>
                        <Link href={`/posts/${postData.id}`}>
                            <a className={styles.post_title}>
                                {postData.title}
                            </a>
                        </Link>
                    </li>
                );
            })}
        </>
    );
};
