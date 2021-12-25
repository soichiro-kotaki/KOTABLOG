import React from "react";

// API
import { getAllPostsData } from "src/apis/blog";

// コンポーネント
import { PostListTemplate } from "../components/pages/PostListTemplate";

// データ型
import { GetStaticProps } from "next";
import { PostDataType } from "src/types/Post/Post";

type Props = {
    allPostsData: {
        contents: PostDataType[];
    };
    totalCount: number;
};

const postList: React.FC<Props> = (props: Props) => {
    const { allPostsData, totalCount } = props;

    return (
        <PostListTemplate allPostsData={allPostsData} totalCount={totalCount} />
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const allPostsDataAndTotalCount = await getAllPostsData();

    return {
        props: {
            allPostsData: allPostsDataAndTotalCount.allPostsdata,
            totalCount: allPostsDataAndTotalCount.totalCount,
        },
    };
};

export default postList;
