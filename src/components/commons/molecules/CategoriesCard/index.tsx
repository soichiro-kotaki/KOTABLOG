import React from "react";
import Link from "next/link";

// スタイリング
import styles from "./styles.module.scss";

// データ型
import { CategoriesType } from "src/types/Categories";

type Props = {
    categories: CategoriesType[];
};

export const CategoriesCard: React.FC<Props> = (props: Props) => {
    const { categories } = props;

    return (
        <div className={styles.categories}>
            <h2 className={styles.categories_title}>カテゴリータグ一覧</h2>
            {categories.map((category) => {
                return (
                    <Link href={`/categories/${category.id}`} key={category.id}>
                        <p className={styles.categories_link}>
                            {category.name}
                        </p>
                    </Link>
                );
            })}
        </div>
    );
};
