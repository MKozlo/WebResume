import React, { useState } from 'react';
import styles from './NavStyles.module.css';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import { useTheme } from '../../common/ThemeContext';
import { Link } from 'react-router-dom';

function Nav() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;

    // Stan do obsługi rozwijanego menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            // Oblicz wysokość nagłówka
            const headerOffset = document.querySelector('nav') ? document.querySelector('nav').offsetHeight : 0;
            const elementPosition = section.offsetTop;  // Zmieniamy z getBoundingClientRect().top na offsetTop
            const offsetPosition = elementPosition - headerOffset;
    
            // Sprawdzamy, czy jesteśmy już w tej sekcji
            const isInSection = window.pageYOffset >= offsetPosition && window.pageYOffset < offsetPosition + section.offsetHeight;
    
            // Jeśli nie jesteśmy w tej sekcji, wykonujemy przewijanie
            if (!isInSection) {
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };
    
            

    return (
        <nav id="nav" className={styles.container}>
            <div className={styles.navContent}>
                {/* Logo */}
                <div className={styles.images}>
                    <div className={styles.logo}>
                        <a href="#">
                            <img src="/public/MK.ico" alt="Logo" />
                        </a>
                    </div>
                </div>

                {/* Hamburger menu (tylko dla małych ekranów) */}
                <button
                    className={styles.hamburger}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    ☰ {/* Ikona hamburgera */}
                </button>

                {/* Menu */}
                <div className={`${styles.text} ${isMenuOpen ? styles.menuOpen : ''}`}>
                    <ul className={styles.menu}>
                        <li className={styles.menuItem}>
                            <a href="index.html">O mnie</a>
                            <ul className={styles.submenu}>
                                <li><a href="#">Profil osobisty</a></li>
                                <ul>
                                <li><a href="#" onClick={() => scrollToSection("kim-jestem")}>Kim jestem?</a></li>
                                <li><a href="#" onClick={() => scrollToSection("co-mnie-wyroznia")}>Co mnie wyróżnia?</a></li>
                                <li><a href="#" onClick={() => scrollToSection("dlaczego-to-robie")}>Dlaczego to robię?</a></li>
                                </ul>
                                <li><a href="wyksztalcenie.html">Wykształcenie</a></li>
                                <li><a href="zainteresowania.html">Moje zainteresowania</a></li>
                            </ul>
                        </li>
                        <li className={styles.menuItem}>
                            <a href="#">Kariera</a>
                            <ul className={styles.submenu}>
                                <li><a href="#">Portfolio w liczbach</a></li>
                                <li><a href="#">Pracuję z...</a></li>
                                <ul>
                                    <li><a href="#">HTML, CSS, JavaScript</a></li>
                                    <li><a href="#">C#, C++</a></li>
                                    <li><a href="#">Python</a></li>
                                    <li><a href="#">MySQL</a></li>
                                    <li><a href="#">Linux</a></li>
                                </ul>
                                <li><a href="#">Certyfikaty</a></li>
                                <li><a href="#">Moja ścieżka kariery</a></li>
                            </ul>
                        </li>
                        <li className={styles.menuItem}>
                            <a href="#">Projekty</a>
                        </li>
                        <li className={styles.menuItem}>
                            <a href="#">Kontakt</a>
                            <ul className={styles.submenu}>
                                <li><a href="#">Dane kontaktowe</a></li>
                                <li><a href="#">LinkedIn</a></li>
                                <li><a href="#">E-mail</a></li>
                                <li><a href="#">Adres pocztowy</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                {/* Przełącznik trybu kolorów */}
                <div className={styles.colorModeContainer}>
                    <img
                        className={styles.colorMode}
                        src={themeIcon}
                        alt="Color Mode Icon"
                        onClick={toggleTheme}
                    />
                </div>
            </div>
        </nav>
    );
}

export default Nav;
