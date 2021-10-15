import React, { useState } from "react";

// コンポーネント
import { BaseLayout } from "../../layouts/BaseLayout";
import { Title } from "../../commons/atoms/Title";

// スタイリング
import styles from "./styles.module.scss";

export const Presenter: React.FC = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const submitForm = () => {
        const url = process.env.NEXT_PUBLIC_TEAMS_INCOMING_WEBHOOK;

        const payload = {
            text: `お問い合わせがありました。\n
                    氏名： ${name} \n
                    問い合わせ内容： ${message}`,
        };

        fetch(url, {
            method: "POST",
            body: JSON.stringify(payload),
            mode: "no-cors",
        }).then(() => {
            alert("お問い合わせ内容を送信しました。");
            setName("");
            setMessage("");
        });
    };

    return (
        <BaseLayout>
            <div className={styles.container}>
                <Title title="Contact" subtitle="お問い合わせ" />
                <div className={styles.wrapper}>
                    <form>
                        <div>
                            <label
                                htmlFor="name"
                                className={styles.label_input_name}
                            >
                                お名前
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                autoFocus
                                className={styles.input_name}
                                value={name}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                    setName(e.target.value);
                                }}
                            />
                        </div>
                        <div className={styles.wrapper_input_message}>
                            <label
                                htmlFor="message"
                                className={styles.label_input_message}
                            >
                                お問い合わせ内容
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={12}
                                cols={50}
                                className={styles.input_message}
                                value={message}
                                onChange={(
                                    e: React.ChangeEvent<HTMLTextAreaElement>
                                ) => {
                                    setMessage(e.target.value);
                                }}
                            ></textarea>
                        </div>
                        <input
                            type="button"
                            value="送信する"
                            className={styles.submit_btn}
                            onClick={() => {
                                submitForm();
                                console.log(name, message);
                            }}
                        />
                    </form>
                </div>
            </div>
        </BaseLayout>
    );
};