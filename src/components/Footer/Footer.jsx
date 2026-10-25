import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Секция 1: О платформе */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}> Учебная платформа</h3>
          <p className={styles.footerText}>
            Онлайн и офлайн обучение с лучшими преподавателями. 
            Мы помогаем достичь ваших образовательных целей.
          </p>
        </div>

        {/* Секция 2: Контакты */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}> Контакты</h3>
          <p className={styles.footerText}>
            📧 Email: info@edu-platform.ru
          </p>
          <p className={styles.footerText}>
             Телефон: +7 (999) 123-45-67
          </p>
          <p className={styles.footerText}>
            📍 Адрес: г. Москва, ул. Образовательная, д. 10
          </p>
        </div>

        {/* Секция 3: Социальные сети */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>🌐 Мы в соцсетях</h3>
          <div className={styles.socialLinks}>
            <span className={styles.socialIcon} title="Telegram">💬</span>
            <span className={styles.socialIcon} title="VK">🔵</span>
            <span className={styles.socialIcon} title="YouTube">▶️</span>
            <span className={styles.socialIcon} title="Instagram">📷</span>
          </div>
          <p className={styles.footerText} style={{ marginTop: '1rem' }}>
            Подписывайтесь на наши обновления!
          </p>
        </div>

        {/* Секция 4: Быстрые ссылки */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>🔗 Быстрые ссылки</h3>
          <a href="#lecturers" className={styles.footerLink}>Наши лекторы</a>
          <a href="#courses" className={styles.footerLink}>Курсы</a>
          <a href="#pricing" className={styles.footerLink}>Тарифы</a>
          <a href="#contacts" className={styles.footerLink}>Контакты</a>
        </div>
      </div>

      {/* Нижняя часть с копирайтом */}
      <div className={styles.footerBottom}>
        <p>© 2026 Учебная платформа. Все права защищены.</p>
      </div>
    </footer>
  );
}