import React from 'react'
import styles from './MotivationStyles.module.css';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import { useTheme } from '../../common/ThemeContext';

function Motivation() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  
  return (
    <section id='strengths' className={styles.container}>
      <section id="dlaczego-to-robie">
        <h3>Dlaczego to robię?</h3>
        <section className={styles.text}>
          <h2 className={styles.option}>Szerokie możliwości rozwoju</h2>
          <p className={styles.description}>Branża IT daje mi nieograniczone możliwości rozwoju. Technologie zmieniają się w zawrotnym tempie, a to daje ogromną przestrzeń do ciągłego uczenia się i poszerzania swojej wiedzy.</p>
        </section>
        <section className={styles.text}>
          <h2 className={styles.option}>Wzrost zapotrzebowania na specjalistów IT</h2>
          <p className={styles.description}>W świecie, w którym technologie stają się coraz bardziej istotne w każdej dziedzinie życia, praca w IT daje mi stabilność i pewność przyszłości. Branża ta oferuje ogromne możliwości zatrudnienia oraz szanse na rozwój kariery w różnych obszarach. Dążę do tego, by stać się ekspertem w swojej dziedzinie i pomagać w kształtowaniu lepszej przyszłości.</p>
        </section>
        <section className={styles.text}>
          <h2 className={styles.option}>Ciągłe wyzwania i satysfakcja z rozwiązania problemu</h2>
          <p className={styles.description}>Branża IT daje mi ciągłe wyzwania i satysfakcję z rozwiązania problemów, które wydają się początkowo trudne do pokonania. Każde rozwiązanie, każda linia kodu, którą napiszę, to krok do osiągnięcia celu.</p>
        </section>
      </section>
    </section>
  )
}

export default Motivation;