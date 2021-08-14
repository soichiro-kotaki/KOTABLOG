import { Title } from "./commons/atoms/Title";

export default function Member() {
    return (
        <div className="member" id="member">
            <Title title="Member" subtitle="教員と学生" />
            <section className="member-about">
                <img src="/member.png" className="member-img" />
                <div className="description">
                    <p>
                        当グローバル教養ゼミでは、萱津理佳准教授ご指導のもと、６名が活動しています。
                    </p>
                    <p>
                        出身地も違えば、専攻も違う、さまざまなバックグラウンドを持つメンバーが集まり、日々活動しています。
                    </p>
                    <div className="link">
                        <div className="btn">MORE</div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .member {
                    background: #f4f5f7;
                    margin-top: 80px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }

                p {
                    font-size: 24px;
                    margin: 20px auto 20px;
                }

                .member-about {
                    display: flex;
                    width: 90%;
                    margin: 40px auto 0;
                    color: #333;
                }

                .member-img {
                    display: block;
                    width: 500px;
                    margin-bottom: 30px;
                    box-shadow: 0 0px 3px rgba(0, 0, 0, 0.2);
                }

                .description {
                    flex: 1;
                    height: 400px;
                    background: #f4f5f7;
                    margin-left: 100px;
                }

                .link {
                    height: 98px;
                    text-align: center;
                    margin-top: 80px;
                }

                .btn {
                    display: flex;
                    color: #fff;
                    margin: 25px auto 0;
                    background: #1d2f5f;
                    padding: 10px 30px;
                    border-radius: 100vh;
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
                    align-items: center;
                    width: 140px;
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

                @media (max-width: 480px) {
                    .member {
                        margin-top: 40px;
                    }

                    p {
                        font-size: 16px;
                    }
                    .member-about {
                        flex-direction: column;
                        width: 90%;
                    }

                    .member-img {
                        width: 100%;
                        border-radius: 10px;
                        margin-bottom: 0px;
                    }

                    .description {
                        margin-left: 0;
                    }

                    .link {
                        margin-top: 10px;
                    }

                    .btn {
                        margin: 10% auto 0;
                    }
                }

                @media (min-width: 481px) and (max-width: 768px) {
                }
            `}</style>
        </div>
    );
}
