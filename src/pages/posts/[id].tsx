import React from "react";

// モジュール
import { getAllPostIds, getPostData } from "../../lib/posts";

// コンポーネント
import { PostPageTemplate } from "../../components/pages/PostPageTemplate";
import { GetStaticPaths, GetStaticProps } from "next";

type Props = {
    postData: {
        id: string;
        contentHtml: string;
        title: string;
        date: string;
    };
};

const post: React.FC<Props> = (props) => {
    const { postData } = props;

    return <PostPageTemplate postData={postData} />;
};
export default post;

export const getStaticPaths: GetStaticPaths = async () => {
    // id としてとりうる値のリストを返す
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    // params.id を使用して、ブログの投稿に必要なデータを取得する
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
};
