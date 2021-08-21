/**
 * layouts/MetaHead
 * PresentationalComponent
 * @package Component
 */
import React from "react";
import Head from "next/head";

/**
 * presenter
 * @param props Props
 * @returns
 */
export const Presenter = (props) => {
    return (
        <Head>
            <title>長野県立大学 萱津ゼミ</title>
            <link rel="icon" href="/seminar-logo.png" />
            <link
                href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Noto+Sans+JP:wght@400;700&display=swap"
                rel="stylesheet"
            ></link>
            <link
                href="https://fonts.googleapis.com/css?family=Caveat"
                rel="stylesheet"
            />
        </Head>
    );
};
