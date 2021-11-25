import React from "react";

import { Presenter } from "./Presenter";

// データ型
import { PostDataType } from "../../../types/Post/Post";
import { CategoriesType } from "../../../types/Categories";

type Props = {
    postData: PostDataType;
    result: CategoriesType[];
};

export const PostPageTemplate: React.FC<Props> = (props) => {
    const { postData, result } = props;

    return <Presenter postData={postData} result={result} />;
};
