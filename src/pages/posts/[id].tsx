import React from "react";

// モジュール
import { client } from "../../lib/client";
import cheerio from "cheerio";

// コンポーネント
import { PostPageTemplate } from "../../components/pages/PostPageTemplate";
import { GetStaticPaths, GetStaticProps } from "next";

type Props = {
    postData: {
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
        author: {
            id: string;
            name: string;
            englishName: string;
            img: {
                url: string;
                width: number;
                height: number;
            };
            position: string;
            description: string;
        };
    };
};

const post: React.FC<Props> = (props) => {
    const { postData } = props;
    console.log(postData);

    return <PostPageTemplate postData={postData} />;
};
export default post;

export const getStaticPaths: GetStaticPaths = async () => {
    // id (urlのパスに含まれるもの）としてとりうる値のリストを返す
    const data = await client.get({ endpoint: "posts" });

    const paths = data.contents.map((content: any) => `/posts/${content.id}`);

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    // params.id を使用して、投稿記事ページのレンダリングに必要なデータを取得する
    const postID = params.id;

    const postData = await client.get({ endpoint: `posts/${postID}` });

    return {
        props: {
            postData,
        },
    };
};
