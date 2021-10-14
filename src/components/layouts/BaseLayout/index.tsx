import React from "react";
import { useState, useCallback } from "react";
import { Presenter } from "./Presenter";

type Props = {
    children: React.ReactNode;
};

export const BaseLayout: React.FC<Props> = (props) => {
    const { children } = props;

    // メニューモーダルのstate
    const [isMenuModalVisible, setIsMenuModalVisible] = useState(false);

    // メニューモーダルを開く関数
    const handleOpenMenuModal = useCallback(() => {
        setIsMenuModalVisible(true);
    }, []);

    // メニューモーダルを閉じる関数
    const handleCloseMenuModal = useCallback(() => {
        setIsMenuModalVisible(false);
    }, []);

    return (
        <Presenter
            children={children}
            handleOpenMenuModal={handleOpenMenuModal}
            handleCloseMenuModal={handleCloseMenuModal}
            isMenuModalVisible={isMenuModalVisible}
        />
    );
};
