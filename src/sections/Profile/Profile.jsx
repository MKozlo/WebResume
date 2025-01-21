import React from 'react';
import styles from './ProfileStyles.module.css';
import profileImg from "../../assets/profile_pic_head.jpg";
import CV from '../../assets/Kozłowska Magdalena CV.pdf';
import { useTheme } from '../../common/ThemeContext';

function Profile() {
  const { theme } = useTheme(); // Zachowujemy dynamiczne theme

  return (
    <section id="profile" className={styles.container}>
      <div className={styles.profileWrapper}>
        {/* Obrazek w okręgu */}
        <div className={styles.imageContainer}>
          <img
            className={styles.profileImage}
            src={profileImg}
            alt="Profile Picture of Magdalena Kozłowska"
          />
        </div>

        {/* Nazwisko i linki */}
        <div className={styles.profileInfo}>
          <h1>Magdalena Kozłowska</h1>
          <div className={styles.socialIcons}>
            <a href="https://www.linkedin.com/in/mkozlo/" target="_blank" className={styles.socialLink}>
              <i className={`fab fa-linkedin socialIcon`} style={{ color: theme === 'light' ? 'black' : 'white' }}></i>
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
                link.download = "Kozłowska_Magdalena_CV.pdf";
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
            </div>
          </div>
      </div>

      {/* Sekcja Kim jestem? */}
      <div className={styles.descriptionContainer}>
        <h2 className={styles.hello}>Witaj, dobrze Cię widzieć!</h2>
        <h3>Kim jestem?</h3>
        <p className={styles.description}>
          <b>Jestem studentką Informatyki</b> na Uniwersytecie Kazimierza Wielkiego w Bydgoszczy, specjalizującą się w tworzeniu aplikacji i stron internetowych. <br /><br />
          Aktywnie rozwijam swoje umiejętności w obszarze web developmentu i <b>poszukuję możliwości dalszego rozwoju w branży IT</b>.
        </p>
      </div>
    </section>
  );
}

export default Profile;
