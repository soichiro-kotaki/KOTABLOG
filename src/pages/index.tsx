import React from "react";

// モジュール
import { client } from "../lib/client";

// コンポーネント
import { TopTemplate } from "../components/pages/TopTemplate";

// データ型
import { GetStaticProps } from "next";
import { AuthorType } from "../types/Author";
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
                author: AuthorType;
            }
        ];
    };
    result: CategoriesType[];
    totalCount: number;
};

const Home: React.FC<Props> = (props) => {
    const { allPostsData, result, totalCount } = props;

    return (
        <TopTemplate
            allPostsData={allPostsData}
            result={result}
            totalCount={totalCount}
        />
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const data = await client.get({ endpoint: "posts" });

    const result = await client.get({
        endpoint: "categories",
        queries: { fields: "id,name" },
    });

    return {
        props: {
            allPostsData: data,
            result: result.contents,
            totalCount: data.totalCount,
        },
    };
};

export default Home;
