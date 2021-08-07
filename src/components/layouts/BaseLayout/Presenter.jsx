/**
 * layouts/BaseLayout
 * PresentationalComponent
 */
import React from "react";
/* components */
import { MetaHead } from "../MetaHead";
import { Header } from "../Header";
import { Footer } from "../Footer";
// import { MenuModal } from "@/components/modals/MenuModal";
/* styles */
import styles from "./styles.module.scss";

/**
 * presenter
 */
export const Presenter = (props) => {
    return (
        <div className={styles.container} id="top">
            <MetaHead />
            <Header />
            {props.children}
            <Footer />
        </div>
    );
};
