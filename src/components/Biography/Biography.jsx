import { useState } from 'react';
import styles from './Biography.module.css';

export default function Biography() {
  const [showAwards, setShowAwards] = useState(false);

  const awards = [
    'Золотая медаль за поэму «Руслан и Людмила» (1820)',
    'Признание императора Николая I (1826)',
    'Член Российской академии (1833)',
    'Камер-юнкер императорского двора (1834)'
  ];

  const works = [
    '«Евгений Онегин» (роман в стихах)',
    '«Капитанская дочка» (историческая повесть)',
    '«Пиковая дама» (повесть)',
    '«Руслан и Людмила» (поэма)',
    '«Борис Годунов» (трагедия)',
    '«Медный всадник» (поэма)',
    '«Сказка о рыбаке и рыбке»',
    '«Сказка о мёртвой царевне»'
  ];

  return (
    <div className={styles.biographyCard}>
      <h1 className={styles.title}>Биография</h1>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Детство и юность</h2>
        <p className={styles.text}>
          Александр Пушкин родился 6 июня 1799 года в Москве в дворянской семье. 
          С детства проявил исключительные литературные способности. В 1811 году 
          поступил в Царскосельский лицей, где получил прекрасное образование и 
          начал писать первые стихи.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Творческий путь</h2>
        <p className={styles.text}>
          Пушкин стал реформатором русского литературного языка, сблизив его с 
          народной речью. Его творчество охватывает все жанры: лирику, поэмы, 
          драматургию, прозу. Создал реалистический роман в стихах «Евгений Онегин».
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Основные произведения</h2>
        <ul className={styles.worksList}>
          {works.map((work, index) => (
            <li key={index}>{work}</li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Награды и признание</h2>
        <p className={styles.text}>
          За свой творческий путь Пушкин получил множество наград и признаний.
        </p>
        <button 
          onClick={() => setShowAwards(!showAwards)}
          className={styles.awardsButton}
        >
          {showAwards ? 'Скрыть награды' : 'Показать награды'}
        </button>
        
        {showAwards && (
          <ul className={styles.awardsList}>
            {awards.map((award, index) => (
              <li key={index}>{award}</li>
            ))}
          </ul>
        )}
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Смерть</h2>
        <p className={styles.text}>
          Александр Сергеевич Пушкин трагически погиб 10 февраля 1837 года в 
          Санкт-Петербурге на дуэли с Жоржем Дантесом. Его смерть стала 
          национальной трагедией для России.
        </p>
      </div>
    </div>
  );
}