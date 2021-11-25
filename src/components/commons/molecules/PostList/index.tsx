import React from "react";

import { Presenter } from "./Presenter";

// データ型
import { AllPostDataType } from "../../../../types/Post/AllPost";

type Props = {
    allPostsData: AllPostDataType[];
    totalCount: number;
};

export const PostList: React.FC<Props> = (props) => {
    const { allPostsData, totalCount } = props;

    return <Presenter allPostsData={allPostsData} totalCount={totalCount} />;
};
