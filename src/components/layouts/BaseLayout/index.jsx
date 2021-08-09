/**
 * layouts/BaseLayout
 * ContainerComponent
 */
import { useState, useCallback } from "react";

/* components */
import { Presenter } from "./Presenter";
/* types */

export const BaseLayout = (props) => {
    const { children } = props;
    // MenuModal用のstate
    const [isMenuModalVisible, setIsMenuModalVisible] = useState(false);

    /**
     * MenuModalを開く処理
     */
    const handleOpenMenuModal = useCallback(() => {
        setIsMenuModalVisible(true);
    }, []);

    /**
     * MenuModalを閉じる処理
     */
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
