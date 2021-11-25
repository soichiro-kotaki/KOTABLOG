import React from "react";

// モジュール
import { client } from "../lib/client";

// コンポーネント
import { PostListTemplate } from "../components/pages/PostListTemplate";

// データ型
import { GetStaticProps } from "next";
import { ImageType } from "../types/Image";
import { CategoriesType } from "../types/Categories";

type Props = {
    allPostsData: {
        contents: [
            {
                id: string;
                createdAt: string;
                updatedAt: string;
                publishedAt: string;
                revisedAt: string;
                img: ImageType;
                title: string;
                date: string;
                body: string;
                category: CategoriesType[];
            }
        ];
    };
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
            allPostsData: data,
            totalCount: data.totalCount,
        },
    };
};

export default postList;
