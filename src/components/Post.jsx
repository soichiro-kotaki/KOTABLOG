import Link from "next/link";

export default function Post() {
    return (
        <div className="post" id="news">
            <h1>
                News<span>新着情報</span>
            </h1>
            <ul className="post-list">
                <li className="post-item">
                    <time className="post-time-stamp" dateTime="2020-11">
                        2020.11.11
                    </time>
                    <a
                        href="https://www.u-nagano.ac.jp/"
                        className="post-title"
                    >
                        高橋郷くんが、中村ゼミを辞めました。
                    </a>
                </li>
                <li className="post-item">
                    <time className="post-time-stamp" dateTime="2020-11">
                        2020.11.11
                    </time>
                    <a
                        href="https://www.u-nagano.ac.jp/"
                        className="post-title"
                    >
                        宮本優くんが、ゼミに遅刻してきました。
                    </a>
                </li>
            </ul>

            <style jsx>{`
                .post {
                    text-align: center;
                    width: 90%;
                    background: #f4f5f7;
                    height: 600px;
                    margin: 80px auto 0;
                    color: #333;
                    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);
                }

                h1 {
                    font-size: 64px;
                    text-align: center;
                    color: #b99b00;
                    filter: brightness(115%);
                    margin-bottom: 30px;
                }

                span {
                    font-size: 24px;
                    padding-left: 3rem;
                }

                .post-item {
                    width: 80%;
                    display: flex;
                    margin: 0 auto;
                    border-bottom: 1px solid #afa7a4;
                    padding-bottom: 20px;
                    margin-bottom: 20px;
                }

                .post-time-stamp {
                    padding-left: 30px;
                    padding-right: 100px;
                    color: #afa7a4;
                    font-weight: bold;
                }

                .post-title {
                    text-decoration: none;
                }

                .post-title:hover {
                    text-decoration: underline;
                }

                // レスポンシブ

                @media (max-width: 480px) {
                    .post {
                        height: 400px;
                        margin: 0 auto;
                        position: relative;
                        top: 7%;
                        left: 0;
                        width: 90%;
                    }

                    h1 {
                        font-size: 32px;
                        font-weight: bold;
                    }

                    span {
                        font-size: 0.5em;
                        padding-left: 1em;
                    }

                    .post-list {
                        padding: 0;
                    }

                    .post-item {
                        flex-direction: column;
                        text-align: left;
                        padding-bottom: 10px;
                    }

                    .post-time-stamp {
                        padding-left: 10px;
                        padding-right: 30px;
                        font-size: 0.6em;
                        display: block;
                    }

                    .post-title {
                        font-size: 0.7em;
                    }
                }

                @media (min-width: 481px) and (max-width: 768px) {
                }
            `}</style>
        </div>
    );
}
