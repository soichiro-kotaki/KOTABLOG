import React from "react";

// モジュール
import { client } from "../../lib/client";

// コンポーネント
import { ArchivesPageTemplate } from "../../components/pages/ArchivesPageTemplate";

// データ型
import { GetStaticPaths, GetStaticProps } from "next";
import { ImageType } from "../../types/Image";
import { CategoriesType } from "../../types/Categories";

type Props = {
    postData: {
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
    archiveDate: string;
};

const post: React.FC<Props> = (props) => {
    const { postData, archiveDate } = props;
    console.log(archiveDate);

    return (
        <ArchivesPageTemplate postData={postData} archiveDate={archiveDate} />
    );
};
export default post;

export const getStaticPaths: GetStaticPaths = async () => {
    // 1ヶ月毎（2021-08~)の投稿記事アーカイブのパスを生成
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

    const paths = sortedArchiveList.map((term: any) => `/archive/${term}`);

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    // params.archiveを使用して、各アーカイブの投稿記事ページのレンダリングに必要なデータを取得
    const archiveDate = params.archive;
    console.log(archiveDate);

    const postData = await client.get({
        endpoint: `posts`,
        queries: { filters: `date[contains]${archiveDate}` },
    });

    return {
        props: {
            postData,
            archiveDate,
        },
    };
};
