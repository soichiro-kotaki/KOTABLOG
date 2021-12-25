import React from "react";

import { Presenter } from "./Presenter";

// データ型
import { PostDataType } from "src/types/Post/Post";

type Props = {
    allPostsData: {
        contents: PostDataType[];
    };
    totalCount: number;
};

export const PostListTemplate: React.FC<Props> = (props: Props) => {
    const { allPostsData, totalCount } = props;

    return <Presenter allPostsData={allPostsData} totalCount={totalCount} />;
};
