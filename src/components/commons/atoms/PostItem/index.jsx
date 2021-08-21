import { Presenter } from "./Presenter";

export const PostItem = (props) => {
    const { allPostsData } = props;
    return <Presenter allPostsData={allPostsData} />;
};
