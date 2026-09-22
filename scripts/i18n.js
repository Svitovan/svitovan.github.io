/**
 * Localization (i18n) Engine for Svitovan Portfolio
 * Supports English (en) and Czech (cs)
 */
(function () {
    'use strict';

    const translations = {
        en: {
            // Page Meta
            meta_title: 'Aleš Janáček — Frontend & Web Developer',
            meta_desc: 'Aleš Janáček — Frontend & Web Developer with 6+ years of commercial experience in JavaScript, Astro, corporate web platforms, and enterprise automation. Based in Prague.',

            // Profile Header
            profile_kicker: 'Curriculum Vitae',
            profile_role: 'Frontend & Web Developer · JavaScript · Astro · Corporate Web Platforms',
            profile_location: 'Prague, Czech Republic',
            download_cv: 'Download CV (PDF)',
            download_cv_title: 'Download CV (PDF)',

            // Navigation
            nav_summary: 'Summary',
            nav_skills: 'Skills',
            nav_experience: 'Experience',
            nav_projects: 'Projects',
            nav_education: 'Education',
            nav_about: 'About',
            theme_toggle_label: 'Toggle dark mode',
            theme_toggle_title: 'Toggle dark/light theme',
            lang_switch_label: 'Select language',

            // Section 01: Summary
            summary_title: 'Professional summary',
            summary_lead: 'Frontend Developer with 6+ years of commercial experience building internal web applications, modern corporate websites, and enterprise business automation solutions.',
            summary_p2: 'Skilled in <strong>JavaScript (ES6+)</strong>, <strong>Astro</strong>, HTML5, CSS3, Docker, SQL, and Git. Delivered responsive user interfaces, led the modernization and migration of corporate web platforms, and built SharePoint-based inventory systems adopted across 12 international offices.',
            summary_p3: 'Currently expanding capabilities into modern <strong>React</strong> and <strong>TypeScript</strong>. Use AI-assisted workflows for code exploration, prototyping, documentation, and test generation while reviewing all production changes manually.',

            // Section 02: Skills
            skills_title: 'Technical skills',
            skills_group_frontend: 'Frontend',
            skills_group_learning: 'Expanding / Learning',
            skills_group_backend: 'Backend & Automation',
            skills_group_devops: 'DevOps & Infrastructure',
            skills_group_design: 'Design & Additional Tools',

            // Section 03: Experience
            experience_title: 'Work experience',
            exp1_role: 'Frontend Developer',
            exp1_date: '2020–Present<br />Prague, Czech Republic',
            exp1_b1: 'Migrated the corporate website (<a href="https://www.euro-center.com" target="_blank" rel="noreferrer">euro-center.com</a>) to <strong>Astro</strong>, with source control in <strong>Azure Repos</strong> and automated deployment through <strong>Azure Pipelines</strong> to <strong>Azure Static Web Apps</strong>.',
            exp1_b2: 'Achieved desktop PageSpeed Insights scores of <strong>98 Performance</strong>, <strong>97 Accessibility</strong>, <strong>96 Best Practices</strong>, and <strong>100 SEO</strong> for the new Astro website.',
            exp1_b3: 'Containerized the corporate WordPress platform using <strong>Docker</strong> on a dedicated Linux server in a secured <strong>DMZ</strong> environment; executed seamless server migrations and maintained corporate web infrastructure with 99.9% uptime.',
            exp1_b4: 'Developed and deployed a SharePoint-based Global Inventory system adopted by operational teams across 12 international offices.',
            exp1_b5: 'Built interactive internal interfaces with JavaScript, HTML, and CSS for corporate employees managing business data, reporting, and operational records.',
            exp1_b6: 'Automated employee onboarding, administrative workflows, and operational requests using Power Automate and SharePoint integration.',
            exp1_b7: 'Administered Azure environments and executed SQL queries for business data operations.',

            exp2_role: 'Technical Support Specialist (1C)',
            exp2_date: '2018–2020<br />Prague, Czech Republic',
            exp2_b1: 'Provided technical support for 1C business software, investigated complex user issues, and ensured day-to-day software stability.',

            exp3_role: 'Junior Frontend Developer',
            exp3_date: '2017–2018<br />Prague, Czech Republic',
            exp3_b1: 'Supported web application development using JavaScript, HTML, CSS, and SQL; worked on UI implementation and database integration tasks.',

            exp4_title: 'Earlier Leadership & Operational Experience',
            exp4_subtitle: 'Executive, Municipal & Technical Roles',
            exp4_date: '2008–2017',
            exp4_intro: 'Transitioned into software engineering with a proven background in executive management and high-stakes municipal coordination, providing strong business acumen, high accountability, and cross-functional leadership skills:',
            exp4_b1: '<strong>Chief Executive & Expert</strong> — Auction House “Kleynod”: General business operations, organizational leadership, auction management, and client strategy.',
            exp4_b2: '<strong>Chief Specialist</strong> — Kyiv City State Administration: High-stakes project coordination and inter-departmental operations for the UEFA Euro 2012 preparations and staging.',
            exp4_b3: '<strong>Sales Manager & Technical Support</strong> — DiViPiX s.r.o. & Apple: Client relations, hardware/software troubleshooting, and technical support.',

            // Section 04: Projects
            projects_title: 'Selected web projects',
            proj1_type: 'Corporate Cloud Modernization',
            proj1_summary: 'Re-architected the corporate web platform from a dedicated Dockerized WordPress setup to an <strong>Astro</strong> website deployed automatically through <strong>Azure Pipelines</strong> to <strong>Azure Static Web Apps</strong>, improving performance, security, and maintainability.',
            proj1_overlay: 'Visit euro-center.com ↗',
            proj1_link: 'Visit euro-center.com <span aria-hidden="true">↗</span>',
            proj1_mockup_title: 'Visit euro-center.com (opens in new tab)',

            proj2_type: 'Specialized E-Commerce Platform',
            proj2_badge: 'E-Commerce Store',
            proj2_summary: 'Designed and engineered a responsive B2C e-commerce platform for an exotic snail breeding and terrarium supply business. Built dynamic product catalog navigation, species category filtering, interactive media galleries, mobile-friendly order inquiry workflows, and client-side form validation.',
            proj2_overlay: 'Visit achatina.com.ua ↗',
            proj2_link: 'Visit achatina.com.ua <span aria-hidden="true">↗</span>',
            proj2_mockup_title: 'Visit achatina.com.ua (opens in new tab)',

            // Section 05: Education
            education_title: 'Education',
            edu1_school: 'Czech Technical University in Prague',
            edu1_fac: 'Faculty of Nuclear Sciences and Physical Engineering · Mathematical Engineering',
            edu1_date: 'PhD studies<br />2009–2011',

            edu2_school: 'National Technical University of Ukraine “Igor Sikorsky KPI”',
            edu2_fac: 'Faculty of Chemical Engineering · Master’s Degree in Polymer Processing Technology',
            edu2_date: 'Master’s degree<br />2003–2009',

            // Section 06: Details
            details_title: 'More about me',
            details_languages_title: 'Languages',
            details_languages_p: '<strong>Czech:</strong> Fluent / Full professional (C1)<br /><strong>English:</strong> Professional working proficiency (C1)<br /><strong>Ukrainian:</strong> Native<br /><strong>Russian:</strong> Native',
            details_hobbies_title: 'Hobbies & Interests',
            details_hobbies_p: '<a href="https://www.flickr.com/photos/yanchyk/albums/72157648694393397" target="_blank" rel="noreferrer">Photography</a>, videography, <a href="https://soundcloud.com/svitovan/tracks" target="_blank" rel="noreferrer">music production</a>, cycling, workout, yoga',
            details_certs_title: 'Certificates & Additional Information',
            details_certs_1: 'Diploma nostrified at the University of Chemistry and Technology, Prague',
            details_certs_2: 'Inventi. React Akademie, 2018',
            details_certs_3: 'Unicorn a.s., project .NET Hatchery, October 2017',
            details_certs_4: 'Refresher courses “Computer technology and design”, 2014',
            details_certs_5: 'JavaScript Advanced & Essential — CyberBionic, 2015',
            details_certs_6: 'Driving license: B category',

            // Footer & Toast
            footer_text: 'Aleš Janáček · Frontend & Web Developer · Prague',
            toast_copied: 'Copied to clipboard!',
            toast_copied_prefix: 'Copied: '
        },

        cs: {
            // Page Meta
            meta_title: 'Aleš Janáček — Frontend & Web Developer',
            meta_desc: 'Aleš Janáček — Frontend & Web Developer s více než 6 lety komerčních zkušeností s JavaScriptem, Astro, firemními webovými platformami a podnikovou automatizací. Praha.',

            // Profile Header
            profile_kicker: 'Životopis',
            profile_role: 'Frontend & Web Developer · JavaScript · Astro · Firemní webové platformy',
            profile_location: 'Praha, Česká republika',
            download_cv: 'Stáhnout CV (PDF)',
            download_cv_title: 'Stáhnout životopis v PDF',

            // Navigation
            nav_summary: 'Profil',
            nav_skills: 'Dovednosti',
            nav_experience: 'Zkušenosti',
            nav_projects: 'Projekty',
            nav_education: 'Vzdělání',
            nav_about: 'O mně',
            theme_toggle_label: 'Přepnout tmavý režim',
            theme_toggle_title: 'Přepnout tmavý/světlý motiv',
            lang_switch_label: 'Výběr jazyka',

            // Section 01: Summary
            summary_title: 'Profesní profil',
            summary_lead: 'Frontend Developer s více než 6 lety komerčních zkušeností s vývojem interních webových aplikací, moderních firemních webů a řešení pro automatizaci podnikových procesů.',
            summary_p2: 'Zkušenosti s <strong>JavaScriptem (ES6+)</strong>, <strong>Astro</strong>, HTML5, CSS3, Dockerem, SQL a Gitem. Navrhoval jsem a dodával responzivní uživatelská rozhraní, vedl modernizaci a migraci firemních webových platforem a vyvinul systém evidence majetku na bázi SharePointu, který využívá 12 zahraničních poboček.',
            summary_p3: 'V současné době rozšiřuji své dovednosti v moderním <strong>Reactu</strong> a <strong>TypeScriptu</strong>. Využívám AI workflows pro průzkum kódu, prototypování, tvorbu dokumentace a generování testů s důslednou manuální revizí všech produkčních změn.',

            // Section 02: Skills
            skills_title: 'Technické dovednosti',
            skills_group_frontend: 'Frontend',
            skills_group_learning: 'Vzdělávání a rozvoj',
            skills_group_backend: 'Backend a automatizace',
            skills_group_devops: 'DevOps a infrastruktura',
            skills_group_design: 'Design a další nástroje',

            // Section 03: Experience
            experience_title: 'Pracovní zkušenosti',
            exp1_role: 'Frontend Developer',
            exp1_date: '2020–současnost<br />Praha, Česká republika',
            exp1_b1: 'Migrace firemního webu (<a href="https://www.euro-center.com" target="_blank" rel="noreferrer">euro-center.com</a>) do <strong>Astro</strong>, se správou verzí v <strong>Azure Repos</strong> a automatizovaným nasazením přes <strong>Azure Pipelines</strong> do <strong>Azure Static Web Apps</strong>.',
            exp1_b2: 'Dosažení skóre PageSpeed Insights pro desktop: <strong>98 Performance</strong>, <strong>97 Accessibility</strong>, <strong>96 Best Practices</strong> a <strong>100 SEO</strong> u nového webu v Astro.',
            exp1_b3: 'Kontejnerizace firemní platformy WordPress pomocí <strong>Dockeru</strong> na dedikovaném linuxovém serveru v zabezpečené <strong>DMZ</strong> zóně; realizace bezvýpadkových migrací serverů a správa firemní webové infrastruktury s dostupností 99,9 %.',
            exp1_b4: 'Vývoj a nasazení globálního systému evidence majetku (Global Inventory) na SharePointu, využívaného operativními týmy ve 12 zahraničních pobočkách.',
            exp1_b5: 'Tvorba interaktivních interních rozhraní v JavaScriptu, HTML a CSS pro zaměstnance spravující obchodní data, reporting a provozní záznamy.',
            exp1_b6: 'Automatizace onboardingu zaměstnanců, administrativních procesů a provozních požadavků pomocí integrace Power Automate a SharePointu.',
            exp1_b7: 'Správa cloudových prostředí Azure a provádění SQL dotazů pro práci s podnikovými daty.',

            exp2_role: 'Specialista technické podpory (1C)',
            exp2_date: '2018–2020<br />Praha, Česká republika',
            exp2_b1: 'Poskytování technické podpory pro podnikový software 1C, analýza komplexních uživatelských problémů a zajištění každodenní stability systému.',

            exp3_role: 'Junior Frontend Developer',
            exp3_date: '2017–2018<br />Praha, Česká republika',
            exp3_b1: 'Podpora vývoje webových aplikací s využitím JavaScriptu, HTML, CSS a SQL; práce na implementaci uživatelského rozhraní a integraci databází.',

            exp4_title: 'Dřívější manažerské a provozní zkušenosti',
            exp4_subtitle: 'Vedoucí, městské a technické role',
            exp4_date: '2008–2017',
            exp4_intro: 'Přechod do softwarového vývoje s bohatým zázemím v exekutivním managementu a koordinaci rozsáhlých městských projektů, které přinášejí hluboké obchodní povědomí, vysokou míru odpovědnosti a schopnost vést mezioborové týmy:',
            exp4_b1: '<strong>Výkonný ředitel a znalec</strong> — Aukční dům „Kleynod“: Řízení firemních operací, organizační vedení, organizace aukcí a klientská strategie.',
            exp4_b2: '<strong>Hlavní specialista</strong> — Kyjevská městská státní správa: Koordinace klíčových projektů a meziútvarových operací při přípravě a realizaci fotbalového šampionátu UEFA Euro 2012.',
            exp4_b3: '<strong>Obchodní manažer a technická podpora</strong> — DiViPiX s.r.o. & Apple: Péče o klienty, řešení hardwarových i softwarových problémů a technická podpora.',

            // Section 04: Projects
            projects_title: 'Vybrané webové projekty',
            proj1_type: 'Modernizace firemního cloudu',
            proj1_summary: 'Kompletní přepracování firemní webové platformy z dedikovaného Docker WordPress řešení na moderní web v <strong>Astro</strong> s automatickým nasazením přes <strong>Azure Pipelines</strong> do <strong>Azure Static Web Apps</strong>, což přineslo vyšší výkon, bezpečnost a snazší údržbu.',
            proj1_overlay: 'Navštívit euro-center.com ↗',
            proj1_link: 'Navštívit euro-center.com <span aria-hidden="true">↗</span>',
            proj1_mockup_title: 'Navštívit euro-center.com (otevře se v nové záložce)',

            proj2_type: 'Specializovaná e-commerce platforma',
            proj2_badge: 'E-shop',
            proj2_summary: 'Návrh a realizace responzivní B2C e-commerce platformy pro chov exotických šneků a terarijní potřeby. Vytvoření dynamické navigace v katalogu produktů, filtrace podle druhů, interaktivních multimediálních galerií, mobilního objednávkového procesu a klientské validace formulářů.',
            proj2_overlay: 'Navštívit achatina.com.ua ↗',
            proj2_link: 'Navštívit achatina.com.ua <span aria-hidden="true">↗</span>',
            proj2_mockup_title: 'Navštívit achatina.com.ua (otevře se v nové záložce)',

            // Section 05: Education
            education_title: 'Vzdělání',
            edu1_school: 'České vysoké učení technické v Praze (ČVUT)',
            edu1_fac: 'Fakulta jaderná a fyzikálně inženýrská · Matematické inženýrství',
            edu1_date: 'Doktorské studium (PhD)<br />2009–2011',

            edu2_school: 'Národní technická univerzita Ukrajiny „Ihor Sikorsky KPI“',
            edu2_fac: 'Fakulta chemického inženýrství · Magisterský titul v technologii zpracování polymerů',
            edu2_date: 'Magisterské studium<br />2003–2009',

            // Section 06: Details
            details_title: 'Více o mně',
            details_languages_title: 'Jazyky',
            details_languages_p: '<strong>Čeština:</strong> Plynulá / plná profesionální znalost (C1)<br /><strong>Angličtina:</strong> Profesionální pracovní znalost (C1)<br /><strong>Ukrajinština:</strong> Rodilý mluvčí<br /><strong>Ruština:</strong> Rodilý mluvčí',
            details_hobbies_title: 'Zájmy a koníčky',
            details_hobbies_p: '<a href="https://www.flickr.com/photos/yanchyk/albums/72157648694393397" target="_blank" rel="noreferrer">Fotografie</a>, videotvorba, <a href="https://soundcloud.com/svitovan/tracks" target="_blank" rel="noreferrer">hudební produkce</a>, cyklistika, posilování, jóga',
            details_certs_title: 'Certifikáty a doplňující informace',
            details_certs_1: 'Diplom nostrifikován na Vysoké škole chemicko-technologické v Praze (VŠCHT)',
            details_certs_2: 'Inventi. React Akademie, 2018',
            details_certs_3: 'Unicorn a.s., projekt .NET Hatchery, říjen 2017',
            details_certs_4: 'Rekvalifikační kurzy „Počítačová technika a design“, 2014',
            details_certs_5: 'JavaScript Advanced & Essential — CyberBionic, 2015',
            details_certs_6: 'Řidičský průkaz: skupina B',

            // Footer & Toast
            footer_text: 'Aleš Janáček · Frontend & Web Developer · Praha',
            toast_copied: 'Zkopírováno do schránky!',
            toast_copied_prefix: 'Zkopírováno: '
        }
    };

    /**
     * Determine preferred language
     */
    function detectLanguage() {
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        if (urlLang && translations[urlLang]) {
            return urlLang;
        }

        const saved = localStorage.getItem('svitovan_lang');
        if (saved && translations[saved]) {
            return saved;
        }

        const browserLang = (navigator.language || '').toLowerCase();
        if (browserLang.startsWith('cs') || browserLang.startsWith('sk')) {
            return 'cs';
        }

        return 'en';
    }

    let currentLang = detectLanguage();

    /**
     * Update page content with selected language
     */
    function applyLanguage(lang) {
        if (!translations[lang]) return;
        currentLang = lang;

        // Set html lang attribute
        document.documentElement.setAttribute('lang', lang);
        localStorage.setItem('svitovan_lang', lang);

        const dict = translations[lang];

        // 1. Plain text translations
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                el.textContent = dict[key];
            }
        });

        // 2. HTML content translations
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            }
        });

        // 3. Attribute translations (e.g., data-i18n-attr="title:download_cv_title,aria-label:nav_summary")
        document.querySelectorAll('[data-i18n-attr]').forEach(el => {
            const pairs = el.getAttribute('data-i18n-attr').split(',');
            pairs.forEach(pair => {
                const [attr, key] = pair.split(':').map(s => s.trim());
                if (attr && key && dict[key] !== undefined) {
                    el.setAttribute(attr, dict[key]);
                }
            });
        });

        // 4. Update title & meta description
        if (dict.meta_title) {
            document.title = dict.meta_title;
        }
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && dict.meta_desc) {
            metaDesc.setAttribute('content', dict.meta_desc);
        }

        // 5. Update language switcher UI buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            const btnLang = btn.getAttribute('data-lang');
            const isActive = btnLang === lang;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });

        // 6. Dispatch custom event for micro-interactivity (like toast prefix)
        window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang, dict } }));
    }

    /**
     * Public API
     */
    window.svitovani18n = {
        getLanguage: function () {
            return currentLang;
        },
        getTranslation: function (key) {
            return (translations[currentLang] && translations[currentLang][key]) || key;
        },
        setLanguage: function (lang) {
            applyLanguage(lang);
        }
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            applyLanguage(currentLang);
            bindSwitchers();
        });
    } else {
        applyLanguage(currentLang);
        bindSwitchers();
    }

    function bindSwitchers() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const targetLang = btn.getAttribute('data-lang');
                if (targetLang && targetLang !== currentLang) {
                    applyLanguage(targetLang);
                }
            });
        });
    }
})();
