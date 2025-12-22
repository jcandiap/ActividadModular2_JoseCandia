# 🌐 Portafolio Web Personal - Actividad Modular 2

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-Active-success.svg)
![Version](https://img.shields.io/badge/version-1.0.0-purple.svg)

> Un sitio web de portafolio personal moderno, responsivo y completamente traducible, diseñado para exhibir experiencia profesional, proyectos y habilidades técnicas.

---

## 🚀 Live Demo
Puedes visitar la versión desplegada del proyecto aquí:
👉 **[Ver Portafolio en Vivo](https://jcandiap.github.io/ActividadModular2_JoseCandia/)**

---

## 📋 Descripción

Este proyecto es una aplicación web estática desarrollada como parte del módulo de Desarrollo Web (Actividad Modular 2). Su objetivo principal es demostrar la implementación de tecnologías frontend modernas para crear una experiencia de usuario fluida y profesional.

El sitio funciona como un currículum interactivo que permite a los usuarios conocer mi trayectoria, habilidades y proyectos destacados.

### ✨ Características Principales

*   **🌍 Internacionalización (i18n):** Soporte completo para **Español** e **Inglés**, con cambio de idioma dinámico instantáneo basado en archivos JSON.
*   **🌙 Modo Oscuro/Claro:** Tema visual adaptable a la preferencia del usuario, persistente mediante `localStorage`.
*   **📱 Diseño Responsivo:** Interfaz optimizada para dispositivos móviles, tablets y escritorios utilizando **Bootstrap 5**.
*   **⚡ Contenido Dinámico:** Las secciones de Experiencia, Educación, Proyectos y Contacto se renderizan dinámicamente desde un archivo `lang.json`, facilitando la actualización de datos sin tocar el HTML.
*   **🛡️ Validación de Formularios:** Formulario de contacto funcional con validación de campos y retroalimentación visual mediante **SweetAlert2**.
*   **🎨 Animaciones:** Efectos de escritura ("Typing effect") y transiciones suaves para mejorar la estética.

---

## 🛠️ Tecnologías Utilizadas

El proyecto ha sido construido utilizando las siguientes herramientas y librerías:

| Tecnología | Descripción |
| :--- | :--- |
| **HTML5** | Estructura semántica del sitio. |
| **CSS3** | Estilos personalizados y animaciones. |
| **Bootstrap 5.3** | Framework CSS para diseño responsivo y componentes UI. |
| **JavaScript (ES6+)** | Lógica de negocio, manejo del DOM y funcionalidades dinámicas. |
| **jQuery** | Simplificación de manipulación del DOM y eventos. |
| **SweetAlert2** | Alertas y popups estéticos para notificaciones al usuario. |
| **FontAwesome** | Iconografía vectorial para redes sociales y elementos UI. |
| **Google Fonts** | Tipografías modernas (Preahvihear, etc.). |

---

## 📂 Estructura del Proyecto

```text
ActividadModular2_JoseCandia/
├── assets/
│   ├── images/          # Imágenes de perfil, iconos de tecnologías, etc.
│   ├── scripts/         # Archivos JavaScript (lógica, animaciones, datos)
│   ├── styles/          # Archivos CSS (base, custom, librerías)
│   └── files/           # Archivos descargables (e.g., CV en PDF)
├── data/
│   └── lang.json        # Base de datos JSON para textos y traducciones
├── pages/
│   ├── projects.html    # Página de detalle de proyectos
│   └── contact.html     # Página de formulario de contacto
├── index.html           # Página principal (Landing page)
└── README.md            # Documentación del proyecto
```

---

## 🔧 Instalación y Uso Local

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/jcandiap/ActividadModular2_JoseCandia.git
    ```

2.  **Navegar al directorio:**
    ```bash
    cd ActividadModular2_JoseCandia
    ```

3.  **Ejecutar:**
    Dado que es un sitio estático, puedes abrir directamente el archivo `index.html` en tu navegador. 
    
    *Recomendación:* Para evitar problemas con CORS (especialmente con la carga del archivo JSON de idiomas), se recomienda usar una extensión como **Live Server** en VS Code o un servidor local simple:
---

## 👨‍💻 Autor

**José Candia P.**

*   🔗 **LinkedIn:** [linkedin.com/in/jcandiap](https://www.linkedin.com/in/jcandiap/)
*   🐙 **GitHub:** [github.com/jcandiap](https://github.com/jcandiap)
*   📧 **Email:** [joescandia@gmail.com](mailto:joescandia@gmail.com)

---

## 📄 Licencia

Este proyecto está bajo la Licencia **MIT**. Consulta el archivo `LICENSE` para más detalles.
