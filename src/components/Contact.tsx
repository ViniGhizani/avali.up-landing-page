import "../styles/utility.css";
import "../styles/index.css";
import "../styles/contact.css";
import Button from "./Button";
import { useState } from "react";

export default function Contact() {
    const [toMail, setToMail] = useState("");
    const [subject, setSubject] = useState("Avali.up - Entre em Contato");
    const [text, setText] = useState("")

    async function sendEmail() {
        if (!toMail || !subject) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        try {
            const response = await fetch("api", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTEwMTU3MjUyMDk2NTUwMDY1MDEwIiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJ2Z3NpbHZhM0BtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJ1ZG84SEowdzhCZ0tFZndHRXBGX2RBIiwibmJmIjoxNzMxODg1MDU5LCJpYXQiOjE3MzE4ODUzNTksImV4cCI6MTczMTg4ODk1OSwianRpIjoiNDJiZWY2NDlmNjM5NjEwNThkYjIwNWI3ZjhmYWE2NDlkMTY2YzY1NiJ9.k2iHh-r70z8WLOu76T_JrWvyh3LAb6YjB885AaQ0nYqfRWUVkRIkOtRcOMhNMy_qCq7eYNUjC9gGewvcJZk-Oqi6dFPXdQbAEpY4ll5_ADmnc1A4gQ-irPwddUUwmaa8yJ19kFOsji5cH-K-G6Gm3ZALec8RccQxZdP_jJo-KoxYsKSmbub9jQ7Wohws3J0BPFJ953Q8f_d9a5nDW9re7FIY4hbuHPS1TC_y8rQOhSIqFSHFJOyTayrZ78mCdqrq20PmtsBK5QqYJr_WTmgCZcVATDc43rLvcY4DiCjMdtj6y4el1L4fXHPls6CqDjpZu975lYS6GFIayjOJjv-5wg`,
                },
                body: JSON.stringify({
                    toMail,
                    subject,
                    text
                }),
            });

            if (response.ok) {
                alert("Email enviado com sucesso!");
                setToMail("");
                setSubject("");
            } else {
                const error = await response.json();
                console.error("Erro ao enviar email:", error);
                alert("Erro ao enviar o email. Por favor, tente novamente.");
            }
        } catch (err) {
            console.error("Erro:", err);
            alert("Ocorreu um erro ao tentar enviar o email.");
        }
    }

    return (
        <section id="contact" className="container">
            <header>
                <p className="desktop-only">Envie sua dúvida</p>
                <h2>Entre em contato</h2>
                <p>
                Está em dúvida sobre qual periférico escolher? Nossa equipe está aqui para ajudar! Quem já usou nosso site sabe que oferecemos avaliações confiáveis e suporte dedicado. 
                </p>
            </header>
            <section className="contact">
                <input
                    type="email"
                    placeholder="Seu melhor Email"
                    value={toMail}
                    onChange={(e) => setToMail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Motivo do contato"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <span>
                    <Button text="Enviar" onClick={sendEmail} />
                </span>
            </section>
        </section>
    );
}
