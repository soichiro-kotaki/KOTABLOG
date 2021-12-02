import React from "react";

// モジュール
import { client } from "../../lib/client";

// コンポーネント
import { CategoriesPageTemplate } from "../../components/pages/CategoriesPageTemplate";

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
    categoryId: string;
};

const post: React.FC<Props> = (props) => {
    const { postData, categoryId } = props;

    return (
        <CategoriesPageTemplate postData={postData} categoryId={categoryId} />
    );
};
export default post;

export const getStaticPaths: GetStaticPaths = async () => {
    // id (urlのパスに含まれるもの）としてとりうる値のリストを返す
    const data = await client.get({ endpoint: "categories" });

    //urlのパスとなるリストをmap関数で作る
    const paths = data.contents.map(
        (content: any) => `/categories/${content.id}`
    );

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    // params.category を使用して、投稿記事ページのレンダリングに必要なデータを取得する
    const postID = params;

    const postData = await client.get({
        endpoint: `posts`,
        queries: { filters: `category[contains]${postID.category}` },
    });

    // 各カテゴリのーページの一意タイトルテキストを抜き出すために、paramsで渡ってきたひとつのカテゴリーIDと一致するカテゴリーを抽出し、さらにそこからnameを抜き出す。
    const categoryId = postData.contents[0].category.filter(
        (element: any) => element.id === postID.category
    );

    return {
        props: {
            postData,
            categoryId: categoryId[0].name,
        },
    };
};
