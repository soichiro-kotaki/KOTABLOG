import React from "react";

import { Presenter } from "./Presenter";

type Props = {
    postData: {
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
        category: {
            id: string;
            name: string;
        };
        author: {
            id: string;
            name: string;
            englishName: string;
            img: {
                url: string;
                width: number;
                height: number;
            };
            position: string;
            description: string;
        };
    };
};

export const PostPageTemplate: React.FC<Props> = (props) => {
    const { postData } = props;

    return <Presenter postData={postData} />;
};
