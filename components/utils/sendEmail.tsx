"use server";

import React from "react";
import { Resend } from "resend";
import { getErrorMessage, validateString } from "./function";
import ContactFormEmail from "../ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");
    console.log(senderEmail);

    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email",
        };
    }

    if (!validateString(message, 500)) {
        return {
            error: "Invalid message",
        };
    }

    let data;

    try {
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "travis05leow@gmail.com",
            subject: "Message from Portfolio Contact Form!",
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string,
            }),
        });
    } catch (err: unknown) {
        return {
            error: getErrorMessage(err),
        };
    }

    return {
        data,
    }
};
