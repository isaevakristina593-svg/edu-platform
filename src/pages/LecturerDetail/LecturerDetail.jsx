import { useState } from 'react';
import styles from './LecturerDetail.module.css';
import lecturers from '../../data/lecturers';

export default function LecturerDetail({ lecturerId, onNavigate }) {
  // Состояние для отслеживания раскрытых дисциплин
  const [expandedSubjects, setExpandedSubjects] = useState({});

  // Находим лектора по ID
  const lecturer = lecturers.find(l => l.id === lecturerId);

  // Если лектор не найден, показываем сообщение
  if (!lecturer) {
    return (
      <div className={styles.lecturerDetail}>
        <div className={styles.errorMessage}>
          😔 Лектор не найден. Вернитесь к списку лекторов.
        </div>
        <button 
          className={styles.backButton}
          onClick={() => onNavigate('lecturers')}
        >
          ← Назад к списку лекторов
        </button>
      </div>
    );
  }

  // Обработчик клика на кнопку "Показать темы"
  const toggleTopics = (subjectIndex) => {
    setExpandedSubjects(prev => ({
      ...prev,
      [subjectIndex]: !prev[subjectIndex]
    }));
  };

  // Обработчик клика на "Записаться"
  const handleEnroll = () => {
    alert(`Вы выбрали лектора: ${lecturer.name}\nМы свяжемся с вами для записи на занятие!`);
    onNavigate('contacts');
  };

  return (
    <div className={styles.lecturerDetail}>
      {/* Кнопка "Назад" */}
      <button 
        className={styles.backButton}
        onClick={() => onNavigate('lecturers')}
      >
        ← Назад к списку лекторов
      </button>

      {/* Шапка с информацией о лекторе */}
      <div className={styles.header}>
        <div className={styles.photoContainer}>
          {lecturer.photo ? (
            <img 
              src={lecturer.photo} 
              alt={lecturer.name} 
              className={styles.photo}
            />
          ) : (
            <div className={styles.photoPlaceholder}>
              {lecturer.gender === 'male' ? '‍🏫' : '‍🏫'}
            </div>
          )}
        </div>

        <div className={styles.info}>
          <h1 className={styles.name}>{lecturer.name}</h1>
          <p className={styles.education}>
            🎓 Образование: {lecturer.education}
          </p>
          <p className={styles.experience}>
            ⏱️ Стаж преподавания: {lecturer.experience} лет
          </p>
          {lecturer.degree && lecturer.degree !== 'нет' && (
            <p className={styles.degree}>
              🏆 {lecturer.degree}
            </p>
          )}
        </div>
      </div>

      {/* Секция с дисциплинами */}
      <section className={styles.subjectsSection}>
        <h2 className={styles.sectionTitle}>Преподаваемые дисциплины</h2>
        
        {lecturer.subjects.map((subject, index) => (
          <div key={index} className={styles.subjectCard}>
            <h3 className={styles.subjectTitle}>
              {index + 1}. {subject.title}
            </h3>
            <p className={styles.subjectDescription}>
              {subject.description}
            </p>

            <button
              className={styles.topicsButton}
              onClick={() => toggleTopics(index)}
            >
              {expandedSubjects[index] ? ' Скрыть темы' : ' Показать темы'} 
              ({subject.topics.length})
            </button>

            {expandedSubjects[index] && (
              <ul className={styles.topicsList}>
                {subject.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className={styles.topicItem}>
                    {topic}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      {/* Секция с тарифами */}
      <section className={styles.pricingSection}>
        <h2 className={styles.sectionTitle}>Тарифы на занятия</h2>
        
        <div className={styles.pricingGrid}>
          {lecturer.prices.map((price, index) => (
            <div key={index} className={styles.priceCard}>
              <p className={styles.priceType}>{price.type}</p>
              <p className={styles.priceCost}>{price.cost}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Кнопка "Записаться" */}
      <button 
        className={styles.enrollButton}
        onClick={handleEnroll}
      >
        📝 Записаться на занятие
      </button>
    </div>
  );
}