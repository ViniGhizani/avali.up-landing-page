import "../styles/utility.css";
import "../styles/index.css";
import "../styles/footer.css";

export default function Footer() {
    return (
        <footer id="footer" className="container">
            <div className="footer-grid">
                <div className="footer-logo">
                    <h3>Avali.up</h3>
                    <div className="social-icons">
                        <a href="#" aria-label="Instagram"><span role="img" aria-label="Instagram">📸</span></a>
                        <a href="#" aria-label="Facebook"><span role="img" aria-label="Facebook">📘</span></a>
                        <a href="#" aria-label="YouTube"><span role="img" aria-label="YouTube">▶️</span></a>
                    </div>
                </div>
                <div className="footer-section">
                    <h3>Empresa</h3>
                    <ul>
                        <li><a href="#">Sobre nós</a></li>
                        <li><a href="#">Faça parte do time</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Funcionalidades</h3>
                    <ul>
                        <li><a href="#">Marketing</a></li>
                        <li><a href="#">Análise de dados</a></li>
                        <li><a href="#">Boot discord</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Recursos</h3>
                    <ul>
                        <li><a href="#">iOS & Android</a></li>
                        <li><a href="#">Teste a Demo</a></li>
                        <li><a href="#">Clientes</a></li>
                        <li><a href="#">API</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>©2024 Avali.up - Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
