import React from "react";
import styles from "./styles.module.scss";
import { PostItem } from "../../atoms/PostItem";

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
        <ul className={styles.post_list}>
            <PostItem allPostsData={allPostsData} totalCount={totalCount} />
        </ul>
    );
};
