import { useState, useEffect } from "react";
import "../styles/utility.css";
import "../styles/header.css";
import Logo from "../assets/logo.svg";
import Menu from "../assets/menu.svg";
import Close from "../assets/x-circle.svg";
import Button from "./Button";

export default function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

        useEffect(() => {
            if (showMobileMenu) {
                document.documentElement.style.overflowY = 'hidden';
            } else {
                document.documentElement.style.overflowY = 'auto';
            }
        }, [showMobileMenu]);

        const handleMenuClick = () => {
          setShowMobileMenu(false)  
        };

    return (
        <>
            <div className="background">
                <header className="container py-sm">
                    <nav className="flex items-center justify-between">
                        <img src={Logo} alt="Logo Avali.up" width={220} height={80} />
                        <div className="desktop-only">
                            <ul className="flex gap-1">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#solution">Soluções</a>
                                </li>
                                <li>
                                    <a href="#testimonials">Depoimentos</a>
                                </li>
                                <li>
                                    <a href="#reviews">Avaliações</a>
                                </li>
                                <li>
                                    <a href="#contact">Contato</a>
                                </li>
                            </ul>
                        </div>
                        <div className="desktop-only">
                            <div className="flex items-center">
                                <a className="ml-lg" href="">Login</a>
                                <Button text="Cadastre-se" secondary />
                            </div>
                        </div>
                        <div className="mobile-menu">
                            {showMobileMenu ?
                                <div className="mobile-menu-content">
                                    <div className="container flex">
                                        <ul>
                                            <li>
                                                <a href="#" onClick={handleMenuClick}>Home</a>
                                            </li>
                                            <li>
                                                <a href="#solution" onClick={handleMenuClick}>Soluções</a>
                                            </li>
                                            <li>
                                                <a href="#testimonials" onClick={handleMenuClick}>Depoimentos</a>
                                            </li>
                                            <li>
                                                <a href="#pricing" onClick={handleMenuClick}>Preços</a>
                                            </li>
                                            <li>
                                                <a href="#contact" onClick={handleMenuClick}>Contato</a>
                                            </li>
                                            <li>
                                                <a href="#" onClick={handleMenuClick}>Login</a>
                                            </li>
                                        </ul>
                                        <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                            <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                        </span>
                                    </div>
                                </div>
                                :
                                <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                    <img src={Menu} alt="ícone menu" width={24} height={24} />
                                </span>
                            }
                        </div>
                    </nav>
                </header>
            </div>
        </>
    );
}
