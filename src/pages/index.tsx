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
    archivesList: string[];
};

const Home: React.FC<Props> = (props) => {
    const { allPostsData, result, archivesList } = props;

    return (
        <TopTemplate
            allPostsData={allPostsData}
            result={result}
            archivesList={archivesList}
        />
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const data = await client.get({ endpoint: "posts" });

    const result = await client.get({
        endpoint: "categories",
        queries: { fields: "id,name" },
    });

    const allDateList = await client.get({
        endpoint: "posts",
        queries: { fields: `date` },
    });
    const archiveList = allDateList.contents.map((content) => {
        const extractedDateList = content.date.substr(0, 7);

        return extractedDateList;
    });
    const sortedArchiveList = Array.from(new Set(archiveList));
    console.log(sortedArchiveList);

    return {
        props: {
            allPostsData: data,
            result: result.contents,
            archivesList: sortedArchiveList,
        },
    };
};

export default Home;
