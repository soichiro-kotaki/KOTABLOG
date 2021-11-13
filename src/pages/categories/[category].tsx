import React from "react";

// モジュール
import { client } from "../../lib/client";

// コンポーネント
import { CategoriesPageTemplate } from "../../components/pages/CategoriesPageTemplate";
import { GetStaticPaths, GetStaticProps } from "next";

type Props = {
    postData: {
        contents: [
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
                category: {
                    id: string;
                    name: string;
                };
            }
        ];
    };
};

const post: React.FC<Props> = (props) => {
    const { postData } = props;

    return <CategoriesPageTemplate postData={postData} />;
};
export default post;

export const getStaticPaths: GetStaticPaths = async () => {
    // id (urlのパスに含まれるもの）としてとりうる値のリストを返す
    const data = await client.get({ endpoint: "posts" });

    const paths = data.contents.map(
        (content: any) => `/categories/${content.category.id}`
    );

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    // params.id を使用して、投稿記事ページのレンダリングに必要なデータを取得する
    const postID = params;
    // console.log(postID);

    const postData = await client.get({
        endpoint: `posts`,
        queries: { filters: `category[equals]${postID.category}` },
    });

    return {
        props: {
            postData,
        },
    };
};
