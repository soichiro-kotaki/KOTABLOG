/**
 * layouts/BaseLayout
 * PresentationalComponent
 */
import React from "react";
/* components */
import { MetaHead } from "../MetaHead";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { MenuModal } from "../../modals/MenuModal";
/* styles */
import styles from "./styles.module.scss";

/**
 * presenter
 */
export const Presenter = (props) => {
    const {
        handleOpenMenuModal,
        children,
        isMenuModalVisible,
        handleCloseMenuModal,
    } = props;

    return (
        <div className={styles.container} id="top">
            <MetaHead />
            <Header handleOpenMenuModal={handleOpenMenuModal} />
            {children}
            <Footer />
            <MenuModal
                isMenuModalVisible={isMenuModalVisible}
                handleCloseMenuModal={handleCloseMenuModal}
            />
        </div>
    );
};
