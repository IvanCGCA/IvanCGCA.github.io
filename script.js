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
        about_roles: "<i class='fas fa-bullseye'></i> <strong>Roles de interés:</strong> QA Engineer, Desarrollador Backend, Scrum Master (Junior).",
        stack_qa: "QA: Postman (API Testing), Python (Pytest, Requests, Selenium), SQL, Microservicios, REST APIs.",
        stack_back: "Backend: Java (Spring Boot), .NET (.NET Core), SQL, Kafka.",
        stack_front: "Frontend: HTML, CSS, JavaScript (Vue, React).",
        stack_tools: "Metodologías: Scrum, Jira",
        projects_subtitle: "Selección de proyectos de QA, Automatización y Backend.",
        btn_project: "Ver Proyecto",
        proj1_title: "Automatización de API con Python & Pytest",
        proj2_title: "Automatización de UI con Selenium WebDriver & POM",
        proj3_title: "Integración Continua (CI) con API Automation & GitHub Actions",
        proj6_title: "Chat en Tiempo Real con WebSockets",
        proj7_title: "Sistema de Gestión de Reservas",
        contact_title: "¿Tu equipo necesita reducir los bugs en producción? Hablemos.",
        contact_wa: "Enviar Whatsapp",
        btn_cv: "Descargar CV (PDF)",
        cv_file: "CV_Ivan_Vega_ES.pdf",
        proj4_title: "Validación de Datos & Pruebas SQL con Pandas",
        proj5_title: "API de Integración de Pagos", 
        proj6_title: "Chat en Tiempo Real con WebSockets",
        btn_project: "Ver Código",
        btn_report: "📊 Ver Reporte Allure",
        chat_header: "🤖 Asistente de Iván",
        chat_welcome: "¡Hola! Soy el asistente virtual de Iván. ¿En qué te puedo ayudar hoy? Elige una opción:",
        chat_opt_cv: "📄 Descargar CV",
        chat_opt_tech: "💻 Stack Técnico",
        chat_opt_contact: "📬 Contacto Directo",
        chat_resp_cv: "¡Claro! Puedes descargar el CV actualizado haciendo clic en el botón azul 'Descargar CV (PDF)' en la sección 'Sobre mí'.",
        chat_resp_tech: "Su especialidad son las pruebas manuales, automaticas, desarrollo backend, revisa la sección de Stack Técnico para saber más.",
        chat_resp_contact: "La forma más rápida de hablar con él es por WhatsApp o LinkedIn. Baja a la sección 'Contáctame' y haz clic en el icono."
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
        about_roles: "<i class='fas fa-bullseye'></i> <strong>Target Roles:</strong> QA Engineer, Backend Developer, Scrum Master (Junior).",
        stack_qa: "QA: Postman (API Testing), Python (Pytest, Requests, Selenium), SQL, Microservices, REST APIs.",
        stack_back: "Backend: Java (Spring Boot), .NET (.NET Core), SQL, Kafka.",
        stack_front: "Frontend: HTML, CSS, JavaScript (Vue, React).",
        stack_tools: "Methodologies: Scrum, Jira",
        projects_subtitle: "Selection of QA, Automation, and Backend projects.",
        btn_project: "View Project",
        proj1_title: "API Automation with Python & Pytest",
        proj2_title: "UI Automation with Selenium WebDriver & POM",
        proj3_title: "Continuous Integration (CI) with API Automation & GitHub Actions",
        proj6_title: "Real-Time Chat with WebSockets",
        proj7_title: "Reservation Management System",
        contact_title: "Need to scale your API testing coverage? Let's connect.",
        contact_wa: "Send WhatsApp",
        btn_cv: "Download Resume (PDF)",
        cv_file: "CV_Ivan_Vega_EN.pdf",
        proj4_title: "Data Validation & SQL Testing with Pandas",
        proj5_title: "Payment Integration API",
        proj6_title: "Real-Time Chat with WebSockets",
        btn_project: "View Code",
        btn_report: "📊 View Allure Report",
        chat_header: "🤖 Ivan's Assistant",
        chat_welcome: "Hello! I'm Ivan's virtual assistant. How can I help you today? Choose an option:",
        chat_opt_cv: "📄 Download Resume",
        chat_opt_tech: "💻 Tech Stack",
        chat_opt_contact: "📬 Direct Contact",
        chat_resp_cv: "Sure! You can download his updated resume by clicking the blue 'Download Resume (PDF)' button in the 'About Me' section.",
        chat_resp_tech: "His specialty is manual testing, development backend, see Tech Stack section for more details.",
        chat_resp_contact: "The fastest way to reach him is via WhatsApp or LinkedIn. Scroll down to the 'Contact' section and click the icon."
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
    console.log("%c🕵️‍♂️ ¿Buscando bugs? Como QA, ya los depuré todos.", "color: #38bdf8; font-size: 18px; font-weight: bold;");
    console.log("%cSi estás leyendo esto, tenemos que hablar, mándame un correo a: ivan.vegaporras@hotmail.com", "color: #f8fafc; font-size: 14px;");
};

// --- LÓGICA DEL CHATBOT BILINGÜE ---
document.addEventListener('DOMContentLoaded', () => {
    const chatToggle = document.getElementById('chat-toggle');
    const chatWidget = document.getElementById('chat-widget');
    const chatClose = document.getElementById('chat-close');
    const chatBody = document.getElementById('chat-body');
    const chatOptions = document.querySelectorAll('.chat-opt');

    // Abrir/Cerrar Chat
    chatToggle.addEventListener('click', () => {
        chatWidget.style.display = chatWidget.style.display === 'flex' ? 'none' : 'flex';
    });

    chatClose.addEventListener('click', () => {
        chatWidget.style.display = 'none';
    });

    // Procesar clic en opciones
    chatOptions.forEach(btn => {
        btn.addEventListener('click', function() {
            // Lee el texto del botón (en el idioma actual)
            const userText = this.innerText;
            // Lee qué respuesta queremos dar basado en el data-resp del HTML
            const respKey = this.getAttribute('data-resp');

            // 1. Mostrar mensaje del usuario
            appendMessage(userText, 'user-msg');
            
            // Ocultar botones temporalmente
            document.querySelector('.chat-options').style.display = 'none';

            // 2. Simular que el bot "escribe"
            setTimeout(() => {
                // AQUÍ ESTÁ LA MAGIA: Buscamos la respuesta en el diccionario global usando currentLang
                const botResponseText = translations[currentLang][respKey];
                appendMessage(botResponseText, 'bot-msg');
                
                // Mostrar botones de nuevo
                setTimeout(() => {
                    document.querySelector('.chat-options').style.display = 'flex';
                }, 500);

            }, 800);
        });
    });

    // Función para inyectar mensajes al HTML
    function appendMessage(text, className) {
        const msgDiv = document.createElement('div');
        msgDiv.className = className;
        msgDiv.innerText = text;
        chatBody.insertBefore(msgDiv, document.querySelector('.chat-options'));
        chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll
    }
});