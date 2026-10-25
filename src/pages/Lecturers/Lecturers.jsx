import { useState } from 'react';
import LecturerCard from '../../components/LecturerCard/LecturerCard';
import styles from './Lecturers.module.css';
import lecturers from '../../data/lecturers';

export default function Lecturers({ onNavigate }) {
  // Состояние для хранения выбранного фильтра
  const [genderFilter, setGenderFilter] = useState('all');

  // Фильтрация лекторов по полу
  const filteredLecturers = lecturers.filter(lecturer => {
    if (genderFilter === 'all') return true;
    return lecturer.gender === genderFilter;
  });

  // Обработчик клика на кнопку "Подробнее"
  const handleViewDetails = (lecturerId) => {
    // Переход на страницу деталей лектора
    // В будущем здесь будет передача ID лектора
    onNavigate('lecturerDetail', lecturerId);
  };

  return (
    <div className={styles.lecturers}>
      {/* Заголовок страницы */}
      <div className={styles.header}>
        <h1 className={styles.title}>Наши лекторы</h1>
        <p className={styles.subtitle}>
          Познакомьтесь с нашей командой профессиональных преподавателей
        </p>
      </div>

      {/* Фильтры по полу */}
      <div className={styles.filters}>
        <button
          className={`${styles.filterButton} ${genderFilter === 'all' ? styles.filterButtonActive : ''}`}
          onClick={() => setGenderFilter('all')}
        >
          👥 Все ({lecturers.length})
        </button>

        <button
          className={`${styles.filterButton} ${genderFilter === 'male' ? styles.filterButtonActive : ''}`}
          onClick={() => setGenderFilter('male')}
        >
          👨‍🏫 Мужчины ({lecturers.filter(l => l.gender === 'male').length})
        </button>

        <button
          className={`${styles.filterButton} ${genderFilter === 'female' ? styles.filterButtonActive : ''}`}
          onClick={() => setGenderFilter('female')}
        >
          👩‍🏫 Женщины ({lecturers.filter(l => l.gender === 'female').length})
        </button>
      </div>

      {/* Сетка карточек лекторов */}
      {filteredLecturers.length > 0 ? (
        <div className={styles.grid}>
          {filteredLecturers.map((lecturer) => (
            <LecturerCard
              key={lecturer.id}
              lecturer={lecturer}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      ) : (
        <div className={styles.emptyMessage}>
           Лекторы не найдены
        </div>
      )}

      {/* Счётчик отображаемых лекторов */}
      <div className={styles.counter}>
        Показано лекторов: {filteredLecturers.length} из {lecturers.length}
      </div>
    </div>
  );
}