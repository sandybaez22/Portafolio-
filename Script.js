console.log("Portafolio cargado correctamente");

const langBtn = document.querySelector(".lang-btn");
const langMenu = document.querySelector(".lang-menu");
const elements = document.querySelectorAll("[data-i18n]");

/* 🌍 Textos por idioma */
const translations = {
    es: {
        hero_title: "Desarrollador Web & Apps",
        hero_desc: "Creo soluciones digitales modernas para emprendedores y negocios",
        about_title: "Sobre mí",
        about_text: "Soy desarrollador apasionado por la tecnología y la programación. Me especializo en la creación de páginas web y aplicaciones modernas utilizando HTML, CSS y JavaScript, enfocándome en el diseño, la funcionalidad y la experiencia del usuario. También trabajo con Python, C# y Flutter para desarrollar aplicaciones y proyectos interactivos.",
        skills_title: "Lenguajes & Tecnologías",
        projects_title: "Proyectos",
        project1_desc: "Videojuego desarrollado en Unity con sistema de tienda, inventario y modos de juego.",
        project2_desc: "Proyecto interactivo enfocado en programación, lógica y experiencia visual moderna.",
        cert_title: "Certificados",
        cert1_title: "Diplomado en Técnico en Soporte de Redes y Sistemas Informáticos",
        cert2_title: "Diplomado en Ciberseguridad",
        view_digital: "Ver de forma digital",
        social_title: "Redes Sociales",
        see_cv: "Ver currículum",
        footer_text: "© 2026 Sandy Báez - Todos los derechos reservados"
    },
    en: {
        hero_title: "Web & Apps Developer",
        hero_desc: "I create modern digital solutions for entrepreneurs and businesses",
        about_title: "About Me",
        about_text: "I am a developer passionate about technology and programming. I specialize in creating modern websites and applications using HTML, CSS, and JavaScript, focusing on design, functionality, and user experience. I also work with Python, C#, and Flutter to develop interactive applications and projects.",
        skills_title: "Languages & Technologies",
        projects_title: "Projects",
        project1_desc: "Video game developed in Unity with shop system, inventory, and game modes.",
        project2_desc: "Interactive project focused on programming, logic, and modern visual experience.",
        cert_title: "Certificates",
        cert1_title: "Diploma in Network and IT Systems Support Technician",
        cert2_title: "Diploma in Cybersecurity",
        view_digital: "View digitally",
        social_title: "Social Networks",
        see_cv: "View CV",
        footer_text: "© 2026 Sandy Báez - All rights reserved"
    },
    fr: {
        hero_title: "Développeur Web & Apps",
        hero_desc: "Je crée des solutions numériques modernes pour les entrepreneurs et les entreprises",
        about_title: "À propos de moi",
        about_text: "Je suis un développeur passionné par la technologie et la programmation. Je me spécialise dans la création de sites web et d'applications modernes en utilisant HTML, CSS et JavaScript, en me concentrant sur le design, la fonctionnalité et l'expérience utilisateur. Je travaille également avec Python, C# et Flutter pour développer des applications et des projets interactifs.",
        skills_title: "Langages & Technologies",
        projects_title: "Projets",
        project1_desc: "Jeu vidéo développé sur Unity avec système de boutique, inventaire et modes de jeu.",
        project2_desc: "Projet interactif axé sur la programmation, la logique et une expérience visuelle moderne.",
        cert_title: "Certificats",
        cert1_title: "Diplôme de Technicien en Support des Réseaux et Systèmes Informatiques",
        cert2_title: "Diplôme en Cybersécurité",
        view_digital: "Voir en version numérique",
        social_title: "Réseaux sociaux",
        see_cv: "Voir le CV",
        footer_text: "© 2026 Sandy Báez - Tous droits réservés"
    },
    pt: {
        hero_title: "Desenvolvedor Web & Apps",
        hero_desc: "Crio soluções digitais modernas para empreendedores e negócios",
        about_title: "Sobre mim",
        about_text: "Sou desenvolvedor apaixonado por tecnologia e programação. Especializo-me na criação de sites e aplicativos modernos usando HTML, CSS e JavaScript, focando em design, funcionalidade e experiência do usuário. Também trabalho com Python, C# e Flutter para desenvolver aplicativos e projetos interativos.",
        skills_title: "Linguagens & Tecnologias",
        projects_title: "Projetos",
        project1_desc: "Videogame desenvolvido no Unity com sistema de loja, inventário e modos de jogo.",
        project2_desc: "Projeto interativo focado em programação, lógica e experiência visual moderna.",
        cert_title: "Certificados",
        cert1_title: "Diploma em Técnico de Suporte de Redes e Sistemas Informáticos",
        cert2_title: "Diploma em Cibersegurança",
        view_digital: "Ver digitalmente",
        social_title: "Redes Sociais",
        see_cv: "Ver currículo",
        footer_text: "© 2026 Sandy Báez - Todos os direitos reservados"
    }
};

/* Cambiar idioma */
function changeLanguage(lang) {
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    localStorage.setItem("language", lang);
}

/* Abrir / cerrar menú */
langBtn.addEventListener("click", () => {
    langMenu.classList.toggle("show");
});

/* Seleccionar idioma */
document.querySelectorAll(".lang-menu li").forEach(item => {
    item.addEventListener("click", () => {
        const lang = item.getAttribute("data-lang");
        langBtn.innerHTML = "🌐 " + item.textContent + " ▾";
        langMenu.classList.remove("show");
        changeLanguage(lang);
    });
});

/* Idioma guardado */
const savedLang = localStorage.getItem("language") || "es";
changeLanguage(savedLang);