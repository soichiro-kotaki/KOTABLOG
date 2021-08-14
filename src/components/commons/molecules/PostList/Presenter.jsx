import styles from "./styles.module.scss";
import { PostItem } from "../../atoms/PostItem";

export function Presenter() {
    return (
        <ul className={styles.post_list}>
            <PostItem />
        </ul>
    );
}
