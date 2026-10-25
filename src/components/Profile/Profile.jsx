import styles from './Profile.module.css';

export default function Profile() {
  const achievements = [
    'Создатель современного русского литературного языка',
    'Автор романа в стихах «Евгений Онегин»',
    'Поэт, драматург, прозаик',
    'Основатель новой русской литературы'
  ];

  return (
    <div className={styles.profileCard}>
      <img 
        src="/pushkin.jpg" 
        alt="Александр Пушкин" 
        className={styles.photo}
      />
      <h1 className={styles.name}>Александр Сергеевич Пушкин</h1>
      <p className={styles.dates}>1799 – 1837</p>
      
      <p className={styles.description}>
        Великий русский поэт, драматург и прозаик, реформатор русского литературного языка. 
        Классик мировой литературы.
      </p>

      <a 
        href="https://ru.wikipedia.org/wiki/Пушкин,_Александр_Сергеевич" 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.wikiLink}
      >
        📖 Подробнее на Википедии
      </a>

      <h3 style={{ marginTop: '2rem', color: '#2c3e50' }}>Основные достижения:</h3>
      <ul className={styles.achievementsList}>
        {achievements.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}