export default function Contact() {
    return (
        <div className="contact" id="contact">
            <h1 id="contact">
                Contact<span>お問い合わせ</span>
            </h1>
            <p>所在地： 長野県長野市三輪107研究室</p>
            <p>メールアドレス： rika.kayatsu@19G054.u-nagano.ac.jp</p>
            <p>電話番号： 070-8518-5090</p>

            <style jsx>{`
                h1 {
                    font-size: 64px;
                    margin: 100px auto 40px;
                    text-align: center;
                    color: #f1c40f;
                }

                p {
                    font-size: 24px;
                    text-align: center;
                    // font-weight: bold;
                }

                span {
                    font-size: 24px;
                    padding-left: 3rem;
                }

                @media (max-width: 480px) {
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
                }

                @media (min-width: 481px) and (max-width: 768px) {
                }
            `}</style>
        </div>
    );
}
