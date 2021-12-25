import React from "react";

import { Presenter } from "./Presenter";

// データ型
import { PostDataType } from "src/types/Post/Post";

type Props = {
    postsData: {
        contents: PostDataType[];
    };
    archiveDate: string;
};

export const ArchivesPageTemplate: React.FC<Props> = (props: Props) => {
    const { postsData, archiveDate } = props;

    return <Presenter postsData={postsData} archiveDate={archiveDate} />;
};
