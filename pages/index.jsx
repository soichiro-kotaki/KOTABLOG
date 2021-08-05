import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Link as Scroll } from "react-scroll";

import Post from "../components/Post";
import About from "../components/About";
import Member from "../components/Member";
import Contact from "../components/Contact";

export default function Home() {
    return (
        <div className="container" id="top">
            <Head>
                <title>長野県立大学 萱津ゼミ</title>
                <link rel="icon" href="/seminar-logo.png" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Noto+Sans+JP:wght@400;700&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <header className="nav-bar">
                <img src="/seminar-logo.png" className="seminar-logo" />
                <h1 className="seminar-name">
                    長野県立大学 グローバル教養 萱津ゼミ{" "}
                </h1>
                <ul className="nav">
                    <li className="nav-link">
                        <Scroll
                            to="news"
                            offset={-130}
                            duration={600}
                            smooth={true}
                        >
                            <span className="nav-subtitle">News</span>新着情報
                        </Scroll>
                    </li>
                    <li className="nav-link">
                        <Scroll
                            to="about"
                            offset={-90}
                            duration={600}
                            smooth={true}
                        >
                            <span className="nav-subtitle">About</span>研究紹介
                        </Scroll>
                    </li>
                    <li className="nav-link">
                        <Scroll
                            to="member"
                            offset={-80}
                            duration={600}
                            smooth={true}
                        >
                            <span className="nav-subtitle">Member</span>
                            教員と学生
                        </Scroll>
                    </li>
                    <li className="nav-link">
                        <Scroll to="contact" duration={600} smooth={true}>
                            <span className="nav-subtitle">Contact</span>
                            お問い合わせ
                        </Scroll>
                    </li>
                </ul>
            </header>

            <main>
                <div className="top">
                    <Image
                        className="top-image"
                        loading="lazy"
                        src="/top1.jpg"
                        layout={"responsive"}
                        width={900}
                        height={600}
                    ></Image>
                    <h2 className="description">IT × 教育</h2>
                </div>
                <Scroll
                    to="top"
                    smooth={true}
                    duration={800}
                    className="to-top-button"
                >
                    <div className="to-top-button">
                        <svg
                            className="to-top-button-icon"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            width="50px"
                            height="50px"
                            viewBox="0 0 24 24"
                            stroke="#1d2f5f"
                            strokeWidth="2.88"
                            strokeLinecap="square"
                            strokeLinejoin="miter"
                            fill="none"
                            color="#1d2f5f"
                        >
                            {" "}
                            <title id="chevronUpIconTitle">
                                Chevron Up
                            </title>{" "}
                            <polyline points="6 14 12 8 18 14 18 14" />{" "}
                        </svg>
                    </div>
                </Scroll>

                <Post />
                <About />
                <Member />
                <Contact />
            </main>

            <footer>
                <p>
                    Copyright© 2021 The University of Nagano. Kayatsu Seminar.
                    All Rights Reserved.
                </p>
            </footer>

            <style jsx>{`
                .container {
                    position: relative;
                    max-width: 100%;
                    min-height: 100vh;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    background: #1d2f5f;
                }

                main {
                    position: relative;
                    width: 100%;
                    padding-top: 88px;
                    z-index: 1;
                    // padding-left: 0.9rem;
                    // padding-right: 0.9rem;
                    margin: 0 auto;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .top {
                    max-width: 100%;
                    justify-content: space-between;
                    position: relative;
                }

                .nav-bar {
                    position: fixed;
                    top: 0;
                    width: 100%;
                    margin: 0 auto;
                    padding: 0 0.9rem;
                    border-bottom: 1px solid gray;
                    display: flex;
                    z-index: 2;
                    background: #1c273e;
                    align-items: center;
                }

                .seminar-logo {
                    width: 80px;
                    height: 80px;
                    line-height: 80px;
                    text-align: center;
                    border-radius: 30%;
                    margin: 10px;
                }

                .seminar-name {
                    font-size: 24px;
                    margin: 0 auto;
                }

                .nav {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                }

                .nav-link {
                    width: 130px;
                    display: block;
                    list-style: none;
                    border-radius: 5px;
                    color: #fff;
                    text-align: center;
                    text-decoration: none;
                }

                .nav-link:hover {
                    text-decoration: underline;
                    cursor: pointer;
                    opacity: 0.8;
                }

                .nav-subtitle {
                    display: block;
                    font-size: 13px;
                }

                .top-image {
                    max-width: 100%;
                    height: auto;
                }

                footer {
                    width: 100%;
                    height: 100px;
                    border-top: 1px solid #afa7a4;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: #1c273e;
                }

                .description {
                    position: absolute;
                    top: 8%;
                    left: 50%;
                    transform: translate(-50%);
                    z-index: 2;
                    font-size: 5rem;
                    color: #f1c40f;
                    mix-blend-mode: difference;
                }

                .to-top-button {
                    cursor: pointer;
                    position: fixed;
                    z-index: 4;
                    width: 70px;
                    height: 70px;
                    right: 3em;
                    bottom: 4em;
                    background: #f4f5f7;
                    border: 3px solid var(--c-border);
                    border-radius: 50%;
                    filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.5));
                    line-height: 60px;
                }

                .to-top-button:hover {
                    background: #cbc5c0;
                }

                .to-top-button-icon {
                    display: block;
                    margin: 10px auto 0;
                    vertical-align: middle;
                }

                // レスポンシブ

                @media (max-width: 480px) {
                    .container {
                        width: 100%;
                    }

                    main {
                        padding-top: 61px;
                    }

                    .seminar-logo {
                        width: 40px;
                        height: 40px;
                    }

                    .seminar-name {
                        // display: none;
                        font-size: 8px;
                    }

                    .nav-link {
                        display: none;
                    }

                    .description {
                        font-size: 2rem;
                    }

                    .to-top-button {
                        width: 50px;
                        height: 50px;
                        right: 1em;
                        bottom: 3em;
                    }

                    .to-top-button-icon {
                        width: 30px;
                        height: 30px;
                    }

                    footer {
                        font-size: 8px;
                        height: 80px;
                    }
                }

                @media (min-width: 481px) and (max-width: 768px) {
                }
            `}</style>

            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: "Lato", "Noto Sans JP", "ヒラギノ角ゴ ProN",
                        "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo,
                        "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
                    line-height: 1.6;
                    font-size: 18px;
                    color: #f4f5f7;
                }

                a {
                    text-decoration: none;
                }

                * {
                    box-sizing: border-box;
                }
            `}</style>
        </div>
    );
}
