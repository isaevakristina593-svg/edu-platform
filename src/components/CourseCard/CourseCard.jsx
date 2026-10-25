import styles from './CourseCard.module.css';

export default function CourseCard({ subject, lecturerName, onViewDetails }) {
  return (
    <div className={styles.card}>
      {/* Заголовок и имя лектора */}
      <div className={styles.header}>
        <h3 className={styles.title}>{subject.title}</h3>
        <p className={styles.lecturer}>
           Преподаватель: {lecturerName}
        </p>
      </div>

      {/* Описание курса */}
      <p className={styles.description}>
        {subject.description}
      </p>

      {/* Информация о количестве тем */}
      <div className={styles.topicsInfo}>
         Тем: {subject.topics.length}
      </div>

      {/* Кнопка "Подробнее" */}
      <button 
        className={styles.button}
        onClick={() => onViewDetails(subject.title)}
      >
        Подробнее
      </button>
    </div>
  );
}