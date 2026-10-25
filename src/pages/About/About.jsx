import styles from './About.module.css';

export default function About({ onNavigate }) {
  // Список целей платформы
  const goals = [
    'Сделать качественное образование доступным для каждого',
    'Предоставить студентам практические навыки, востребованные на рынке',
    'Создать комфортную среду для обучения с индивидуальным подходом',
    'Помочь студентам достичь их профессиональных целей',
    'Поддерживать высокие стандарты преподавания'
  ];

  // Преимущества платформы
  const advantages = [
    {
      icon: '‍🏫',
      title: 'Опытные преподаватели',
      text: 'Все наши лекторы имеют учёные степени и многолетний опыт преподавания в ведущих вузах'
    },
    {
      icon: '📚',
      title: 'Актуальные программы',
      text: 'Программы курсов регулярно обновляются в соответствии с требованиями рынка'
    },
    {
      icon: '💻',
      title: 'Гибкий формат',
      text: 'Занимайтесь онлайн из любой точки мира или приходите на очные занятия'
    },
    {
      icon: '🎯',
      title: 'Индивидуальный подход',
      text: 'Программа адаптируется под ваш уровень, цели и темп обучения'
    },
    {
      icon: '🏆',
      title: 'Гарантия качества',
      text: 'Если занятие не оправдало ожиданий — вернём деньги или проведём бесплатно'
    },
    {
      icon: '🤝',
      title: 'Поддержка 24/7',
      text: 'Наша команда всегда на связи и готова помочь с любыми вопросами'
    }
  ];

  // Статистика платформы
  const stats = [
    { number: '10', label: 'Опытных лекторов' },
    { number: '30', label: 'Дисциплин' },
    { number: '500+', label: 'Довольных студентов' },
    { number: '98%', label: 'Рекомендуют нас' }
  ];

  // Этапы работы с платформой
  const processSteps = [
    {
      title: 'Выберите дисциплину',
      text: 'Просмотрите каталог курсов и выберите интересующую вас дисциплину. Если затрудняетесь — наши менеджеры помогут с выбором.'
    },
    {
      title: 'Выберите преподавателя',
      text: 'Ознакомьтесь с профилями лекторов, их образованием, опытом и отзывами студентов. Выберите того, кто вам подходит.'
    },
    {
      title: 'Выберите формат обучения',
      text: 'Определитесь с форматом: индивидуальное занятие, пакет из 8 занятий или специальный формат (интенсив, подготовка к экзаменам).'
    },
    {
      title: 'Запишитесь на занятие',
      text: 'Свяжитесь с нами через форму обратной связи или по телефону. Мы подберём удобное время для первого занятия.'
    },
    {
      title: 'Начните обучение',
      text: 'После первого занятия вы получите доступ к материалам курса и сможете отслеживать свой прогресс.'
    }
  ];

  // Контактная информация
  const contacts = [
    { icon: '', label: 'Email', value: 'info@edu-platform.ru' },
    { icon: '📞', label: 'Телефон', value: '+7 (999) 123-45-67' },
    { icon: '📍', label: 'Адрес', value: 'г. Москва, ул. Образовательная, д. 10' },
    { icon: '🕐', label: 'Время работы', value: 'Пн-Пт: 9:00 - 21:00, Сб: 10:00 - 18:00' }
  ];

  return (
    <div className={styles.about}>
      {/* Заголовок страницы */}
      <div className={styles.header}>
        <h1 className={styles.title}>О нашей платформе</h1>
        <p className={styles.subtitle}>
          Мы создаём современную образовательную среду, где каждый может получить 
          качественные знания от лучших преподавателей
        </p>
      </div>

      {/* Секция с миссией и целями */}
      <section className={styles.missionSection}>
        <h2 className={styles.sectionTitle}>
          🎯 Наша миссия и цели
        </h2>
        
        <p className={styles.missionText}>
          Учебная платформа — это современная образовательная среда, которая объединяет 
          опытных преподавателей и мотивированных студентов. Мы верим, что качественное 
          образование должно быть доступным каждому, независимо от возраста, места жительства 
          и уровня подготовки.
        </p>

        <p className={styles.missionText}>
          Наша миссия — помочь каждому студенту раскрыть свой потенциал и достичь 
          профессиональных целей через персонализированное обучение с лучшими преподавателями.
        </p>

        <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
          Наши ключевые цели:
        </h3>

        <ul className={styles.goalsList}>
          {goals.map((goal, index) => (
            <li key={index} className={styles.goalItem}>
              {goal}
            </li>
          ))}
        </ul>
      </section>

      {/* Секция с преимуществами */}
      <section className={styles.advantagesSection}>
        <h2 className={styles.sectionTitle}>
          ✨ Почему выбирают нас
        </h2>

        <div className={styles.advantagesGrid}>
          {advantages.map((advantage, index) => (
            <div key={index} className={styles.advantageCard}>
              <div className={styles.advantageIcon}>{advantage.icon}</div>
              <h3 className={styles.advantageTitle}>{advantage.title}</h3>
              <p className={styles.advantageText}>{advantage.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Секция со статистикой */}
      <section className={styles.statsSection}>
        <h2 className={styles.statsTitle}>Наша платформа в цифрах</h2>
        
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Секция "Как мы работаем" */}
      <section className={styles.processSection}>
        <h2 className={styles.sectionTitle}>
          📋 Как начать обучение
        </h2>

        <ol className={styles.processList}>
          {processSteps.map((step, index) => (
            <li key={index} className={styles.processItem}>
              <div className={styles.processNumber}>{index + 1}</div>
              <div className={styles.processContent}>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processText}>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Секция с контактами */}
      <section className={styles.contactsSection}>
        <h2 className={styles.sectionTitle}>
          📞 Свяжитесь с нами
        </h2>

        <p className={styles.missionText}>
          Остались вопросы? Мы всегда рады помочь! Свяжитесь с нами любым удобным способом, 
          и наши менеджеры ответят на все ваши вопросы.
        </p>

        <div className={styles.contactsGrid}>
          {contacts.map((contact, index) => (
            <div key={index} className={styles.contactItem}>
              <div className={styles.contactIcon}>{contact.icon}</div>
              <div className={styles.contactInfo}>
                <p className={styles.contactLabel}>{contact.label}</p>
                <p className={styles.contactValue}>{contact.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button 
            className={styles.enrollButton || 'button'}
            onClick={() => onNavigate('contacts')}
            style={{
              padding: '1rem 2.5rem',
              background: 'var(--accent)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            Перейти к форме обратной связи
          </button>
        </div>
      </section>
    </div>
  );
}