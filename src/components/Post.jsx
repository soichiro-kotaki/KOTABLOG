import Link from "next/link";
import { Title } from "./commons/atoms/Title";
import { PostList } from "./commons/molecules/PostList";

export default function Post() {
    return (
        <div className="post" id="news">
            <Title title="News" subtitle="新着情報" />
            <PostList />

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

                // レスポンシブ

                @media (max-width: 480px) {
                    .post {
                        height: 400px;
                        margin: 0 auto;
                    }
                }

                @media (min-width: 481px) and (max-width: 768px) {
                }
            `}</style>
        </div>
    );
}
