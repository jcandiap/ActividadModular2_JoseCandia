$(document).ready(function () {
  const textsToChange = $('[data-section]');

  const getNestedValue = (obj, path) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  };

  const changeLanguage = async (lang) => {
    try {
      const response = await fetch('../data/lang.json');
      const data = await response.json();

      textsToChange.each(function () {
        const path = $(this).data('section');
        const translation = getNestedValue(data[lang], path);

        if (translation) {
          $(this).html(translation);
        }
      });

      localStorage.setItem('preferred-lang', lang);
      $('html').attr('lang', lang);
    } catch (error) {
      console.error("Error al cargar el idioma:", error);
    }
  };

  $('.lang-switch').on('click', function () {
    changeLanguage($(this).data('lang'));
  });
  
  const savedLang = localStorage.getItem('preferred-lang') || 'es';
  changeLanguage(savedLang);
});