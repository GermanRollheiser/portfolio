// Diccionario de traducciones
const translations = {
    es: {
        // Navbar
        'sobre-mi': 'SOBRE MI',
        'experiencia': 'EXPERIENCIA', 
        'habilidades': 'HABILIDADES',
        'proyectos': 'PROYECTOS',
        'certificaciones': 'CERTIFICACIONES',
        'idiomas': 'IDIOMAS',
        'contacto': 'CONTACTO',
        
        // Profile
        'sobre-mi-title': 'Sobre mí',
        'profile-text': 'Mi nombre es Germán Rollheiser. Soy estudiante avanzado de programación con conocimientos en tecnologías como .Net, C#, Java, HTML, CSS, JavaScript, Vite, React, TypeScript, Supabase, SQL y diversos frameworks. Además, cuento con varias certificaciones que me ayudaron a expandir mis horizontes como desarrollador. Disfruto trabajando tanto en backend como en frontend. Actualmente me encuentro trabajando para una empresa extranjera y finalizando la tecnicatura en programación.',
        
        // Experience
        'experiencia-title': 'Experiencia',
        'exp1-date': '2025 - Actualidad',
        'exp1-company': 'My Global Crew (Estados Unidos)',
        'exp1-position': 'Desarrollador Backend Jr. (Up-smart - Alemania)',
        'exp1-description': 'Desarrollo y mantengo la capa de servidor de aplicaciones web utilizando Supabase como backend principal. Me encargo de modelar datos, exponer API\'s seguras y optimizar consultas para asegurar una experiencia ágil y confiable tanto para usuarios finales como para equipos de frontend.',
        'exp2-date': '2024 - 2025',
        'exp2-company': 'Freelance (Argentina)',
        'exp2-position': 'Desarrollador .NET',
        'exp2-description': 'Desarrollo de aplicaciones .NET (ASP .NET y C#) y mantenimiento de bases de datos en SQL.',
        'exp3-date': '2023 - 2024',
        'exp3-company': 'Pactera Edge (Estados Unidos)',
        'exp3-position': 'Traductor',
        'exp3-description': 'Traducción de textos inglés-español para entrenar IA (Machine Translation Engine).',
        'exp4-date': '2021 - 2024',
        'exp4-company': 'Colegios del solar (Argentina)',
        'exp4-position': 'Profesor de inglés',
        'exp4-description': 'Profesor de primaria, secundaria y tutorías.',
        
        // Skills
        'habilidades-title': 'Habilidades técnicas',
        
        // Projects
        'proyectos-title': 'Proyectos',
        'project1-title': 'Grant Application',
        'project1-description': 'Login y Webform realizada como parte de una entrevista técnica con Vite, React, TypeScript, Supabase y desplegada en Vercel. La app permite la carga de información y la subida de archivos utilizando UUID y RLS como medidas de seguridad.',
        'project2-title': 'Mi web de artículos',
        'project2-description': 'Aplicación web realizada en C# y ASP.NET que permite mostrar el catálogo de artículos, filtrar la búsqueda, crear un usuario, agregar artículos a favoritos y administrar los artículos/usuarios.',
        'project3-title': 'Portfolio',
        'project3-description': 'Página web personal realizada con HTML, CSS y JavaScript destinada a mostrar mis conocimientos y formación como desarrollador.',
        
        // Certificates
        'certificaciones-title': 'Certificaciones',
        
        // Languages
        'idiomas-title': 'Idiomas',
        'lang-native': 'Nativo',
        'lang-teacher': 'Profesor',
        'lang-b1': 'B1',
        'lang-basic': 'Básico',
        
        // Contact
        'contacto-title': 'Contacto',
        'contact-address-label': 'Direccion:',
        'contact-address': 'Buenos Aires, Argentina',
        'contact-email-label': 'Email:',
        'contact-email': 'germanrollheiser@gmail.com',
        'contact-message-text': 'Deje su mensaje y le responderé a la brevedad',
        'contact-name-label': 'Nombre',
        'contact-email-input-label': 'Email',
        'contact-message-label': 'Mensaje',
        'contact-submit': 'Enviar',
        
        // Warning message
        'warning-title': 'Atención',
        'warning-text1': '360px. es el ancho mínimo necesario para una óptima visualización. Si está viendo este mensaje, por favor active la opción SITIO PARA COMPUTADORA desde los tres puntos que se encuentran en el margen superior derecho de su dispositivo.',
        'warning-text2': 'Muchas gracias.'
    },
    
    en: {
        // Navbar
        'sobre-mi': 'ABOUT ME',
        'experiencia': 'EXPERIENCE',
        'habilidades': 'SKILLS',
        'proyectos': 'PROJECTS',
        'certificaciones': 'CERTIFICATIONS',
        'idiomas': 'LANGUAGES',
        'contacto': 'CONTACT',
        
        // Profile
        'sobre-mi-title': 'About me',
        'profile-text': 'My name is Germán Rollheiser. I am an advanced programming student with knowledge in technologies such as .Net, C#, Java, HTML, CSS, JavaScript, Vite, React, TypeScript, Supabase, SQL and various frameworks. In addition, I have several certifications that helped me expand my horizons as a developer. I enjoy working in both backend and frontend. I am currently working for a foreign company and finishing my programming degree.',
        
        // Experience
        'experiencia-title': 'Experience',
        'exp1-date': '2025 - Current',
        'exp1-company': 'My Global Crew (United States)',
        'exp1-position': 'Jr. Backend Developer (Up-smart - Germany)',
        'exp1-description': 'I develop and maintain the server layer of web applications using Supabase as the main backend. I am responsible for data modeling, exposing secure APIs and optimizing queries to ensure an agile and reliable experience for both end users and frontend teams.',
        'exp2-date': '2024 - 2025',
        'exp2-company': 'Freelance (Argentina)',
        'exp2-position': '.NET Developer',
        'exp2-description': '.NET application development (ASP .NET and C#) and SQL database maintenance.',
        'exp3-date': '2023 - 2024',
        'exp3-company': 'Pactera Edge (United States)',
        'exp3-position': 'Translator',
        'exp3-description': 'English-Spanish text translation for AI training (Machine Translation Engine).',
        'exp4-date': '2021 - 2024',
        'exp4-company': 'Colegios del solar (Argentina)',
        'exp4-position': 'English teacher',
        'exp4-description': 'Primary, secondary school teacher and tutoring.',
        
        // Skills
        'habilidades-title': 'Technical Skills',
        
        // Projects
        'proyectos-title': 'Projects',
        'project1-title': 'Grant Application',
        'project1-description': 'Login and Webform created as part of a technical interview with Vite, React, TypeScript, Supabase and deployed on Vercel. The app allows information loading and file uploading using UUID and RLS as security measures.',
        'project2-title': 'My articles website',
        'project2-description': 'Web application made in C# and ASP.NET that allows showing the articles catalog, filtering search, creating a user, adding articles to favorites and managing articles/users.',
        'project3-title': 'Portfolio',
        'project3-description': 'Personal website made with HTML, CSS and JavaScript intended to show my knowledge and training as a developer.',
        
        // Certificates
        'certificaciones-title': 'Certifications',
        
        // Languages
        'idiomas-title': 'Languages',
        'lang-native': 'Native',
        'lang-teacher': 'Teacher',
        'lang-b1': 'B1',
        'lang-basic': 'Basic',
        
        // Contact
        'contacto-title': 'Contact',
        'contact-address-label': 'Address:',
        'contact-address': 'Buenos Aires, Argentina',
        'contact-email-label': 'Email:',
        'contact-email': 'germanrollheiser@gmail.com',
        'contact-message-text': 'Leave your message and I will respond shortly',
        'contact-name-label': 'Name',
        'contact-email-input-label': 'Email',
        'contact-message-label': 'Message',
        'contact-submit': 'Send',
        
        // Warning message
        'warning-title': 'Warning',
        'warning-text1': '360px is the minimum width required for optimal viewing. If you are seeing this message, please activate the DESKTOP SITE option from the three dots located in the upper right margin of your device.',
        'warning-text2': 'Thank you very much.'
    }
};

