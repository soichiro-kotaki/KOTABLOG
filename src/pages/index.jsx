import Post from "../components/Post";
import About from "../components/About";
import Member from "../components/Member";
import Contact from "../components/Contact";
import { ToTopButton } from "../components/commons/ToTopButton";
import { BaseLayout } from "../components/layouts/BaseLayout";

export default function Home() {
    return (
        <BaseLayout>
            <main>
                <div className="top">
                    <div className="top-image"></div>
                    <h2 className="description">
                        「IT」を活用した新たな価値創造について研究しています
                    </h2>
                </div>
                <ToTopButton />

                <Post />
                <About />
                <Member />
                <Contact />
            </main>

            <style jsx>{`
                main {
                    position: relative;
                    width: 100%;
                    padding-top: 88px;
                    z-index: 1;
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

                .top-image {
                    max-width: 100%;
                    width: 100%;
                    height: 700px;
                    filter: brightness(50%);
                    background-image: url("/top1.jpg");
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    background-size: 100%;
                }

                .description {
                    position: absolute;
                    top: 8%;
                    left: 50%;
                    transform: translate(-50%);
                    z-index: 2;
                    font-size: 3rem;
                    color: #dddcda;
                }

                // レスポンシブ
                @media (max-width: 480px) {
                    main {
                        padding-top: 61px;
                    }

                    .top-image {
                        height: 200px;
                    }

                    .description {
                        font-size: 1rem;
                        top: 15%;
                        width: 250px;
                    }
                }
            `}</style>
        </BaseLayout>
    );
}
