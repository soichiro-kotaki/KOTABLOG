import { Card } from "./commons/molecules/Card";
import { Title } from "./commons/atoms/Title";

export default function About() {
    return (
        <div className="about" id="about">
            <Title title="About" subtitle="研究紹介" />
            <Card />

            <style jsx>{`
                .about {
                    margin: 80px auto 0;
                    background: #f4f5f7;
                    width: 100%;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }

                @media (max-width: 480px) {
                    .about {
                        margin-top: 50px;
                    }
                }

                @media (min-width: 481px) and (max-width: 768px) {
                }
            `}</style>
        </div>
    );
}
