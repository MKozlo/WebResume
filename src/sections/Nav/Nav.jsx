import React, { useState } from 'react';
import styles from './NavStyles.module.css';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import { useTheme } from '../../common/ThemeContext';

function Nav() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Stan do obsługi menu na małych ekranach

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Przełączanie widoczności menu
    };

    return (
        <nav id="nav" className={styles.container}>
            <div className={styles.navContent}>
                <div className={styles.images}>
                    {/* Logo */}
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
                <div
                    className={`${styles.menuContainer} ${
                        isMenuOpen ? styles.open : ''
                    }`}
                >
                    <ul className={styles.menu}>
                        <li className={styles.menuItem}>
                            <a href="index.html">O mnie</a>
                            <ul className={styles.submenu}>
                                <li>
                                    <a href="#">Profil osobisty</a>
                                </li>
                                <ul>
                                    <li>
                                        <a href="#kim-jestem">Kim jestem?</a>
                                    </li>
                                    <li>
                                        <a href="#co-mnie-wyroznia">
                                            Co mnie wyróżnia?
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#dlaczego-to-robie">
                                            Dlaczego to robię?
                                        </a>
                                    </li>
                                </ul>
                                <li>
                                    <a href="wyksztalcenie.html">
                                        Wykształcenie
                                    </a>
                                </li>
                                <li>
                                    <a href="zainteresowania.html">
                                        Moje zainteresowania
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className={styles.menuItem}>
                            <a href="#">Kariera</a>
                            <ul className={styles.submenu}>
                                <li>
                                    <a href="#">Portfolio w liczbach</a>
                                </li>
                                <li>
                                    <a href="#">Pracuję z...</a>
                                </li>
                                <ul>
                                    <li>
                                        <a href="#">HTML, CSS, JavaScript</a>
                                    </li>
                                    <li>
                                        <a href="#">C#, C++</a>
                                    </li>
                                    <li>
                                        <a href="#">Python</a>
                                    </li>
                                    <li>
                                        <a href="#">MySQL</a>
                                    </li>
                                    <li>
                                        <a href="#">Linux</a>
                                    </li>
                                </ul>
                                <li>
                                    <a href="#">Certyfikaty</a>
                                </li>
                                <li>
                                    <a href="#">Moja ścieżka kariery</a>
                                </li>
                            </ul>
                        </li>
                        <li className={styles.menuItem}>
                            <a href="#">Projekty</a>
                        </li>
                        <li className={styles.menuItem}>
                            <a href="#">Kontakt</a>
                            <ul className={styles.submenu}>
                                <li>
                                    <a href="#">Dane kontaktowe</a>
                                </li>
                                <li>
                                    <a href="#">LinkedIn</a>
                                </li>
                                <li>
                                    <a href="#">E-mail</a>
                                </li>
                                <li>
                                    <a href="#">Adres pocztowy</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                {/* Ikona zmiany motywu */}
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
