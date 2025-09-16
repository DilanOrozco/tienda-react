import React from "react";
import "../css/contactPage.css";
import { ContactForm } from "../components/ContactForm";

export function ContactPage() {
    return (
        <div className="contact-page">
            <h2>Contáctanos</h2>
            <p>
                ¿Tienes preguntas sobre nuestros vinilos o tu pedido? Escríbenos y te
                responderemos lo antes posible.
            </p>

            <ContactForm />
        </div>
    );
}
