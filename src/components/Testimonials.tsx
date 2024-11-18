import "../styles/utility.css";
import "../styles/index.css";
import "../styles/testimonials.css";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
    return (
        <>
            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only bold">
                            Conselho de quem conhece
                        </p>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p>
                        Quem já utilizou sabe da qualidade das nossas avaliações! Estamos quebrando o mito de que análises técnicas precisam ser complicadas.
                        Confira abaixo os depoimentos de quem já usou nosso site para escolher os melhores periféricos.
                    </p>
                </header>
                <section className="carousel">
                    <div className="carousel-content">
                        <TestimonialCard />
                        <TestimonialCard />
                        <TestimonialCard />
                    </div>
                    <div className="carousel-content">
                        <TestimonialCard />
                        <TestimonialCard />
                        <TestimonialCard />
                    </div>
                </section>
            </section>
        </>
    )
}