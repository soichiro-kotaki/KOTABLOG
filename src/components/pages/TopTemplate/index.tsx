import React from "react";

import { Presenter } from "./Presenter";

// データ型
import { AuthorType } from "../../../types/Author";
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
                author: AuthorType;
            }
        ];
    };
    result: CategoriesType[];
    archivesList: string[];
};

export const TopTemplate: React.FC<Props> = (props) => {
    const { allPostsData, result, archivesList } = props;

    return (
        <Presenter
            allPostsData={allPostsData}
            result={result}
            archivesList={archivesList}
        />
    );
};
