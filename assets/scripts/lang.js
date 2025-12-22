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
              <div class="col-12 col-md-6 col-lg-4">
                  <div class="card mb-1 border-0 h-100">
                      <div class="card-body">
                          <div class="d-flex justify-content-between flex-wrap gap-2 mb-2">
                              <h5 class="card-title mb-0 fw-bold">${edu.degree}</h5>
                              <span class="badge ${edu.isCurrent ? 'bg-primary' : 'bg-secondary'}">${edu.date}</span>
                          </div>
                          <h6 class="card-subtitle mb-3 text-body-secondary">${edu.university}</h6>
                          ${ulHtml}
                      </div>
                  </div>
              </div>`;
          container.append(eduHtml);
      });
  };

  const renderContactForm = (formData) => {
    const container = $('#contact-form-list');
    container.empty();

    if (!formData) return;

    const formHtml = `
        <div class="col-12">
            <label for="name" class="form-label">${formData.name}</label>
            <input type="text" class="form-control" id="name" required>
        </div>
        <div class="col-12">
            <label for="email" class="form-label">${formData.email}</label>
            <input type="email" class="form-control" id="email" required>
        </div>
        <div class="col-12">
            <label for="message" class="form-label">${formData.message}</label>
            <textarea class="form-control" id="message" rows="3" required></textarea>
        </div>
        <div class="col-12 mt-3 text-end">
            <button type="submit" class="btn btn-primary">${formData.send}</button>
        </div>
    `;
    container.append(formHtml);
  };

  const renderProjects = (projects) => {
    const container = $('#projects-list');
    container.empty();

    if (!projects || projects.length === 0) return;

    projects.forEach(project => {
        let technologiesHtml = '';
        if (project.technologies && project.technologies.length > 0) {
            technologiesHtml = project.technologies
                .filter(tech => tech.trim() !== "")
                .map(tech => `<span class="badge bg-primary cursor-pointer">${tech}</span>`)
                .join('');
        }
        
        const ulHtml = technologiesHtml ? `<div class="d-flex flex-wrap gap-2">${technologiesHtml}</div>` : '';

        const projectHtml = `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card border-1 h-100">
                    <div class="card-body">
                        <div class="d-flex justify-content-between flex-wrap gap-2 mb-4">
                            <h5 class="card-title mb-0 fw-bold">${project.name}</h5>
                            <a href="${project.link}" target="_blank" class="badge bg-secondary cursor-pointer text-decoration-none">${project.detailsButton}</a>
                        </div>
                        <h6 class="card-subtitle mb-3 text-body-secondary">${project.description}</h6>
                        ${ulHtml}
                    </div>
                </div>
            </div>`;
        container.append(projectHtml);
    });
  };

  const changeLanguage = async (lang) => {
    try {
      // Detectar si estamos en una subcarpeta (como /pages/)
      const isPagesDir = window.location.pathname.includes('/pages/');
      const jsonPath = isPagesDir ? '../data/lang.json' : 'data/lang.json';
        
      const response = await fetch(jsonPath);
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
      
      if (data[lang].projects && data[lang].projects.projects) {
        renderProjects(data[lang].projects.projects);
      }

      if (data[lang].contact && data[lang].contact.form) {
        renderContactForm(data[lang].contact.form);
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