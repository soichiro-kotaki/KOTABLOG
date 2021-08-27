import { BaseLayout } from "../../layouts/BaseLayout";
import { PostList } from "../../commons/molecules/PostList";
import { Title } from "../../commons/atoms/Title";
import styles from "./styles.module.scss";

export const Presenter = (props) => {
    const { allPostsData } = props;
    return (
        <BaseLayout>
            <div className={styles.container}>
                <Title title="News" subtitle="投稿記事一覧" />
                <PostList allPostsData={allPostsData} />
            </div>
        </BaseLayout>
    );
};
