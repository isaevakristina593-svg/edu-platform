import { useState, useMemo } from 'react';
import styles from './Pricing.module.css';
import lecturers from '../../data/lecturers';

export default function Pricing({ onNavigate }) {
  // Состояние для фильтра по лектору
  const [selectedLecturer, setSelectedLecturer] = useState('all');
  
  // Состояние для сортировки
  const [sortBy, setSortBy] = useState('default');

  // Создаём плоский список всех тарифов
  const allPrices = useMemo(() => {
    const prices = [];
    lecturers.forEach(lecturer => {
      lecturer.prices.forEach((price, index) => {
        prices.push({
          id: `${lecturer.id}-${index}`,
          lecturerId: lecturer.id,
          lecturerName: lecturer.name,
          type: price.type,
          cost: price.cost,
          // Извлекаем число из строки цены для сортировки (например, "2500 ₽" → 2500)
          costNumber: parseInt(price.cost.replace(/\D/g, '')) || 0
        });
      });
    });
    return prices;
  }, []);

  // Применяем фильтры и сортировку
  const filteredPrices = useMemo(() => {
    let result = [...allPrices];

    // Фильтр по лектору
    if (selectedLecturer !== 'all') {
      result = result.filter(price => price.lecturerId === parseInt(selectedLecturer));
    }

    // Сортировка
    if (sortBy === 'priceAsc') {
      result.sort((a, b) => a.costNumber - b.costNumber);
    } else if (sortBy === 'priceDesc') {
      result.sort((a, b) => b.costNumber - a.costNumber);
    } else if (sortBy === 'nameAsc') {
      result.sort((a, b) => a.lecturerName.localeCompare(b.lecturerName));
    }

    return result;
  }, [allPrices, selectedLecturer, sortBy]);

  // Создаём данные для таблицы сравнения (по типам тарифов)
  const comparisonData = useMemo(() => {
    // Группируем тарифы по типу (берём первые 3 уникальных типа)
    const typeGroups = {};
    allPrices.forEach(price => {
      // Нормализуем тип (берём часть до ":")
      const normalizedType = price.type.split(':')[0].trim();
      if (!typeGroups[normalizedType]) {
        typeGroups[normalizedType] = [];
      }
      typeGroups[normalizedType].push(price);
    });

    return typeGroups;
  }, [allPrices]);

  // Обработчик клика "Записаться"
  const handleEnroll = (lecturerId) => {
    onNavigate('lecturerDetail', lecturerId);
  };

  return (
    <div className={styles.pricing}>
      {/* Заголовок страницы */}
      <div className={styles.header}>
        <h1 className={styles.title}>Тарифы на обучение</h1>
        <p className={styles.subtitle}>
          Выберите удобный формат обучения и подходящего преподавателя
        </p>
      </div>

      {/* Панель управления */}
      <div className={styles.controls}>
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

        <select
          className={styles.sortSelect}
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="default">📋 По умолчанию</option>
          <option value="priceAsc">💰 По возрастанию цены</option>
          <option value="priceDesc">💎 По убыванию цены</option>
          <option value="nameAsc">🔤 По имени лектора (А-Я)</option>
        </select>
      </div>

      {/* Информационный блок */}
      <div className={styles.infoBox}>
        <h3 className={styles.infoTitle}>💡 Как выбрать тариф?</h3>
        <p className={styles.infoText}>
          <strong>Индивидуальное занятие</strong> — идеально для первого знакомства с преподавателем 
          или разовой консультации. <strong>Пакет из 8 занятий</strong> — выгоднее на 10-15%, 
          подходит для системного обучения. <strong>Специальные форматы</strong> (интенсивы, 
          подготовка к экзаменам) — для конкретных целей с ограниченным сроком.
        </p>
      </div>

      {/* Таблица сравнения тарифов */}
      <section className={styles.comparisonSection}>
        <h2 className={styles.sectionTitle}>Сравнение тарифов по типам</h2>
        
        <table className={styles.comparisonTable}>
          <thead>
            <tr>
              <th>Лектор</th>
              <th>Индивидуальное занятие</th>
              <th>Пакет из 8 занятий</th>
              <th>Специальный формат</th>
            </tr>
          </thead>
          <tbody>
            {lecturers
              .filter(l => selectedLecturer === 'all' || l.id === parseInt(selectedLecturer))
              .map(lecturer => (
                <tr key={lecturer.id}>
                  <td>
                    <strong>{lecturer.name}</strong>
                    <br />
                    <small style={{ color: 'var(--text-muted)' }}>
                      {lecturer.degree && lecturer.degree !== 'нет' ? lecturer.degree : 'Преподаватель'}
                    </small>
                  </td>
                  <td className={styles.priceCell}>
                    {lecturer.prices[0]?.cost || '—'}
                  </td>
                  <td className={styles.priceCell}>
                    {lecturer.prices[1]?.cost || '—'}
                  </td>
                  <td className={styles.priceCell}>
                    {lecturer.prices[2]?.cost || '—'}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>

      {/* Карточки тарифов */}
      <section className={styles.cardsSection}>
        <h2 className={styles.sectionTitle}>Все тарифы</h2>
        
        <div className={styles.cardsGrid}>
          {filteredPrices.map((price) => (
            <div key={price.id} className={styles.priceCard}>
              <p className={styles.lecturerName}>
                👨‍ {price.lecturerName}
              </p>
              <h3 className={styles.priceType}>
                {price.type}
              </h3>
              <p className={styles.priceCost}>
                {price.cost}
              </p>
              <button
                className={styles.enrollButton}
                onClick={() => handleEnroll(price.lecturerId)}
              >
                Записаться
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}