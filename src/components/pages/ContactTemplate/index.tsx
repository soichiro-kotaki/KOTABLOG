import React, { useState } from "react";

import { Presenter } from "./Presenter";

export const ContactTemplate: React.FC = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleNameOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    const handleMessageOnChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setMessage(e.target.value);
    };

    const handleSubmitForm = (name: string, message: string) => {
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
        <Presenter
            name={name}
            message={message}
            handleNameOnChange={handleNameOnChange}
            handleMessageOnChange={handleMessageOnChange}
            handleSubmitForm={handleSubmitForm}
        />
    );
};
