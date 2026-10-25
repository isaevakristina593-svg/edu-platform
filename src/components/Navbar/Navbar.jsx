import styles from './Navbar.module.css';

export default function Navbar({ currentPage, setCurrentPage, isDark, toggleTheme }) {
  // Массив пунктов меню
  const menuItems = [
    { id: 'home', label: 'Главная' },
    { id: 'lecturers', label: 'Лекторы' },
    { id: 'courses', label: 'Курсы' },
    { id: 'pricing', label: 'Тарифы' },
    { id: 'about', label: 'О нас' },
    { id: 'contacts', label: 'Контакты' }
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {/* Логотип (клик возвращает на главную) */}
        <div 
          className={styles.logo}
          onClick={() => setCurrentPage('home')}
        >
           Учебная платформа
        </div>

        {/* Ссылки меню */}
        <ul className={styles.navLinks}>
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                className={`${styles.navLink} ${currentPage === item.id ? styles.navLinkActive : ''}`}
                onClick={() => setCurrentPage(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Кнопка переключения темы */}
        <button 
          className={styles.themeToggle}
          onClick={toggleTheme}
        >
          {isDark ? '☀️ Светлая' : '🌙 Тёмная'}
        </button>
      </div>
    </nav>
  );
}