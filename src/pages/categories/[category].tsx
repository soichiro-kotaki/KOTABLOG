import React from "react";

// API
import { getPostsDataByCategory } from "src/apis/blog";

// モジュール
import { client } from "../../lib/client";

// コンポーネント
import { CategoriesPageTemplate } from "../../components/pages/CategoriesPageTemplate";

// データ型
import { GetStaticPaths, GetStaticProps } from "next";
import { PostDataType } from "src/types/Post/Post";

type Props = {
    postsData: {
        contents: PostDataType[];
    };
    categoryId: string;
};

const categories: React.FC<Props> = (props) => {
    const { postsData, categoryId } = props;

    return (
        <CategoriesPageTemplate postsData={postsData} categoryId={categoryId} />
    );
};
export default categories;

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
    const categoryID = params.category;

    const postsData = await getPostsDataByCategory(categoryID as string);

    // 各カテゴリのーページの一意タイトルテキストを抜き出すために、paramsで渡ってきたひとつのカテゴリーIDと一致するカテゴリーを抽出し、さらにそこからnameを抜き出す。
    const categoryId = postsData.contents[0].category.filter(
        (element: any) => element.id === categoryID
    );

    return {
        props: {
            postsData,
            categoryId: categoryId[0].name,
        },
    };
};
