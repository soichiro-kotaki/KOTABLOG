import { Title } from "./commons/atoms/Title";

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <Title title="Contact" subtitle="お問い合わせ" />
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
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }

                .divider {
                    display: flex;
                    width: 90%;
                    margin: 0 auto;
                }

                p {
                    font-size: 24px;
                    text-align: left;
                }

                p:nth-child(even) {
                    margin-bottom: 20px;
                }

                .link {
                    height: 98px;
                    text-align: center;
                    margin: 80px auto 40px;
                }

                .btn {
                    display: flex;
                    color: #fff;
                    margin-top: 25px;
                    background: #1d2f5f;
                    padding: 10px 30px;
                    border-radius: 100vh;
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
                    align-items: center;
                }

                .btn:hover {
                    background: #fff;
                    border: 1px solid #1d2f5f;
                    color: #1d2f5f;
                    cursor: pointer;
                }

                .btn::after {
                    content: "";
                    width: 9px;
                    height: 9px;
                    border-top: 3px solid #f4f5f7;
                    border-right: 3px solid #f4f5f7;
                    transform: rotate(45deg);
                    margin-left: 0.7em;
                }

                .btn:hover::after {
                    border-top: 3px solid #1d2f5f;
                    border-right: 3px solid #1d2f5f;
                }

                @media (max-width: 360px) {
                    .btn {
                        font-size: 16px;
                    }
                }

                @media (max-width: 480px) {
                    .contact {
                        margin-top: 40px;
                    }

                    .divider {
                        flex-direction: column;
                    }

                    p {
                        font-size: 16px;
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
