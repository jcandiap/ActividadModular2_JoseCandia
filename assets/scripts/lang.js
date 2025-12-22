$(document).ready(function () {
  const textsToChange = $('[data-section]');

  const getNestedValue = (obj, path) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  };

  const renderExperience = (jobs) => {
    const container = $('#experience-list');
    container.empty();

    if (!jobs || jobs.length === 0) return;

    jobs.forEach(job => {
        let tasksHtml = '';
        if (job.tasks && job.tasks.length > 0) {
            tasksHtml = job.tasks
                .filter(task => task.trim() !== "") // Filter out empty strings
                .map(task => `<li>${task}</li>`)
                .join('');
        }
        
        const ulHtml = tasksHtml ? `<ul>${tasksHtml}</ul>` : '';

        const jobHtml = `
            <div class="card mb-1 border-0">
                <div class="card-body">
                    <div class="d-flex justify-content-between flex-wrap gap-2 mb-2">
                        <h5 class="card-title mb-0 fw-bold">${job.position}</h5>
                        <span class="badge ${job.isCurrent ? 'bg-primary' : 'bg-secondary'}">${job.date}</span>
                    </div>
                    <h6 class="card-subtitle mb-3 text-body-secondary">${job.company} ${job.location ? `| ${job.location}` : ''}</h6>
                    ${ulHtml}
                </div>
            </div>`;
        container.append(jobHtml);
    });
  };

  const renderEducation = (education) => {
      const container = $('#education-list');
      container.empty();

      if (!education || education.length === 0) return;

      education.forEach(edu => {
          let skillsHtml = '';
          if (edu.skills && edu.skills.length > 0) {
              skillsHtml = edu.skills
                  .filter(skill => skill.trim() !== "")
                  .map(skill => `<span class="badge bg-primary cursor-pointer">${skill}</span>`)
                  .join('');
          }
          
          const ulHtml = skillsHtml ? `<div class="d-flex flex-wrap gap-2">${skillsHtml}</div>` : '';

          const eduHtml = `
              <div class="card mb-1 border-0 col-12 col-md-6 col-lg-4">
                  <div class="card-body">
                      <div class="d-flex justify-content-between flex-wrap gap-2 mb-2">
                          <h5 class="card-title mb-0 fw-bold">${edu.degree}</h5>
                          <span class="badge ${edu.isCurrent ? 'bg-primary' : 'bg-secondary'}">${edu.date}</span>
                      </div>
                      <h6 class="card-subtitle mb-3 text-body-secondary">${edu.university}</h6>
                      ${ulHtml}
                  </div>
              </div>`;
          container.append(eduHtml);
      });
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

      if (data[lang].experience && data[lang].experience.jobs) {
        renderExperience(data[lang].experience.jobs);
      }

      if (data[lang].education && data[lang].education.education) {
        renderEducation(data[lang].education.education);
      }
      
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