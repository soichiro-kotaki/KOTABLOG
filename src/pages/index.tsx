import React from "react";
import { GetStaticProps } from "next";

// モジュール
import { getSortedPostsData } from "../lib/posts";

// コンポーネント
import { TopTemplate } from "../components/pages/TopTemplate";

type Props = {
    allPostsData: [
        {
            id: string;
            title: string;
            date: string;
        }
    ];
};

const Home: React.VFC<Props> = (props) => {
    const { allPostsData } = props;

    return <TopTemplate allPostsData={allPostsData} />;
};

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
};

export default Home;
