import styles from "./styles.module.scss";

import { BaseLayout } from "../../layouts/BaseLayout";
import { Title } from "../../commons/atoms/Title";
import { PostList } from "../../commons/molecules/PostList";
import { Card } from "../../commons/molecules/Card";

export const Presenter = () => {
    return (
        <BaseLayout>
            <main className={styles.main}>
                <div className={styles.top}>
                    <div className={styles.top_img}></div>
                    <h2 className={styles.top_description}>
                        「IT」を活用した新たな価値創造について研究しています
                    </h2>
                </div>

                <div className={styles.post} id="news">
                    <Title title="News" subtitle="新着情報" />
                    <PostList />
                </div>

                <div className={styles.about} id="about">
                    <Title title="About" subtitle="研究紹介" />
                    <Card />
                </div>

                <div className={styles.member} id="member">
                    <Title title="Member" subtitle="教員と学生" />
                    <section className={styles.member_about}>
                        <img src="/member.png" className={styles.member_img} />
                        <div className={styles.description}>
                            <p className={styles.member_text}>
                                当グローバル教養ゼミでは、萱津准教授ご指導のもと、６名が活動しています。
                            </p>
                            <p className={styles.member_text}>
                                出身地も違えば、専攻も違う、さまざまなバックグラウンドを持つメンバーが集まり、日々活動しています。
                            </p>
                            <div className={styles.link_member}>
                                <div className={styles.btn_member}>MORE</div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className={styles.contact} id="contact">
                    <Title title="Contact" subtitle="お問い合わせ" />
                    <div className={styles.divider}>
                        <div className={styles.seminar_info}>
                            <p className={styles.address}>所在地</p>
                            <p className={styles.address}>
                                長野県長野市三輪8丁目49-7 c107研究室
                            </p>
                            <p className={styles.address}>メールアドレス</p>
                            <p className={styles.address}>
                                rika.kayatsu@.u-nagano.ac.jp
                            </p>
                            <p className={styles.address}>電話番号</p>
                            <p className={styles.address}>070-8518-5090</p>
                        </div>
                        <div className={styles.link_contact}>
                            <a className={styles.btn_contact}>
                                お問い合わせフォームへ
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </BaseLayout>
    );
};
