import React from "react";

import { Presenter } from "./Presenter";

// データ型
import { ImageType } from "../../../types/Image";
import { CategoriesType } from "../../../types/Categories";

type Props = {
    postData: {
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
    categoryId: string;
};

export const CategoriesPageTemplate: React.FC<Props> = (props) => {
    const { postData, categoryId } = props;

    return <Presenter postData={postData} categoryId={categoryId} />;
};
