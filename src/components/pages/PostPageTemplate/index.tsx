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
        categories: [];
    };
};

export const PostPageTemplate: React.FC<Props> = (props) => {
    const { postData } = props;

    return <Presenter postData={postData} />;
};
