/**
 * layouts/Header
 * PresentationalComponent
 */
import Link from "next/link";

/* styles */
import styles from "./styles.module.scss";

export const Presenter = (props) => {
    const { handleOpenMenuModal } = props;
    return (
        <header className={styles.menu}>
            <img src="/seminar-logo.png" className={styles.logo} />
            <Link href="/">
                <h1 className={styles.seminar}>
                    <span className={styles.seminar_name}>長野県立大学 </span>{" "}
                    <span className={styles.seminar_name}>グローバル教養 </span>{" "}
                    <span className={styles.seminar_name}>萱津ゼミ</span>
                </h1>
            </Link>
            <ul className={styles.nav}>
                <li className={styles.link}>
                    <Link href="/">
                        {/* <span className={styles.subtitle}>News</span>新着情報 */}
                        <a>Home</a>
                    </Link>
                </li>
                <li className={styles.link}>
                    <Link href="/news">
                        {/* <span className={styles.subtitle}>News</span>新着情報 */}
                        <a>News</a>
                    </Link>
                </li>
                <li className={styles.link}>
                    <Link href="/about">
                        {/* <span className={styles.subtitle}>About</span>研究紹介 */}
                        <a>About</a>
                    </Link>
                </li>
                <li className={styles.link}>
                    <Link href="/member">
                        {/* <span className={styles.subtitle}>Member</span>
                        教員と学生
                     */}
                        <a>Member</a>
                    </Link>
                </li>
                <li className={styles.link}>
                    <Link href="/contact">
                        {/* <span className={styles.subtitle}>Contact</span>
                        お問い合わせ */}
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>

            {/* Hamburger menu for smartphone */}
            <div className={styles.menubar} onClick={handleOpenMenuModal}>
                <img src="/menu.png" />
            </div>
        </header>
    );
};
