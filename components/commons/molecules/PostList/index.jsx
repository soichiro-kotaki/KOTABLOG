import { Presenter } from "./Presenter";

export const PostList = (props) => {
    const { allPostsData } = props;
    return <Presenter allPostsData={allPostsData} />;
};
