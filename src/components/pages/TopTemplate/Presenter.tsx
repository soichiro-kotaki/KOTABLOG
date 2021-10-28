import React from "react";
import Link from "next/link";

// コンポーネント
import { BaseLayout } from "../../layouts/BaseLayout";
import { Title } from "../../commons/atoms/Title";
import { PostList } from "../../commons/molecules/PostList";
import { Card } from "../../commons/molecules/Card";

// ライブラリ
import GoogleMapReact from "google-map-react";

// スタイリング
import styles from "./styles.module.scss";

type Props = {
    allPostsData: [
        {
            id: string;
            title: string;
            date: string;
        }
    ];
    defaultLatLng: {
        lat: number;
        lng: number;
    };
    handleApiLoaded: (map: any, maps: any) => void;
};

export const Presenter: React.FC<Props> = (props) => {
    const { allPostsData, defaultLatLng, handleApiLoaded } = props;

    return (
        <BaseLayout>
            <main className={styles.main}>
                <div className={styles.top}>
                    <div className={styles.top_img}></div>
                    <h2 className={styles.top_description}>Be enthusiastic.</h2>
                    <h2 className={styles.top_sub_description}>
                        #UX #education #programming
                    </h2>
                </div>

                <div className={styles.post} id="news">
                    <Title title="News" subtitle="新着情報" />
                    <PostList allPostsData={allPostsData} />
                    <Link href="/postList">
                        <a className={styles.btn_news}>一覧を見る</a>
                    </Link>
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
                                当グローバル教養ゼミでは、萱津准教授ご指導のもと、６名の学生が活動しています。
                            </p>
                            <p className={styles.member_text}>
                                出身地も違えば、専攻も違う、さまざまなバックグラウンドを持つメンバーが集まり、日々活動しています。
                            </p>
                            <div className={styles.link_member}>
                                <Link href="/member">
                                    <div className={styles.btn_member}>
                                        MORE
                                    </div>
                                </Link>
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
                            <p className={styles.address}>
                                メールアドレス（サイト運営者）
                            </p>
                            <p className={styles.address}>
                                19G054@.u-nagano.ac.jp
                            </p>
                            <p className={styles.address}>電話番号</p>
                            <p className={styles.address}>070-8518-5090</p>
                        </div>
                        <div className={styles.box__map}>
                            <GoogleMapReact
                                bootstrapURLKeys={{
                                    key: process.env
                                        .NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
                                }}
                                defaultCenter={{
                                    lat: 36.6661086,
                                    lng: 138.2004124,
                                }}
                                defaultZoom={15}
                                onGoogleApiLoaded={handleApiLoaded}
                                yesIWantToUseGoogleMapApiInternals={true}
                            />
                        </div>
                    </div>
                    <div className={styles.link_contact}>
                        <Link href="/contact">
                            <a className={styles.btn_contact}>
                                お問い合わせフォームへ
                            </a>
                        </Link>
                    </div>
                </div>
            </main>
        </BaseLayout>
    );
};
