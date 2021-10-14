import React from "react";

import { Presenter } from "./Presenter";

type Props = {
    postData: {
        id: string;
        contentHtml: string;
        title: string;
        date: string;
    };
};

export const PostPageTemplate: React.FC<Props> = (props) => {
    const { postData } = props;

    return <Presenter postData={postData} />;
};
