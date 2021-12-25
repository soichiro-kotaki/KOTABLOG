import React from "react";
import Link from "next/link";

// スタイリング
import styles from "./styles.module.scss";

// データ型

type Props = {
    archivesList: string[];
};

export const ArchivesCard: React.FC<Props> = (props: Props) => {
    const { archivesList } = props;

    return (
        <div className={styles.archives}>
            <h2 className={styles.archives_title}>月間アーカイブ</h2>
            {archivesList.map((archive, index) => {
                return (
                    <Link href={`/archive/${archive}`} key={index}>
                        <p className={styles.archive_link}>{archive}</p>
                    </Link>
                );
            })}
        </div>
    );
};
