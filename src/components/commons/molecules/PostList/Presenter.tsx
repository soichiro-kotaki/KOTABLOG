import React from "react";

// コンポーネント
import { PostItem } from "../../atoms/PostItem";

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
    console.log(props);
    return (
        <ul className={styles.post_list}>
            <PostItem allPostsData={allPostsData} totalCount={totalCount} />
        </ul>
    );
};
