import React from "react";

// モジュール
import { client } from "../lib/client";

// コンポーネント
import { TopTemplate } from "../components/pages/TopTemplate";

// データ型
import { GetStaticProps } from "next";
import { AllPostDataType } from "../types/Post/AllPost";

type Props = {
    allPostsData: AllPostDataType[];
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
