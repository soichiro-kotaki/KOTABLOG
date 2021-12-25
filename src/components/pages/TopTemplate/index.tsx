import React from "react";

import { Presenter } from "./Presenter";

// データ型
import { CategoriesType } from "../../../types/Categories";
import { PostDataType } from "src/types/Post/Post";

type Props = {
    allPostsData: {
        contents: PostDataType[];
    };
    result: CategoriesType[];
    archivesList: string[];
};

export const TopTemplate: React.FC<Props> = (props: Props) => {
    const { allPostsData, result, archivesList } = props;

    return (
        <Presenter
            allPostsData={allPostsData}
            result={result}
            archivesList={archivesList}
        />
    );
};
