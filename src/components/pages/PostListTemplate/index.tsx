import React from "react";

import { Presenter } from "./Presenter";

type Props = {
    allPostsData: [
        {
            id: string;
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
            revisedAt: string;
            img: {
                url: string;
                height: string;
                width: string;
            };
            title: string;
            date: string;
            body: string;
            categories: [];
        }
    ];
    totalCount: number;
};

export const PostListTemplate: React.FC<Props> = (props) => {
    const { allPostsData, totalCount } = props;

    return <Presenter allPostsData={allPostsData} totalCount={totalCount} />;
};
