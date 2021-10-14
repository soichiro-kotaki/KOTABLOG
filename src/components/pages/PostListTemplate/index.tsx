import React from "react";

import { Presenter } from "./Presenter";

type Props = {
    allPostsData: [
        {
            id: string;
            title: string;
            date: string;
        }
    ];
};

export const PostListTemplate: React.FC<Props> = (props) => {
    const { allPostsData } = props;
    return <Presenter allPostsData={allPostsData} />;
};
