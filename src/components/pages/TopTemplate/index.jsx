import { Presenter } from "./Presenter";

export const TopTemplate = (props) => {
    const { allPostsData } = props;

    return <Presenter allPostsData={allPostsData} />;
};
