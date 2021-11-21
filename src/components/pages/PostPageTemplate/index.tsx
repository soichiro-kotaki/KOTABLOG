import React from "react";

import { Presenter } from "./Presenter";

// データ型
import { PostDataType } from "../../../types/Post/Post";

type Props = {
    postData: PostDataType;
};

export const PostPageTemplate: React.FC<Props> = (props) => {
    const { postData } = props;

    return <Presenter postData={postData} />;
};
