import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import "../styles/utility.css";
import "../styles/hero.css";
import "../styles/index.css";
import Button from "./Button"

export default function Hero() {
    return (
        <>
            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
                </span>
                <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />
                <div className="container content">
                    <p className="desktop-only">
                        Olá
                    </p><h1>Encontre as melhores avaliações de periféricos em um só lugar!</h1><p>Está procurando uma análise real de como é o produto que você deseja comprar? Acesse o Avali.up já!</p><div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" />
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}