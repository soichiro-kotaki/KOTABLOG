import React from "react";

import { Presenter } from "./Presenter";

type Props = {
    handleOpenMenuModal: () => void;
};

export const Header: React.FC<Props> = (props) => {
    const { handleOpenMenuModal } = props;

    return <Presenter handleOpenMenuModal={handleOpenMenuModal} />;
};
