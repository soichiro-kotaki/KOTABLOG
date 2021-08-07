/**
 * layouts/BaseLayout
 * ContainerComponent
 */
import React from "react";

/* components */
import { Presenter } from "./Presenter";
/* types */

export const BaseLayout = (props) => {
    // const { children } = props;
    // // MenuModal用のstate
    // const [isMenuModalVisible, setIsMenuModalVisible] = React.useState(false);

    // /**
    //  * SearchModalを開く処理
    //  */
    // const handleOpenMenuModal = () => {
    //     setIsMenuModalVisible(true);
    // };

    // /**
    //  * SearchModalを閉じる処理
    //  */
    // const handleCloseMenuModal = () => {
    //     setIsMenuModalVisible(false);
    // };

    return <Presenter children={props.children} />;
};
