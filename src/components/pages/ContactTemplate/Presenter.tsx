import React, { useState } from "react";

// コンポーネント
import { BaseLayout } from "../../layouts/BaseLayout";
import { Title } from "../../commons/atoms/Title";

// スタイリング
import styles from "./styles.module.scss";

type Props = {
    name: string;
    message: string;
    handleNameOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleMessageOnChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleSubmitForm: (name: string, message: string) => any;
};

export const Presenter: React.FC<Props> = (props) => {
    const {
        name,
        message,
        handleNameOnChange,
        handleMessageOnChange,
        handleSubmitForm,
    } = props;

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
                                onChange={handleNameOnChange}
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
                                onChange={handleMessageOnChange}
                            ></textarea>
                        </div>
                        <input
                            type="button"
                            value="送信する"
                            className={styles.submit_btn}
                            onClick={() => {
                                handleSubmitForm(name, message);
                                console.log(name, message);
                            }}
                        />
                    </form>
                </div>
            </div>
        </BaseLayout>
    );
};
