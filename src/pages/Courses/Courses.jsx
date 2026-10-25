import { useState, useMemo } from 'react';
import CourseCard from '../../components/CourseCard/CourseCard';
import styles from './Courses.module.css';
import lecturers from '../../data/lecturers';

export default function Courses({ onNavigate }) {
  // Состояние для поиска
  const [searchQuery, setSearchQuery] = useState('');
  
  // Состояние для фильтра по лектору
  const [selectedLecturer, setSelectedLecturer] = useState('all');

  // Создаём плоский список всех дисциплин с информацией о лекторе
  const allCourses = useMemo(() => {
    const courses = [];
    lecturers.forEach(lecturer => {
      lecturer.subjects.forEach(subject => {
        courses.push({
          subject: subject,
          lecturerName: lecturer.name,
          lecturerId: lecturer.id
        });
      });
    });
    return courses;
  }, []);

  // Применяем фильтры
  const filteredCourses = useMemo(() => {
    let result = allCourses;

    // Фильтр по лектору
    if (selectedLecturer !== 'all') {
      result = result.filter(course => course.lecturerId === parseInt(selectedLecturer));
    }

    // Фильтр по поиску
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(course => 
        course.subject.title.toLowerCase().includes(query) ||
        course.subject.description.toLowerCase().includes(query)
      );
    }

    return result;
  }, [allCourses, searchQuery, selectedLecturer]);

  // Обработчик клика на "Подробнее"
  const handleViewDetails = (subjectTitle) => {
    // Находим лектора по названию дисциплины
    const lecturer = lecturers.find(l => 
      l.subjects.some(s => s.title === subjectTitle)
    );
    
    if (lecturer) {
      onNavigate('lecturerDetail', lecturer.id);
    }
  };

  return (
    <div className={styles.courses}>
      {/* Заголовок страницы */}
      <div className={styles.header}>
        <h1 className={styles.title}>Все дисциплины</h1>
        <p className={styles.subtitle}>
          Выберите интересующий вас курс из {allCourses.length} доступных дисциплин
        </p>
      </div>

      {/* Панель управления: поиск и фильтр */}
      <div className={styles.controls}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="🔍 Поиск по названию или описанию..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select
          className={styles.filterSelect}
          value={selectedLecturer}
          onChange={(e) => setSelectedLecturer(e.target.value)}
        >
          <option value="all">👥 Все лекторы</option>
          {lecturers.map(lecturer => (
            <option key={lecturer.id} value={lecturer.id}>
              {lecturer.name}
            </option>
          ))}
        </select>
      </div>

      {/* Сетка карточек курсов */}
      {filteredCourses.length > 0 ? (
        <div className={styles.grid}>
          {filteredCourses.map((course, index) => (
            <CourseCard
              key={`${course.lecturerId}-${index}`}
              subject={course.subject}
              lecturerName={course.lecturerName}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      ) : (
        <div className={styles.emptyMessage}>
          <div className={styles.emptyIcon}></div>
          <p>По вашему запросу ничего не найдено</p>
          <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Попробуйте изменить параметры поиска
          </p>
        </div>
      )}

      {/* Счётчик отображаемых курсов */}
      <div className={styles.counter}>
        Показано дисциплин: {filteredCourses.length} из {allCourses.length}
      </div>
    </div>
  );
}