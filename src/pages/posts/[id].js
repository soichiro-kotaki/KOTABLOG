import { BaseLayout } from "../../components/layouts/BaseLayout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { PostPageTemplate } from "../../components/pages/PostPageTemplate";

export default function post(props) {
    const { postData } = props;

    return <PostPageTemplate postData={postData} />;
}

export async function getStaticPaths() {
    // id としてとりうる値のリストを返す
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    // params.id を使用して、ブログの投稿に必要なデータを取得する
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}
