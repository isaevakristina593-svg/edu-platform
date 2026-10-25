import styles from './LecturerCard.module.css';

export default function LecturerCard({ lecturer, onViewDetails }) {
  return (
    <div className={styles.card}>
      {/* Фото лектора */}
      <div className={styles.photoContainer}>
        {lecturer.photo ? (
          <img 
            src={lecturer.photo} 
            alt={lecturer.name} 
            className={styles.photo}
          />
        ) : (
          <div className={styles.photoPlaceholder}>
            {lecturer.gender === 'male' ? '‍🏫' : '👩‍🏫'}
          </div>
        )}
      </div>

      {/* Информация о лекторе */}
      <div className={styles.info}>
        <h3 className={styles.name}>{lecturer.name}</h3>
        
        <p className={styles.education}>
          🎓 {lecturer.education}
        </p>
        
        <p className={styles.experience}>
          ⏱️ Стаж: {lecturer.experience} лет
        </p>
        
        {lecturer.degree && lecturer.degree !== 'нет' && (
          <p className={styles.degree}>
            🏆 {lecturer.degree}
          </p>
        )}
        
        <p className={styles.subjectsCount}>
           Преподаёт дисциплин: {lecturer.subjects.length}
        </p>
      </div>

      {/* Кнопка "Подробнее" */}
      <button 
        className={styles.button}
        onClick={() => onViewDetails(lecturer.id)}
      >
        Подробнее
      </button>
    </div>
  );
}