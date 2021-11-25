import React from "react";

import { Presenter } from "./Presenter";

type Props = {
    isMenuModalVisible: boolean;
    handleCloseMenuModal: () => void;
};

export const MenuModal: React.FC<Props> = (props) => {
    const { isMenuModalVisible, handleCloseMenuModal } = props;

    return (
        <Presenter
            isMenuModalVisible={isMenuModalVisible}
            handleCloseMenuModal={handleCloseMenuModal}
        />
    );
};
