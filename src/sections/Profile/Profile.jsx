import React from 'react'
import styles from './ProfileStyles.module.css';
import profileImg from "../../assets/profile_pic_head.jpg";
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import CV from '../../assets/Kozłowska Magdalena CV.pdf'
import { useTheme } from '../../common/ThemeContext';

function Profile() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;

  return <section id='profile' className={styles.container}>
    <div className={styles.colorModeContainer}>
    <div className={styles.imageContainer}>
      <img
        className={styles.profile}
        src={profileImg}
        alt="Profile Picture of Magdalena Kozłowska"
      />
    </div>

      <img className={styles.colorMode} src={themeIcon} alt="Color Mode Icon" onClick={toggleTheme}/>
    </div>
    <div className={styles.info}>
      <h1>Magdalena Kozłowska</h1>
      <span>
        <a href="https://www.linkedin.com/in/mkozlo/" target="_blank" className={CV}>
          <i className="fab fa-linkedin socialIcon" style={{ color: theme === 'light' ? 'black' : 'white' }}></i>
        </a>
        <a
          href={CV}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault(); // Zapobiega domyślnemu zachowaniu przeglądarki
            const newTab = window.open(CV, "_blank"); // Otwórz w nowej karcie
            const link = document.createElement("a");
            link.href = CV;
            link.download = "Kozłowska_Magdalena_CV.pdf"; // Możesz ustawić własną nazwę pliku
            link.click(); // Wymuś pobranie
            if (newTab) {
              newTab.focus(); // Skup się na nowej karcie
            }
          }}
        >
          <i
            className="fas fa-file-pdf socialIcon"
            style={{ color: theme === "light" ? "black" : "white" }}
          ></i>
        </a>

        <a href="https://github.com/MKozlo" target="_blank">
          <i className="fab fa-github socialIcon" style={{ color: theme === 'light' ? 'black' : 'white' }}></i>
        </a>
      </span>
    </div>
  </section>
}

export default Profile