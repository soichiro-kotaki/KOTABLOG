export default function Member() {
    return (
        <div id="member">
            <h1>
                Member<span>教員と学生</span>
            </h1>
            <h2>
                当グローバル教養ゼミでは、萱津理佳准教授ご指導のもと、６名が活動しています。
            </h2>
            <p>
                出身地も違えば、専攻も違う、さまざまなバックグラウンドを持つメンバーが集まり、日々活動しています。
            </p>
            <section className="professor">
                <img src="/professor.jpg" className="professor-img" />
                <div className="professor-description">
                    <p className="professor-belongs">
                        長野県立大学 グローバルマネジメント学科 准教授
                    </p>
                    <h3 className="professor-name">萱津 理佳</h3>
                    <span className="professor-name-reading">かやつ りか</span>
                    <p className="professor-major">
                        専門分野： 教育工学・情報学フロンティア
                    </p>
                    <p className="professor-hobby">
                        趣味： ツーリング・スポーツ
                    </p>
                    <div className="professor-link">
                        <a className="professor-btn">MORE</a>
                    </div>
                </div>
            </section>

            <style jsx>{`
                h1 {
                    font-size: 64px;
                    margin: 10px auto 40px;
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

                .professor {
                    display: flex;
                    position: relative;
                    width: 80%;
                    margin: 40px auto 0;
                    color: #333;
                }

                .professor-img {
                    position: relative;
                    z-index: 2;
                    display: block;
                    width: 400px;
                    pointer-events: none;
                }

                .professor-description {
                    position: absolute;
                    top: 80px;
                    left: 320px;
                    max-width: 700px;
                    width: 70%;
                    height: 400px;
                    background: #f4f5f7;
                    padding-left: 100px;
                }

                .professor-belongs {
                    font-size: 16px;
                    text-align: left;
                    // margin-left: 100px;
                }

                .professor-name {
                    text-align: left;
                    font-size: 32px;
                    margin-top: 0;
                    margin-bottom: 0;
                }

                .professor-name-reading {
                    font-size: 16px;
                    padding-left: 16px;
                }

                .professor-major {
                    text-align: left;
                    font-size: 24px;
                }

                .professor-hobby {
                    text-align: left;
                    font-size: 24px;
                }

                .professor-link {
                    height: 98px;
                    text-align: center;
                }

                .professor-btn {
                    display: inline-block;
                    color: #fff;
                    margin-top: 25px;
                    background: #1d2f5f;
                    padding: 10px 30px;
                    border-radius: 5px;
                }

                .professor-btn:hover {
                    background: #fff;
                    border: 1px solid #1d2f5f;
                    color: #1d2f5f;
                }

                @media (max-width: 480px) {
                    p {
                        font-size: 16px;
                    }
                    .professor {
                        flex-direction: column;
                        width: 90%;
                    }

                    .professor-description {
                        position: relative;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 300px;
                    }
                }

                @media (max-width: 480px) {
                    h1 {
                        font-size: 32px;
                    }

                    h2 {
                        font-size: 16px;
                    }

                    span {
                        font-size: 0.5em;
                        padding-left: 1em;
                    }

                    .professor-img {
                        width: 100%;
                    }

                    .professor-description {
                        padding-left: 0.5em;
                    }

                    .professor-major {
                        font-size: 0.8em;
                        margin: 0;
                    }
                    .professor-hobby {
                        font-size: 0.8em;
                        margin: 0;
                    }

                    .professor-link {
                    }

                    .professor-btn {
                        display: inline-block;
                        color: #fff;
                        margin-top: 10%;
                        background: #1d2f5f;
                        padding: 10px 30px;
                        border-radius: 5px;
                    }
                }

                @media (min-width: 481px) and (max-width: 768px) {
                }
            `}</style>
        </div>
    );
}
