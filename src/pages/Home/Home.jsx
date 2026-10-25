import Hero from '../../components/Hero/Hero';
import CourseCard from '../../components/CourseCard/CourseCard';
import styles from './Home.module.css';
import lecturers from '../../data/lecturers';

export default function Home({ onNavigate }) {
  // Получаем первые 3 курса для показа на главной
  const popularCourses = [];
  for (let i = 0; i < 3 && i < lecturers.length; i++) {
    if (lecturers[i].subjects.length > 0) {
      popularCourses.push({
        subject: lecturers[i].subjects[0],
        lecturerName: lecturers[i].name
      });
    }
  }

  return (
    <div className={styles.home}>
      {/* Hero-баннер */}
      <Hero onNavigate={onNavigate} />

      {/* Преимущества платформы */}
      <section className={styles.advantages}>
        <div className={styles.advantageCard}>
          <div className={styles.advantageIcon}>‍🏫</div>
          <h3 className={styles.advantageTitle}>Опытные лекторы</h3>
          <p className={styles.advantageText}>
            10 профессионалов с учёными степенями и многолетним стажем преподавания
          </p>
        </div>

        <div className={styles.advantageCard}>
          <div className={styles.advantageIcon}>📚</div>
          <h3 className={styles.advantageTitle}>30 дисциплин</h3>
          <p className={styles.advantageText}>
            От программирования до психологии — выбирайте то, что интересно именно вам
          </p>
        </div>

        <div className={styles.advantageCard}>
          <div className={styles.advantageIcon}>💻</div>
          <h3 className={styles.advantageTitle}>Онлайн и офлайн</h3>
          <p className={styles.advantageText}>
            Учитесь из любой точки мира или приходите на очные занятия
          </p>
        </div>

        <div className={styles.advantageCard}>
          <div className={styles.advantageIcon}>🎯</div>
          <h3 className={styles.advantageTitle}>Индивидуальный подход</h3>
          <p className={styles.advantageText}>
            Программа адаптируется под ваш уровень и цели обучения
          </p>
        </div>
      </section>

      {/* Популярные курсы */}
      <section className={styles.popularCourses}>
        <h2 className={styles.sectionTitle}>Популярные курсы</h2>
        <div className={styles.coursesGrid}>
          {popularCourses.map((course, index) => (
            <CourseCard
              key={index}
              subject={course.subject}
              lecturerName={course.lecturerName}
              onViewDetails={() => onNavigate('courses')}
            />
          ))}
        </div>
      </section>

      {/* Призыв к действию */}
      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>Готовы начать обучение?</h2>
        <p className={styles.ctaText}>
          Выберите курс и запишитесь на первое занятие уже сегодня!
        </p>
        <button 
          className={styles.ctaButton}
          onClick={() => onNavigate('lecturers')}
        >
          Посмотреть лекторов
        </button>
      </section>
    </div>
  );
}