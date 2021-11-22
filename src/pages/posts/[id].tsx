import React from "react";

// モジュール
import { client } from "../../lib/client";
import cheerio from "cheerio";

// コンポーネント
import { PostPageTemplate } from "../../components/pages/PostPageTemplate";
import { GetStaticPaths, GetStaticProps } from "next";

// データ型
import { PostDataType } from "../../types/Post/Post";
import { CategoriesType } from "../../types/Categories";

type Props = {
    postData: PostDataType;
    result: CategoriesType[];
};

const post: React.FC<Props> = (props) => {
    const { postData, result } = props;

    return <PostPageTemplate postData={postData} result={result} />;
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

    const result = await client.get({
        endpoint: "categories",
        queries: { fields: "id,name" },
    });

    return {
        props: {
            postData,
            result: result.contents,
        },
    };
};
