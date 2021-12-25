import React from "react";

// APi
import { getPostDataDetail } from "src/apis/blog";
import { getAllCategories } from "src/apis/category";
import { getAllArchives } from "src/apis/archive";

// モジュール
import { client } from "../../lib/client";

// コンポーネント
import { PostPageTemplate } from "../../components/pages/PostPageTemplate";

// データ型
import { GetStaticPaths, GetStaticProps } from "next";
import { PostDataType } from "../../types/Post/Post";
import { CategoriesType } from "../../types/Categories";

type Props = {
    postData: PostDataType;
    result: CategoriesType[];
    archivesList: string[];
};

const post: React.FC<Props> = (props: Props) => {
    const { postData, result, archivesList } = props;

    return (
        <PostPageTemplate
            postData={postData}
            result={result}
            archivesList={archivesList}
        />
    );
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

    const postData = await getPostDataDetail(postID as string);
    const allCategoriesList = await getAllCategories();
    const allArchivesList = await getAllArchives();

    return {
        props: {
            postData,
            result: allCategoriesList,
            archivesList: allArchivesList,
        },
    };
};
