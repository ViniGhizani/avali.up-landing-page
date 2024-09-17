import "../styles/solution.css";
import "../styles/index.css";
import "../styles/utility.css";
import Mouse from "../assets/mouse.svg";
import Teclado from "../assets/teclado.svg";
import Fone from "../assets/fone.svg";

export default function Solution() {
    return (
        <>
            <section className="container" id="solution">
                <header>
                    <span>
                        <h2>Soluções</h2>
                        <span className="desktop-only">
                            <h2>O que há de melhor para você!</h2>
                        </span>
                    </span>
                    <p>
                        Avaliação é com a gente! A <strong>Avali.up</strong> já conquistou uma grande comunidade, seja você mais um deles, veja tudo que pode ganhar com nosso site.
                    </p>
                </header>
                <section className="even-columns">
                    <div className="card">
                        <img src={Mouse} alt="ícone campeão" width="64" height="64" />
                        <h3>Centralização</h3>
                        <p>
                            No Avali.up você encontra as avaliações de diversos lugares filtradas em um só, para que você encontre o que há de melhor sem perder tempo.
                        </p>
                        <hr />
                    </div>
                    <div className="card">
                        <img src={Teclado} alt="ícone campeão" width="64" height="64" />
                        <h3>Upvote</h3>
                        <p>
                            Sistema de votação para as avaliações, você pode ajudar quem te ajudou, votando na avaliação dela e comentando o que achou, é sempre bom interagir com a comunidade.
                        </p>
                        <hr />
                    </div>
                    <div className="card">
                        <img src={Fone} alt="ícone campeão" width="64" height="64" />
                        <h3>Comunidade</h3>
                        <p>
                            Nós temos uma comunidade engajada de atualizada, trazendo avaliações dos produtos mais recentes, com pessoas reais testando produtos e um feedback verdadeiro.
                        </p>
                        <hr />
                    </div>
                </section>
            </section>
        </>
    )
}