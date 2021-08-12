export default function About() {
    return (
        <div className="about" id="about">
            <h1>
                About<span>研究紹介</span>
            </h1>
            {/* <h2>
                当ゼミでは、<b>「情報」</b>をテーマに研究を進めています。
            </h2> */}
            {/* <p className="about-keyword-title">キーワード</p>
            <p className="about-keyword-words">
                #ICT #ブロックチェーン #情報教育 #プログラミング #まなびここち
                #IT×農業 #Maas
            </p> */}
            <div className="contents">
                <section className="card">
                    <img src="/blockchain.png" className="card-img" />
                    <h2 className="card-title">ブロックチェーン × ○○</h2>
                    <p className="card-text">
                        ブロックチェーン技術と、既存のテクノロジーを生かして、どのような事が実現できるのか、仮説を通して検証しています。
                    </p>
                    <div className="card-link">
                        <div className="card-btn">MORE</div>
                    </div>
                </section>
                <section className="card">
                    <img src="/edu-and-info.png" className="card-img" />
                    <h2 className="card-title">情報と教育</h2>
                    <p className="card-text">
                        教育環境に情報技術を掛け合わせ、より学びが楽しくなるような環境について研究しています。
                    </p>
                    <div className="card-link">
                        <div className="card-btn">MORE</div>
                    </div>
                </section>
            </div>

            <style jsx>{`
                .about {
                    margin: 80px auto 0;
                    background: #f4f5f7;
                    width: 100%;
                }

                h1 {
                    font-size: 64px;
                    margin: 0 auto 30px;
                    text-align: center;
                    color: #b99b00;
                    filter: brightness(115%);
                }

                span {
                    font-size: 24px;
                    padding-left: 1rem;
                }

                span::before {
                    content: "";
                    border-right: 1px solid #b99b00;
                    margin-right: 0.2em;
                }

                span::after {
                    content: "";
                    border-right: 1px solid #b99b00;
                    margin-left: 0.2em;
                }

                .about-keyword-words {
                    font-weight: 200;
                }

                .contents {
                    width: 80%;
                    display: flex;
                    justify-content: center;
                    margin: 0 auto;
                }

                .card {
                    width: 400px;
                    height: 500px;
                    background: #fff;
                    color: #333;
                    text-align: center;
                    margin: 30px;
                    margin-bottom: 50px;
                    border-radius: 10px;
                    box-shadow: 0 0px 20px rgba(0, 0, 0, 0.2);
                }

                .card-img {
                    width: 400px;
                    height: 250px;
                    border-radius: 10px 10px 0 0;
                }

                .card-title {
                    margin-top: 0.3em;
                    margin-bottom: 0.3em;
                    font-size: 32px;
                    font-weight: bold;
                }

                .card-text {
                    font-size: 16px;
                    text-align: left;
                    height: 80px;
                    width: 90%;
                    margin: 0 auto;
                }

                .card-link {
                    border-top: 1px solid #dddcda;
                    height: 98px;
                }

                .card-btn {
                    display: flex;
                    color: #fff;
                    width: 140px;
                    margin: 25px auto 0;
                    text-align: center;
                    background: #1d2f5f;
                    padding: 10px 30px;
                    border-radius: 100vh;
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
                    align-items: center;
                }

                .card-btn:hover {
                    background: #fff;
                    border: 1px solid #1d2f5f;
                    color: #1d2f5f;
                    cursor: pointer;
                }

                .card-btn::after {
                    content: "";
                    width: 9px;
                    height: 9px;
                    border-top: 3px solid #f4f5f7;
                    border-right: 3px solid #f4f5f7;
                    transform: rotate(45deg);
                    margin-left: 0.7em;
                }

                .card-btn:hover::after {
                    border-top: 3px solid #1d2f5f;
                    border-right: 3px solid #1d2f5f;
                }

                @media (max-width: 480px) {
                    .about {
                        margin-top: 50px;
                    }
                    h1 {
                        font-size: 32px;
                        font-weight: bold;
                    }

                    span {
                        font-size: 0.5em;
                        padding-left: 0.7em;
                    }

                    .about-keyword-words {
                        font-size: 0.8em;
                    }

                    .contents {
                        width: 100%;
                        flex-direction: column;
                    }

                    .card {
                        width: 85%;
                        height: 50%;
                        margin: 0 auto 30px;
                    }

                    .card-img {
                        width: 100%;
                    }

                    .card-title {
                        font-size: 16px;

                        margin-top: 0.3em;
                        margin-bottom: 0.5em;
                    }

                    .card-text {
                        font-size: 0.7em;
                    }
                }

                @media (min-width: 481px) and (max-width: 768px) {
                }
            `}</style>
        </div>
    );
}
