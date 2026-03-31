// --- DICCIONARIO DE TRADUCCIONES ---
const translations = {
    es: {
        nav_about: "Sobre mí",
        nav_projects: "Proyectos",
        nav_contact: "Contacto",
        hero_title: "Hola, soy <span>Iván Vega</span>",
        hero_desc: "QA Backend & Automation Engineer especializado en API Testing, Microservicios y Sistemas Financieros.",
        btn_linkedin: "Ver LinkedIn",
        btn_work: "Ver mi trabajo",
        about_title: "Sobre mí",
        about_desc: "QA Backend Engineer con experiencia validando APIs, microservicios y sistemas financieros, especializado en la identificación y análisis de la causa raíz de incidencias a nivel de código, logs y bases de datos, he colaborado con equipos de desarrollo y detectado riesgos antes de producción.",
        btn_cv: "Descargar CV (PDF)",
        stack_qa: "QA: Postman (API Testing), Python (Pytest, Requests, Selenium), SQL, Microservicios, REST APIs.",
        stack_back: "Backend: Java (Spring Boot), .NET (.NET Core), SQL, Kafka.",
        stack_front: "Frontend: HTML, CSS, JavaScript (Vue, React).",
        stack_tools: "Metodologías: Scrum, Jira",
        projects_subtitle: "Selección de proyectos de QA, Automatización y Backend.",
        btn_project: "Ver Proyecto",
        proj1_title: "Automatización de API con Python & Pytest",
        proj2_title: "Automatización de UI con Selenium WebDriver & POM",
        proj3_title: "Integración Continua (CI) con API Automation & GitHub Actions",
        proj4_title: "Validación de Datos & Pruebas SQL con Pandas",
        proj6_title: "Chat en Tiempo Real con WebSockets",
        proj7_title: "Sistema de Gestión de Reservas",
        proj7_desc: "• Frontend: React.js, HTML, CSS <br>• Backend: C# (ASP.NET Core) <br>• Base de datos: SQLite <br>• Web Services: API RESTful",
        contact_title: "Contáctame",
        contact_wa: "Enviar Whatsapp",
        btn_cv: "Descargar CV (PDF)",
        cv_file: "CV_Ivan_Vega_ES.pdf",
        proj4_title: "Validación de Datos & Pruebas SQL con Pandas",
        proj5_title: "API de Integración de Pagos", 
        proj5_desc: "• Frontend: React.js, HTML, CSS <br>• Backend: Java (Spring Boot) <br>• Mensajería: Kafka (local) <br>• Base de datos: SQLite <br>• API: API RESTful para el backend", // <--- NUEVO
        proj6_title: "Chat en Tiempo Real con WebSockets"
    },
    en: {
        nav_about: "About me",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_title: "Hi, I'm <span>Iván Vega</span>",
        hero_desc: "QA Backend & Automation Engineer specialized in API Testing, Microservices, and Financial Systems.",
        btn_linkedin: "View LinkedIn",
        btn_work: "View my work",
        about_title: "About me",
        about_desc: "QA Backend Engineer with experience validating APIs, microservices, and financial systems. Specialized in root cause analysis of incidents at the code, log, and database level. I have collaborated with development teams to mitigate risks before production.",
        btn_cv: "Download Resume (PDF)",
        stack_qa: "QA: Postman (API Testing), Python (Pytest, Requests, Selenium), SQL, Microservices, REST APIs.",
        stack_back: "Backend: Java (Spring Boot), .NET (.NET Core), SQL, Kafka.",
        stack_front: "Frontend: HTML, CSS, JavaScript (Vue, React).",
        stack_tools: "Methodologies: Scrum, Jira",
        projects_subtitle: "Selection of QA, Automation, and Backend projects.",
        btn_project: "View Project",
        proj1_title: "API Automation with Python & Pytest",
        proj2_title: "UI Automation with Selenium WebDriver & POM",
        proj3_title: "Continuous Integration (CI) with API Automation & GitHub Actions",
        proj4_title: "Data Validation & SQL Testing with Pandas",
        proj6_title: "Real-Time Chat with WebSockets",
        proj7_title: "Reservation Management System",
        proj7_desc: "• Frontend: React.js, HTML, CSS <br>• Backend: C# (ASP.NET Core) <br>• Database: SQLite <br>• Web Services: RESTful API",
        contact_title: "Contact me",
        contact_wa: "Send WhatsApp",
        btn_cv: "Download Resume (PDF)",
        cv_file: "CV_Ivan_Vega_EN.pdf",
        proj4_title: "Data Validation & SQL Testing with Pandas",
        proj5_title: "Payment Integration API",
        proj5_desc: "• Frontend: React.js, HTML, CSS <br>• Backend: Java (Spring Boot) <br>• Messaging: Kafka (local) <br>• Database: SQLite <br>• API: RESTful API for the backend", 
        proj6_title: "Real-Time Chat with WebSockets",
    }
};

// --- LÓGICA DE DETECCIÓN Y CAMBIO ---
let currentLang = navigator.language.startsWith('en') ? 'en' : 'es';
let typeIndex = 0;
let textToType = "";
let typeTimeout; 

function updateContent(lang) {   
    document.documentElement.lang = lang;   
    
    const langBtn = document.getElementById('lang-toggle');
    langBtn.innerText = lang === 'es' ? 'EN' : 'ES';
    
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    // Cambiar dinámicamente el archivo del CV
    const cvLink = document.getElementById('cv-download-link');
    if (cvLink && translations[lang].cv_file) {
        cvLink.href = translations[lang].cv_file;
        cvLink.download = translations[lang].cv_file; 
    }
});

    // Reiniciar y ejecutar el Typewriter effect
    clearTimeout(typeTimeout); 
    typeIndex = 0;
    textToType = translations[lang].hero_desc;
    
    // Limpia el texto antes de escribir
    const typeElement = document.getElementById("typewriter-text");
    if (typeElement) {
        typeElement.textContent = ""; 
    }
    
    typeWriter();
}

// --- FUNCIÓN TYPEWRITER ---
function typeWriter() {
    const typeElement = document.getElementById("typewriter-text");
    
    if (!typeElement) {
        console.error("Bug de QA: No se encontró el elemento con id 'typewriter-text' en el HTML.");
        return; 
    }

    if (typeIndex < textToType.length) {       
        typeElement.textContent += textToType.charAt(typeIndex);
        typeIndex++;
        typeTimeout = setTimeout(typeWriter, 50);
    }
}

// --- INICIALIZACIÓN ---
window.onload = () => {    
    // 1. FORZAR SCROLL AL INICIO Y LIMPIAR URL
    window.scrollTo(0, 0);
    if (window.location.hash) {
        history.replaceState(null, null, window.location.pathname);
    }

    // 2. Configurar evento del botón de idioma
    document.getElementById('lang-toggle').addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        updateContent(currentLang);
    });
    
    // 3. Cargar contenido en el idioma detectado
    updateContent(currentLang);
};