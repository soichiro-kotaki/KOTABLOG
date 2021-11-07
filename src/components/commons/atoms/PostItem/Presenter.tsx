import React from "react";
import Link from "next/link";

// コンポーネント
import { Date } from "../Date";

import styles from "./styles.module.scss";

type Props = {
    allPostsData: [
        {
            id: string;
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
            revisedAt: string;
            img: {
                url: string;
                height: string;
                width: string;
            };
            title: string;
            date: string;
            body: string;
            categories: [];
        }
    ];
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
