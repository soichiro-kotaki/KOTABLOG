import React from "react";

// モジュール
import { GetStaticProps } from "next";
import { client } from "../lib/client";

// コンポーネント
import { PostListTemplate } from "../components/pages/PostListTemplate";

// データ型
import { AllPostDataType } from "../types/Post/AllPost";

type Props = {
    allPostsData: AllPostDataType[];
    totalCount: number;
};

const postList: React.FC<Props> = (props) => {
    const { allPostsData, totalCount } = props;

    return (
        <PostListTemplate allPostsData={allPostsData} totalCount={totalCount} />
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const data = await client.get({ endpoint: "posts" });

    return {
        props: {
            allPostsData: data.contents,
            totalCount: data.totalCount,
        },
    };
};

export default postList;
