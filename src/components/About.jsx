export default function About() {
    return (
        <div className="about" id="about">
            <h1>
                About<span>研究紹介</span>
            </h1>
            {/* <h2>
                当ゼミでは、<b>「情報」</b>をテーマに研究を進めています。
            </h2> */}
            <p className="about-keyword-title">キーワード</p>
            <p className="about-keyword-words">
                #ICT #ブロックチェーン #情報教育 #プログラミング #まなびここち
                #IT×農業 #Maas
            </p>
            <div className="contents">
                <section className="card">
                    <img src="/blockchain.jpg" className="card-img" />
                    <h2 className="card-title">ブロックチェーン × ○○</h2>
                    <p className="card-text">こんにちはこんにちは</p>
                    <div className="card-link">
                        <a className="card-btn">MORE</a>
                    </div>
                </section>
                <section className="card">
                    <img
                        src="/information-and-education.jpg"
                        className="card-img"
                    />
                    <h2 className="card-title">情報と教育</h2>
                    <p className="card-text">こんにちはこんにちは</p>
                    <div className="card-link">
                        <a className="card-btn">MORE</a>
                    </div>
                </section>
            </div>

            <style jsx>{`
                .about {
                    margin-top: 600px;
                }

                h1 {
                    font-size: 64px;
                    margin: 0 auto;
                    text-align: center;
                    color: #f1c40f;
                }

                h2 {
                    font-size: 32px;
                    text-align: center;
                }

                p {
                    font-size: 24px;
                    text-align: center;
                }

                span {
                    font-size: 24px;
                    padding-left: 3rem;
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
                    background: #f4f5f7;
                    color: #333;
                    text-align: center;
                    margin: 30px;
                    border-radius: 10px;
                }

                .card-img {
                    width: 400px;
                    height: 250px;
                    border-radius: 10px 10px 0 0;
                }

                .card-title {
                    font-size: 32px;
                }

                .card-text {
                    font-size: 16px;
                }

                .card-link {
                    border-top: 1px solid #afa7a4;
                    height: 98px;
                }

                .card-btn {
                    display: inline-block;
                    color: #fff;
                    margin-top: 25px;
                    text-align: center;
                    background: #1d2f5f;
                    padding: 10px 30px;
                    border-radius: 5px;
                }

                .card-btn:hover {
                    background: #fff;
                    border: 1px solid #1d2f5f;
                    color: #1d2f5f;
                }

                @media (max-width: 480px) {
                    .about {
                        margin-top: 50px;
                    }
                    h1 {
                        font-size: 32px;
                    }

                    span {
                        font-size: 0.5em;
                        padding-left: 1em;
                    }

                    .about-keyword-words {
                        font-size: 0.8em;
                    }

                    .contents {
                        width: 100%;
                        flex-direction: column;
                    }

                    .card {
                        width: 80%;
                        height: 80%;
                        margin: 0 auto 30px;
                    }

                    .card-img {
                        width: 100%;
                    }

                    .card-title {
                        font-size: 16px;
                    }

                    .card-text {
                        font-size: 8px;
                    }
                }

                @media (min-width: 481px) and (max-width: 768px) {
                }
            `}</style>
        </div>
    );
}
