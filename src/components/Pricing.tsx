import "../styles/utility.css";
import "../styles/index.css";
import "../styles/pricing.css";
import Check from "../assets/check.svg";
import Button from "./Button";

export default function Pricing() {
    return (
        <>
            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos planos</h2>
                </header>
                <section className="even-columns gap-1.5">
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Básico</h3>
                            <p>Acesso básico a avaliações de periféricos.</p>
                        </span><h2>Grátis</h2><Button text="Pedir agora" key="premium" /><span className="hr" /><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Visualização limitada de comparativos entre produtos</p>
                        </span><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Atualizações mensais de conteúdos e análises</p>
                        </span>
                    </div>
                    <div className="pricing-card premium">
                        <span className="bonus"><p>1º MÊS COM DESCONTO</p></span><span className="plan">
                            <h3>Premium</h3>
                            <p>Todos os benefícios do Plano Econômico.</p>
                        </span><span className="price">
                            <h2>R$ 39,90</h2>
                            <p>/mês</p>
                        </span><Button text="Pedir agora" key="premium" /><span className="hr" /><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Acesso exclusivo a análises detalhadas e guias técnicos avançados</p>
                        </span><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Suporte prioritário para dúvidas e recomendações</p>
                        </span><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Ferramenta avançada de comparação personalizada</p>
                        </span>
                    </div>
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Econômico</h3>
                            <p>Acesso total a todas as avaliações e análises do site.</p>
                        </span><span className="price"><h2>R$ 19,90</h2><p>/mês</p></span><Button text="Pedir agora" key="premium" /><span className="hr" /><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Comparativos ilimitados entre produtos</p>
                        </span><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Alertas de novos lançamentos e tendências do mercado</p>
                        </span>
                    </div>
                </section>
            </section>
        </>
    )
}