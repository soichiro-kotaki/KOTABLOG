import React from "react";

import { Presenter } from "./Presenter";

type Props = {
    title: string;
};

export const MetaHead: React.FC<Props> = (props) => {
    const { title } = props;

    return <Presenter title={title} />;
};
