import React from "react";

// API
import { getPostsDataByArchive } from "src/apis/blog";

// モジュール
import { client } from "src/lib/client";

// コンポーネント
import { ArchivesPageTemplate } from "src/components/pages/ArchivesPageTemplate";

// データ型
import { GetStaticPaths, GetStaticProps } from "next";
import { PostDataType } from "src/types/Post/Post";

type Props = {
    postsData: {
        contents: PostDataType[];
    };
    archiveDate: string;
};

const archive: React.FC<Props> = (props: Props) => {
    const { postsData, archiveDate } = props;

    return (
        <ArchivesPageTemplate postsData={postsData} archiveDate={archiveDate} />
    );
};
export default archive;

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

    const paths = sortedArchiveList.map((term: any) => `/archive/${term}`);

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    // params.archiveを使用して、各アーカイブの投稿記事ページのレンダリングに必要なデータを取得
    const archiveDate = params.archive;

    const postsData = await getPostsDataByArchive(archiveDate as string);

    return {
        props: {
            postsData,
            archiveDate,
        },
    };
};
