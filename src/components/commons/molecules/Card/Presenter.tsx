import React from "react";
import { Button } from "../../atoms/Button";
import styles from "./styles.module.scss";

export const Presenter: React.FC = () => {
    return (
        <>
            <div className={styles.contents}>
                <section className={styles.card}>
                    <img src="/blockchain.png" className={styles.card_img} />
                    <h2 className={styles.card_title}>ブロックチェーン × ○○</h2>
                    <p className={styles.card_text}>
                        ブロックチェーン技術と、既存のテクノロジーを生かして、どのような事が実現できるのか、仮説を通して検証しています。
                    </p>
                    <Button />
                </section>
                <section className={styles.card}>
                    <img src="/edu-and-info.png" className={styles.card_img} />
                    <h2 className={styles.card_title}>情報と教育</h2>
                    <p className={styles.card_text}>
                        教育環境に情報技術を掛け合わせ、より学びが楽しくなるような環境について研究しています。
                    </p>
                    <Button />
                </section>
            </div>
        </>
    );
};
