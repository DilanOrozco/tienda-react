import React, { useState } from "react";
import "../css/ContactPage.css";

export function ContactForm() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        mensaje: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Mensaje enviado ✅ (aquí iría tu lógica con backend o email service)");
        setFormData({ nombre: "", email: "", mensaje: "" });
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Tu correo"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <textarea
                name="mensaje"
                placeholder="Escribe tu mensaje..."
                rows="5"
                value={formData.mensaje}
                onChange={handleChange}
                required
            ></textarea>
            <button type="submit">Enviar</button>
        </form>
    );
}
