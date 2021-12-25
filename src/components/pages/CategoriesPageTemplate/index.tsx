import React from "react";

import { Presenter } from "./Presenter";

// データ型
import { PostDataType } from "src/types/Post/Post";

type Props = {
    postsData: {
        contents: PostDataType[];
    };
    categoryId: string;
};

export const CategoriesPageTemplate: React.FC<Props> = (props: Props) => {
    const { postsData, categoryId } = props;

    return <Presenter postsData={postsData} categoryId={categoryId} />;
};