// Sistema de gestión de idiomas
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('preferred-language') || 'es';
        this.init();
    }

    init() {
        this.createLanguageToggle();
        this.setupEventListeners();
        this.applyLanguage(this.currentLanguage);
        this.updateToggleState();
    }

    createLanguageToggle() {
        // Buscar el contenedor de controles o crear uno
        let navControls = document.querySelector('.nav-controls');
        if (!navControls) {
            navControls = document.createElement('div');
            navControls.className = 'nav-controls';
            
            // Insertar antes del botón hamburguesa si existe, o al final del nav
            const nav = document.querySelector('.nav');
            const openMenuButton = document.querySelector('.open-menu');
            
            if (openMenuButton) {
                nav.insertBefore(navControls, openMenuButton);
            } else {
                nav.appendChild(navControls);
            }
        }

        // Crear el toggle de idioma con banderas
        const languageToggle = document.createElement('button');
        languageToggle.className = 'language-toggle';
        languageToggle.setAttribute('aria-label', 'Toggle language');
        languageToggle.innerHTML = `
            <div class="flag-container">
                <img class="flags" src="../imagenes/toggle-flags.png" alt="Español-Inglés" />
            </div>
        `;

        navControls.appendChild(languageToggle);
    }

    setupEventListeners() {
        const toggle = document.querySelector('.language-toggle');
        if (toggle) {
            toggle.addEventListener('click', () => this.toggleLanguage());
            
            // Soporte para teclado
            toggle.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.toggleLanguage();
                }
            });
        }
    }

    toggleLanguage() {
        const newLanguage = this.currentLanguage === 'es' ? 'en' : 'es';
        this.setLanguage(newLanguage);
    }

    setLanguage(language) {
        if (!translations[language]) {
            console.warn(`Language ${language} not found`);
            return;
        }

        this.currentLanguage = language;
        localStorage.setItem('preferred-language', language);
        
        this.applyLanguage(language);
        this.updateToggleState();
        
        // Disparar evento personalizado para otros scripts
        window.dispatchEvent(new CustomEvent('languageChanged', { 
            detail: { language, translations: translations[language] } 
        }));
    }

    applyLanguage(language) {
        const t = translations[language];
        
        // Actualizar elementos con data-translate
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (t[key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = t[key];
                } else {
                    element.textContent = t[key];
                }
            }
        });

        // Actualizar el documento con el idioma
        document.documentElement.lang = language;
        
        // Animar el cambio (opcional)
        document.body.style.opacity = '0.95';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 150);
    }

    updateToggleState() {
        const toggle = document.querySelector('.language-toggle');
        
        if (toggle) {
            if (this.currentLanguage === 'en') {
                toggle.classList.add('active');
            } else {
                toggle.classList.remove('active');
            }
        }
    }

    getCurrentLanguage() {
        return this.currentLanguage;
    }

    getTranslations(language = null) {
        return translations[language || this.currentLanguage];
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Crear instancia global del gestor de idiomas
    window.languageManager = new LanguageManager();
    
    // Integración con el menú existente
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Cerrar menú móvil si está abierto
            const menu = document.querySelector('.menu');
            if (menu && menu.classList.contains('menu_opened')) {
                menu.classList.remove('menu_opened');
            }
        });
    });
});

// Utilidad para desarrolladores
window.addTranslation = function(key, esText, enText) {
    translations.es[key] = esText;
    translations.en[key] = enText;
    
    if (window.languageManager) {
        window.languageManager.applyLanguage(window.languageManager.getCurrentLanguage());
    }
};

// Exportar para uso en otros módulos si es necesario
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LanguageManager, translations };
}