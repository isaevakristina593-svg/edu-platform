import { useState } from 'react';
import styles from './Contacts.module.css';

export default function Contacts({ onNavigate }) {
  // Состояния для полей формы
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Состояние для ошибок
  const [errors, setErrors] = useState({});

  // Состояние для сообщения об успехе
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Контактная информация
  const contactInfo = [
    { icon: '📧', title: 'Email', value: 'info@edu-platform.ru' },
    { icon: '📞', title: 'Телефон', value: '+7 (999) 123-45-67' },
    { icon: '📍', title: 'Адрес', value: 'г. Москва, ул. Образовательная, д. 10' },
    { icon: '🕐', title: 'Время работы', value: 'Пн-Пт: 9:00 - 21:00\nСб: 10:00 - 18:00' }
  ];

  // Дополнительная информация
  const additionalInfo = [
    'Ответим на ваше сообщение в течение 24 часов',
    'Бесплатная консультация перед началом обучения',
    'Возможность пробного занятия со скидкой 50%',
    'Гибкий график занятий — подберём удобное время'
  ];

  // Обработчик изменения полей формы
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Убираем ошибку при изменении поля
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  // Валидация формы
  const validateForm = () => {
    const newErrors = {};

    // Проверка имени
    if (!formData.name.trim()) {
      newErrors.name = 'Пожалуйста, введите ваше имя';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Имя должно содержать минимум 2 символа';
    }

    // Проверка email
    if (!formData.email.trim()) {
      newErrors.email = 'Пожалуйста, введите email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Пожалуйста, введите корректный email (например: user@example.com)';
    }

    // Проверка сообщения
    if (!formData.message.trim()) {
      newErrors.message = 'Пожалуйста, введите сообщение';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Сообщение должно содержать минимум 10 символов';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Возвращаем true, если ошибок нет
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы

    if (validateForm()) {
      // Здесь обычно был бы запрос к серверу
      // Но так как у нас нет бэкенда, просто показываем сообщение об успехе
      console.log('Отправленные данные:', formData);
      setIsSubmitted(true);
      
      // Очищаем форму
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Через 5 секунд скрываем сообщение об успехе
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  return (
    <div className={styles.contacts}>
      {/* Заголовок страницы */}
      <div className={styles.header}>
        <h1 className={styles.title}>Свяжитесь с нами</h1>
        <p className={styles.subtitle}>
          Остались вопросы? Мы всегда рады помочь! Заполните форму обратной связи 
          или свяжитесь с нами любым удобным способом.
        </p>
      </div>

      {/* Контактная информация */}
      <section className={styles.infoSection}>
        {contactInfo.map((info, index) => (
          <div key={index} className={styles.infoCard}>
            <div className={styles.infoIcon}>{info.icon}</div>
            <h3 className={styles.infoTitle}>{info.title}</h3>
            <p className={styles.infoValue}>{info.value}</p>
          </div>
        ))}
      </section>

      {/* Форма обратной связи */}
      <section className={styles.formSection}>
        <h2 className={styles.formTitle}>Форма обратной связи</h2>
        <p className={styles.formDescription}>
          Заполните форму ниже, и мы свяжемся с вами в ближайшее время
        </p>

        {isSubmitted ? (
          <div className={styles.successMessage}>
            <strong>✅ Сообщение отправлено!</strong>
            Спасибо за обращение. Мы ответим вам в течение 24 часов.
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            {/* Поле имени */}
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>
                Ваше имя<span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                name="name"
                className={styles.formInput}
                placeholder="Иван Иванов"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className={styles.errorMessage}>⚠️ {errors.name}</p>
              )}
            </div>

            {/* Поле email */}
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>
                Email<span className={styles.required}>*</span>
              </label>
              <input
                type="email"
                name="email"
                className={styles.formInput}
                placeholder="ivan@example.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className={styles.errorMessage}>️ {errors.email}</p>
              )}
            </div>

            {/* Поле сообщения */}
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>
                Сообщение<span className={styles.required}>*</span>
              </label>
              <textarea
                name="message"
                className={styles.formTextarea}
                placeholder="Опишите ваш вопрос или запрос..."
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className={styles.errorMessage}>⚠️ {errors.message}</p>
              )}
            </div>

            {/* Кнопка отправки */}
            <button 
              type="submit" 
              className={styles.submitButton}
            >
              📤 Отправить сообщение
            </button>
          </form>
        )}
      </section>

      {/* Дополнительная информация */}
      <section className={styles.additionalInfo}>
        <h3 className={styles.additionalTitle}>Почему стоит обратиться к нам?</h3>
        <ul className={styles.additionalList}>
          {additionalInfo.map((info, index) => (
            <li key={index} className={styles.additionalItem}>
              {info}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}