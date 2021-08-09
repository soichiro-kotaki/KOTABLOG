/**
 * layouts/Header
 * ContainerComponent
 * @package Component
 */
import React from "react";
import { useRouter } from "next/router";
/* components */
import { Presenter } from "./Presenter";

/**
 * container
 * @param props Props
 * @returns
 */
export const Header = (props) => {
    const { handleOpenSearchModal, handleOpenMenuModal } = props;

    return (
        <Presenter
        // pathName={router.pathname}
        // handleOpenSearchModal={handleOpenSearchModal}
        // handleOpenMenuModal={handleOpenMenuModal}
        />
    );
};
