import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_xamy7fb", "template_gv9tbyd", form.current, {
                publicKey: "u5fOQmuPyReDqhWYu",
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                    form.current.reset(); // 🔥 limpia los inputs
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
            />
            <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
            />
            <textarea
                name="message"
                rows="5"
                placeholder="Write your message here..."
                required
            />
            <button type="submit">Send Message</button>
        </form>
    );
};
