// Навигация между секциями
const navLinks = document.querySelectorAll('#nav-list a');
const sections = document.querySelectorAll('.section');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
      e.preventDefault();

      // Убираем активный класс у всех ссылок
      navLinks.forEach(l => l.classList.remove('active'));
      // Добавляем активный класс к текущей ссылке
      link.classList.add('active');

      const target = link.getAttribute('data-section');

      // Показываем нужную секцию, скрываем остальные
      sections.forEach(section => {
          if(section.id === target){
              section.classList.add('active');
          } else{
              section.classList.remove('active');
          }
      });
  });
});

// Обработка формы обратной связи (только фронтенд)
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', e => {
  e.preventDefault();

  // Получаем данные формы (можно добавить валидацию)
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if(name && email && message){
      // Здесь можно добавить отправку данных на сервер (например fetch)
      
      formMessage.textContent = 'Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.';
      
      // Очистка формы
      form.reset();
      
      // Убираем сообщение через несколько секунд
      setTimeout(() => { formMessage.textContent = ''; },5000);
      