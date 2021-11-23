import React from "react";

import { Presenter } from "./Presenter";

// データ型
import { ImageType } from "../../../types/Image";
import { CategoriesType } from "../../../types/Categories";

type Props = {
    allPostsData: {
        contents: [
            {
                id: string;
                createdAt: string;
                updatedAt: string;
                publishedAt: string;
                revisedAt: string;
                img: ImageType;
                title: string;
                date: string;
                body: string;
                category: CategoriesType[];
            }
        ];
    };
    totalCount: number;
};

export const PostListTemplate: React.FC<Props> = (props) => {
    const { allPostsData, totalCount } = props;

    return <Presenter allPostsData={allPostsData} totalCount={totalCount} />;
};
