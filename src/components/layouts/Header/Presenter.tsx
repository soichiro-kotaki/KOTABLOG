import React from "react";
import Link from "next/link";

// スタイリング
import styles from "./styles.module.scss";

type Props = {
    handleOpenMenuModal: () => void;
};

export const Presenter: React.FC<Props> = (props: Props) => {
    const { handleOpenMenuModal } = props;

    return (
        <header className={styles.menu}>
            <img src="/KOTABLOG-logo.png" className={styles.logo} />
            <Link href="/">
                <h1 className={styles.seminar}>
                    <span className={styles.seminar_name}>KOTABLOG </span>{" "}
                    <span className={styles.seminar_name}>~大学生の </span>{" "}
                    <span className={styles.seminar_name}>技術ブログ~</span>
                </h1>
            </Link>
            <ul className={styles.nav}>
                <li className={styles.link}>
                    <Link href="/">
                        <a>ホーム</a>
                    </Link>
                </li>
                <li className={styles.link}>
                    <Link href="/postList">
                        <a>記事一覧</a>
                    </Link>
                </li>
                <li className={styles.link}>
                    <Link href="/posts/g_z5bpo6br">
                        <a>このブログについて</a>
                    </Link>
                </li>
                <li className={styles.link}>
                    <Link href="/posts/ukvqo81rgwj4">
                        <a>プロフィール</a>
                    </Link>
                </li>
            </ul>

            <div className={styles.menubar} onClick={handleOpenMenuModal}>
                <img src="/menu.png" />
            </div>
        </header>
    );
};
