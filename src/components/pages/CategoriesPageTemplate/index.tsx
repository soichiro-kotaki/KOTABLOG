import React from "react";

import { Presenter } from "./Presenter";

type Props = {
    postData: {
        contents: [
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
                category: {
                    id: string;
                    name: string;
                };
            }
        ];
    };
};

export const CategoriesPageTemplate: React.FC<Props> = (props) => {
    const { postData } = props;

    return <Presenter postData={postData} />;
};
