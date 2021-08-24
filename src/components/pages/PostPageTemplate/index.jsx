import { Presenter } from "./Presenter";

export const PostPageTemplate = (props) => {
    const { postData } = props;
    return <Presenter postData={postData} />;
};
