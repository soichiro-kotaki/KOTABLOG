import React from "react";
import { GetStaticProps } from "next";

// モジュール
import { client } from "../lib/client";

// コンポーネント
import { TopTemplate } from "../components/pages/TopTemplate";

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

const Home: React.FC<Props> = (props) => {
    const { allPostsData, totalCount } = props;

    return <TopTemplate allPostsData={allPostsData} totalCount={totalCount} />;
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

export default Home;
