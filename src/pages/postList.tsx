import React from "react";
import { GetStaticProps } from "next";

// モジュール
import { getSortedPostsData } from "../lib/posts";

// コンポーネント
import { PostListTemplate } from "../components/pages/PostListTemplate";

type Props = {
    allPostsData: [
        {
            id: string;
            title: string;
            date: string;
        }
    ];
};

const postList: React.FC<Props> = (props) => {
    const { allPostsData } = props;

    return <PostListTemplate allPostsData={allPostsData} />;
};

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
};

export default postList;
