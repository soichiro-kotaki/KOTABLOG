import styles from "./styles.module.scss";
import { PostItem } from "../../atoms/PostItem";

export function Presenter(props) {
    const { allPostsData } = props;
    return (
        <ul className={styles.post_list}>
            <PostItem allPostsData={allPostsData} />
        </ul>
    );
}
