import React from "react";
import Head from "next/head";

type Props = {
    title: string;
};

export const MetaHead: React.FC<Props> = (props: Props) => {
    const { title } = props;

    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/KOTABLOG-logo.png" />
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
