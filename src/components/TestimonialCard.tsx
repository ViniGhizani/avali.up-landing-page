import "../styles/utility.css";
import "../styles/index.css";
import "../styles/testimonials.css";
import ProfileImageOne from "../assets/images/client1.png";
import Star from "../assets/star.svg";
import StarOuter from "../assets/starOuter.svg";

export default function TestimonialCard() {
    return (
        <>
            <div className="carousel-card">
                <img src={ProfileImageOne} alt="Imagem perfil cliente" width={130} />
                <span className="testimony">
                    <p>
                        Um site excelente para avaliar periféricos! Análises claras, comparações úteis e avaliações de usuários me ajudaram a escolher o teclado perfeito com total confiança. Recomendo!
                    </p>
                </span>
                <span className="rating">
                    <img src={Star} alt="ícone estrela" width={22} height={20} />
                    <img src={Star} alt="ícone estrela" width={22} height={20} />
                    <img src={Star} alt="ícone estrela" width={22} height={20} />
                    <img src={Star} alt="ícone estrela" width={22} height={20} />
                    <img src={StarOuter} alt="ícone estrela sem fundo" width={20} height={22} />
                </span>
                <span className="names">
                    <p className="bold">João Silva</p>
                    <p>CLIENTE AVALI.UP</p>
                </span>
            </div>
        </>
    )
}