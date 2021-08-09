export default function Contact() {
    return (
        <div className="contact" id="contact">
            <h1 id="contact">
                Contact<span>お問い合わせ</span>
            </h1>
            <div className="divider">
                <div className="seminar_info">
                    <p>所在地：</p>
                    <p>長野県長野市三輪107研究室</p>
                    <p>メールアドレス：</p>
                    <p>rika.kayatsu@19G054.u-nagano.ac.jp</p>
                    <p>電話番号：</p>
                    <p>070-8518-5090</p>
                </div>
                <div className="link">
                    <a className="btn">お問い合わせフォームへ</a>
                </div>
            </div>

            <style jsx>{`
                .contact {
                    background: #f4f5f7;
                    color: #333;
                    width: 100%;
                    margin: 80px auto 0;
                }

                .divider {
                    display: flex;
                    width: 90%;
                    margin: 0 auto;
                }

                h1 {
                    font-size: 64px;
                    margin: 0 auto 30px;
                    text-align: center;
                    color: #b99b00;
                    filter: brightness(115%);
                }

                p {
                    font-size: 24px;
                    text-align: left;
                }

                p:nth-child(even) {
                    margin-bottom: 20px;
                }

                span {
                    font-size: 24px;
                    padding-left: 3rem;
                }

                .link {
                    height: 98px;
                    text-align: center;
                    margin: 80px auto 40px;
                }

                .btn {
                    display: block;
                    color: #fff;
                    margin-top: 25px;
                    background: #1d2f5f;
                    padding: 10px 30px;
                    border-radius: 5px;
                }

                .btn:hover {
                    background: #fff;
                    border: 1px solid #1d2f5f;
                    color: #1d2f5f;
                }

                @media (max-width: 480px) {
                    .contact {
                        margin-top: 40px;
                    }

                    .divider {
                        flex-direction: column;
                    }

                    h1 {
                        font-size: 32px;
                    }

                    p {
                        font-size: 16px;
                    }

                    span {
                        font-size: 0.5em;
                        padding-left: 1em;
                    }

                    .link {
                        margin-top: 0px;
                        margin-bottom: 30px;
                    }
                }

                @media (min-width: 481px) and (max-width: 768px) {
                }
            `}</style>
        </div>
    );
}
