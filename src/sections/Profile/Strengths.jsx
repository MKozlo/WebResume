import React from 'react'
import styles from './StrengthsStyles.module.css';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import { useTheme } from '../../common/ThemeContext';

function Strengths() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  
  return (
    <section id='strengths' className={styles.container}>
      <section id="co-mnie-wyroznia">
        <h3>Co mnie wyróżnia?</h3>
        <p className={styles.description}>
        Jestem osobą, która łączy analityczne myślenie z determinacją i <b>chęcią nieustannego rozwoju</b>. Potrafię skutecznie zarządzać czasem i obowiązkami, co udowodniłam, łącząc naukę, pracę, praktyki, studia dzienne, a wcześniej nawet dodatkowe zatrudnienie. Szybko się uczę i z entuzjazmem przyswajam nowe technologie oraz umiejętności, stawiając sobie coraz ambitniejsze cele, które realizuję z konsekwencją i zaangażowaniem.<br/><br/>
        W pracy zespołowej jestem komunikatywna, otwarta i empatyczna. Sprawnie odnajduję się w dynamicznych środowiskach i zmieniających się warunkach.<br/><br/>
        <b>Ogromną wagę przywiązuję do feedbacku</b> - zarówno w jego udzielaniu, jak i przyjmowaniu. Wierzę, że konstruktywna wymiana uwag to klucz do osobistego i zawodowego rozwoju, a także do doskonalenia efektów wspólnej pracy.<br/><br/>
        To, co mnie wyróżnia, to przede wszystkim <b>pasja do nauki, umiejętność współpracy i nieustanne dążenie do osiągania coraz wyższego poziomu</b> - w życiu, w pracy, i w relacjach z innymi.
        </p>
      </section>
    </section>
  )
}

export default Strengths;