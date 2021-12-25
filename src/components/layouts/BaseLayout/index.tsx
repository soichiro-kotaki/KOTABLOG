import React from "react";
import { useState, useCallback } from "react";
import { Presenter } from "./Presenter";

type Props = {
    title: string;
    children: React.ReactNode;
};

export const BaseLayout: React.FC<Props> = (props: Props) => {
    const { title, children } = props;

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
            title={title}
            children={children}
            handleOpenMenuModal={handleOpenMenuModal}
            handleCloseMenuModal={handleCloseMenuModal}
            isMenuModalVisible={isMenuModalVisible}
        />
    );
};
