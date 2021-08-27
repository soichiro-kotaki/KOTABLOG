import { Presenter } from "./Presenter";

export const PostListTemplate = (props) => {
    const { allPostsData } = props;
    return <Presenter allPostsData={allPostsData} />;
};
