import { getSortedPostsData } from "../lib/posts";
import { PostListTemplate } from "../components/pages/PostListTemplate";

const postList = (props) => {
    const { allPostsData } = props;

    return <PostListTemplate allPostsData={allPostsData} />;
};
export default postList;

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}
