import React from "react";
import Image from "next/image";

// スタイリング
import styles from "./styles.module.scss";

// データ型
import { AuthorType } from "src/types/Author";

type Props = {
    profileData: AuthorType;
};

export const ProfileCard: React.FC<Props> = (props: Props) => {
    const { profileData } = props;

    return (
        <div className={styles.profile}>
            <h1 className={styles.author_title}>著者プロフィール</h1>
            <div className={styles.author_img}>
                <Image
                    src={profileData.img.url}
                    width={120}
                    height={120}
                    objectFit={"cover"}
                    className={styles.img}
                ></Image>
            </div>
            <p className={styles.author_name}>{profileData.name}</p>
            <p className={styles.author_text}>{profileData.englishName}</p>
            <p className={styles.author_text}>{profileData.position}</p>
            <p className={styles.author_text}>{profileData.description}</p>
            <a
                href="https://github.com/soichiro-kotaki"
                className={styles.author_link__github}
            >
                GitHubはこちら
            </a>
        </div>
    );
};
