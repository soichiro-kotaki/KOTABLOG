import React from "react";
import styles from "./styles.module.scss";
import { PostItem } from "../../atoms/PostItem";

type Props = {
    allPostsData: [
        {
            id: string;
            title: string;
            date: string;
        }
    ];
};

export const Presenter: React.FC<Props> = (props) => {
    const { allPostsData } = props;
    return (
        <ul className={styles.post_list}>
            <PostItem allPostsData={allPostsData} />
        </ul>
    );
};
