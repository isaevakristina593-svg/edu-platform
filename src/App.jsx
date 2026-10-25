import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Lecturers from './pages/Lecturers/Lecturers';
import LecturerDetail from './pages/LecturerDetail/LecturerDetail';
import Courses from './pages/Courses/Courses';
import Pricing from './pages/Pricing/Pricing';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import styles from './styles/theme.module.css';

function App() {
  // Состояние текущей страницы (по умолчанию — главная)
  const [currentPage, setCurrentPage] = useState('home');
  
  // Состояние темы (false = светлая, true = тёмная)
  const [isDark, setIsDark] = useState(false);
  
  // Состояние выбранного лектора (для страницы деталей)
  const [selectedLecturerId, setSelectedLecturerId] = useState(null);

  // Функция навигации между страницами
  const handleNavigate = (page, id = null) => {
    setCurrentPage(page);
    if (id !== null) {
      setSelectedLecturerId(id);
    }
    // Прокручиваем страницу вверх при переходе
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Функция переключения темы
  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  // Объект со страницами (оптимизация вместо множества условий)
  const pages = {
    home: <Home onNavigate={handleNavigate} />,
    lecturers: <Lecturers onNavigate={handleNavigate} />,
    lecturerDetail: (
      <LecturerDetail 
        lecturerId={selectedLecturerId} 
        onNavigate={handleNavigate} 
      />
    ),
    courses: <Courses onNavigate={handleNavigate} />,
    pricing: <Pricing onNavigate={handleNavigate} />,
    about: <About onNavigate={handleNavigate} />,
    contacts: <Contacts onNavigate={handleNavigate} />
  };

  return (
    <div className={`${styles.app} ${isDark ? styles.dark : styles.light}`}>
      {/* Навигация (видна на всех страницах) */}
      <Navbar 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      {/* Основной контент — текущая страница */}
      <main className={styles.container}>
        {pages[currentPage]}
      </main>
      
      {/* Подвал (виден на всех страницах) */}
      <Footer />
    </div>
  );
}

export default App;