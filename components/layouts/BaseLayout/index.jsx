/**
 * layouts/BaseLayout
 * ContainerComponent
 */
import { useState, useCallback } from "react";

/* components */
import { Presenter } from "./Presenter";

export const BaseLayout = (props) => {
    const { children } = props;

    // State for MenuModal
    const [isMenuModalVisible, setIsMenuModalVisible] = useState(false);

    /**
     * Function for open MenuModal
     */
    const handleOpenMenuModal = useCallback(() => {
        setIsMenuModalVisible(true);
    }, []);

    /**
     *Function to close MenuModal
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
