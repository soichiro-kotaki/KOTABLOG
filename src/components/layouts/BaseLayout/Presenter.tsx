import React from "react";

// コンポーネント
import { MetaHead } from "../MetaHead";
import { Header } from "../Header";
import { ToTopButton } from "../../commons/atoms/ToTopButton";
import { Footer } from "../Footer";
import { MenuModal } from "../../modals/MenuModal";

// スタイリング
import styles from "./styles.module.scss";

type Props = {
    handleOpenMenuModal: () => void;
    handleCloseMenuModal: () => void;
    isMenuModalVisible: boolean;
    children: React.ReactNode;
};

export const Presenter: React.FC<Props> = (props) => {
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
            <ToTopButton />
            <Footer />
            <MenuModal
                isMenuModalVisible={isMenuModalVisible}
                handleCloseMenuModal={handleCloseMenuModal}
            />
        </div>
    );
};
