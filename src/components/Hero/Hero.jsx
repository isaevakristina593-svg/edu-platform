import styles from './Hero.module.css';

export default function Hero({ onNavigate }) {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        {/* Главный заголовок */}
        <h1 className={styles.title}>
          Добро пожаловать в Учебную платформу
        </h1>

        {/* Описание платформы */}
        <p className={styles.subtitle}>
          Онлайн и офлайн обучение с лучшими преподавателями. 
          Мы предлагаем индивидуальные занятия, групповые курсы 
          и корпоративные тренинги по различным дисциплинам.
        </p>

        {/* Кнопка призыва к действию */}
        <button 
          className={styles.button}
          onClick={() => onNavigate('courses')}
        >
          Посмотреть курсы
        </button>

        {/* Статистика платформы */}
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>10</span>
            <span className={styles.statLabel}>Опытных лекторов</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>30</span>
            <span className={styles.statLabel}>Дисциплин</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>500+</span>
            <span className={styles.statLabel}>Довольных студентов</span>
          </div>
        </div>
      </div>
    </div>
  );
}