import styles from "./styles.module.scss";

export function Presenter(props) {
    const { allPostsData } = props;
    console.log(allPostsData);
    return (
        <>
            {allPostsData.map((postData) => {
                return (
                    <li className={styles.post_item} key={postData.id}>
                        <time className={styles.post_time_stamp}>
                            {postData.date}
                        </time>
                        <a
                            href="https://www.u-nagano.ac.jp/"
                            className={styles.post_title}
                        >
                            {postData.title}
                        </a>
                    </li>
                );
            })}
        </>
    );
}
