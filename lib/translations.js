// ─────────────────────────────────────────────────────────────────────────────
// translations.js — single source of truth for all UI text
// Usage: import { t } from '@/lib/translations'; t.nav.home[lang]
// ─────────────────────────────────────────────────────────────────────────────

export const t = {

    // ── NAVIGATION ──────────────────────────────────────────────────────────
    nav: {
        home:     { en: 'Home',     fr: 'Accueil' },
        resume:   { en: 'Resume',   fr: 'CV' },
        projects: { en: 'Projects', fr: 'Projets' },
        skills:   { en: 'Skills',   fr: 'Compétences' },
        contact:  { en: 'Contact',  fr: 'Contact' },
        hireMe:   { en: 'Hire me',  fr: 'Me recruter' },
    },

    // ── COMMON ───────────────────────────────────────────────────────────────
    common: {
        downloadCv:     { en: '↓ Download CV',       fr: '↓ Télécharger le CV' },
        viewProjects:   { en: 'View Projects',        fr: 'Voir les projets' },
        allProjects:    { en: 'All 15+ →',            fr: 'Tous les 15+ →' },
        allSkills:      { en: 'All skills →',         fr: 'Toutes les compétences →' },
        fullResume:     { en: 'Full resume →',        fr: 'CV complet →' },
        viewOnGithub:   { en: 'View on GitHub ↗',    fr: 'Voir sur GitHub ↗' },
        getInTouch:     { en: 'Get in touch',         fr: 'Me contacter' },
        noPreview:      { en: 'No preview',           fr: 'Pas d\'aperçu' },
        collab:         { en: 'Collab',               fr: 'Collab' },
        inProgress:     { en: 'In Progress',          fr: 'En cours' },
        completed:      { en: 'Completed',            fr: 'Terminé' },
        active:         { en: 'Active',               fr: 'Actif' },
        current:        { en: 'Current',              fr: 'En cours' },
        with:           { en: 'With',                 fr: 'Avec' },
        updatedOn:      { en: 'Updated',              fr: 'Mis à jour' },
        features:       { en: 'Features',             fr: 'Fonctionnalités' },
        dailyUse:       { en: 'Daily use',            fr: 'Usage quotidien' },
        projects:       { en: 'projects',             fr: 'projets' },
        project:        { en: 'project',              fr: 'projet' },
        advanced:       { en: 'Advanced',             fr: 'Avancé' },
        intermediate:   { en: 'Intermediate',         fr: 'Intermédiaire' },
        learning:       { en: 'Learning',             fr: 'En apprentissage' },
    },

    // ── FOOTER ───────────────────────────────────────────────────────────────
    footer: {
        builtWith: { en: 'Next.js · Netlify', fr: 'Next.js · Netlify' },
    },

    // ── HOME PAGE ─────────────────────────────────────────────────────────────
    home: {
        badge:      { en: 'Paris, France — Open to opportunities', fr: 'Paris, France — Ouvert aux opportunités' },
        role:       { en: 'Computer Vision · Artificial Intelligence\nFull-Stack Engineering', fr: 'Vision par ordinateur · Intelligence Artificielle\nDéveloppement Full-Stack' },
        statProjects:  { en: 'Projects',   fr: 'Projets' },
        statLangs:     { en: 'Languages',  fr: 'Langages' },
        statYears:     { en: 'Years',      fr: 'Années' },
        statDegree:    { en: 'Degree',     fr: 'Diplôme' },
        aboutLabel:    { en: 'About',      fr: 'À propos' },
        aboutTitle:    { en: 'Building things that think', fr: 'Créer des choses qui pensent' },
        aboutP1:       {
            en: "I'm a CS student at <em>Université Paris Cité</em> specialising in Vision & Machine Intelligence. My work spans the full stack, from low-level C/C++ systems to deep learning python pipelines and containerised microservices.",
            fr: "Étudiant en informatique à <em>l'Université Paris Cité</em>, spécialisé en Vision & Machine Intelligente. Mon travail couvre toute la stack, des systèmes C/C++ bas niveau aux pipelines python de deep learning et microservices conteneurisés.",
        },
        aboutP2:       {
            en: "I care about code that is <em>precise</em> and purposeful, whether that's an argumentation framework solver or a stairway detector.",
            fr: "Je construis du code <em>précis</em> et efficace, qu'il s'agisse d'un solveur de frameworks d'argumentation ou d'un detecteur de marche d'escalier.",
        },
        backgroundLabel: { en: 'Background', fr: 'Parcours' },
        expertiseLabel:  { en: 'Expertise',  fr: 'Expertise' },
        expertiseTitle:  { en: 'Core competencies', fr: 'Compétences clés' },
        skillsLabel:     { en: 'Technical Skills', fr: 'Compétences techniques' },
        skillsTitle:     { en: 'Proficiency',       fr: 'Maîtrise' },
        workLabel:       { en: 'Work',   fr: 'Travaux' },
        workTitle:       { en: 'Selected projects', fr: 'Projets sélectionnés' },
        contactLabel:    { en: 'Contact', fr: 'Contact' },
        contactTitle:    { en: "Let's work", fr: 'Travaillons' },
        contactTitleEm:  { en: 'together',  fr: 'ensemble' },
        contactDesc:     {
            en: "Open to internships, research collaborations, and interesting projects. Don't hesitate to reach out.",
            fr: 'Ouvert aux stages, collaborations de recherche et projets intéressants. N\'hésitez pas à me contacter.',
        },
        openContactForm: { en: 'Open contact form', fr: 'Formulaire de contact' },
    },

    // ── COMPETENCIES (home) ─────────────────────────────────────────────────
    competencies: {
        cv:    {
            title: { en: 'Computer Vision', fr: 'Vision par ordinateur' },
            desc:  { en: 'Image processing, object detection, segmentation. OpenCV & PyTorch pipelines from research to deployment.', fr: 'Traitement d\'image, détection d\'objets, segmentation. Pipelines OpenCV & PyTorch de la recherche au déploiement.' },
        },
        ml:    {
            title: { en: 'Machine Learning', fr: 'Apprentissage automatique' },
            desc:  { en: 'Classification, clustering, neural networks. Comfortable from scratch and with Scikit-learn / PyTorch.', fr: 'Classification, clustering, réseaux de neurones. À l\'aise from scratch et avec Scikit-learn / PyTorch.' },
        },
        fs:    {
            title: { en: 'Full-Stack Dev', fr: 'Développement Full-Stack' },
            desc:  { en: 'React / Next.js frontends, Flask / Laravel backends, PostgreSQL & MySQL. Mobile with React Native.', fr: 'Frontends React / Next.js, backends Flask / Laravel, PostgreSQL & MySQL. Mobile avec React Native.' },
        },
        sys:   {
            title: { en: 'Systems & DevOps', fr: 'Systèmes & DevOps' },
            desc:  { en: 'Low-level C/C++, shell implementation, Docker, Kubernetes, Linux. Performance-first mindset.', fr: 'C/C++ bas niveau, implémentation de shell, Docker, Kubernetes, Linux. Approche orientée performance.' },
        },
        ai:    {
            title: { en: 'AI & Logic', fr: 'IA & Logique' },
            desc:  { en: 'Argumentation frameworks, MiniMax, Hugging Face dataset / model. Algorithmic rigour applied to real problems.', fr: 'Frameworks d\'argumentation, MiniMax, Hugging Face dataset / model. Rigueur algorithmique appliquée à de vrais problèmes.' },
        },
        res:   {
            title: { en: 'Research', fr: 'Recherche' },
            desc:  { en: 'Document layout analysis, exoplanet detection, stair counting, applied ML in academic contexts.', fr: 'Analyse de mise en page, détection d\'exoplanètes, comptage de marches, ML appliqué en contexte académique.' },
        },
    },

    // ── EXPERIENCES (home + resume) ─────────────────────────────────────────
    experiences: {
        job1: {
            date:  { en: 'May – Jun 2024',       fr: 'Mai – Juin 2024' },
            role:  { en: 'React Native Developer', fr: 'Développeur React Native' },
            place: { en: 'Ondrh / Artem5, Paris', fr: 'Ondrh / Artem5, Paris' },
            note:  {
                en: '"Socializus" expatriate social app. TypeScript, Redux, 36 languages, SMS auth, Webpack migration.',
                fr: '"Socializus" app sociale pour expatriés. TypeScript, Redux, 36 langues, auth SMS, migration Webpack.',
            },
        },
        edu1: {
            date:  { en: '2024 — present',              fr: '2024 — présent' },
            role:  { en: "Master's in Computer Science", fr: "Master en Informatique" },
            place: { en: 'Université Paris Cité',        fr: 'Université Paris Cité' },
            note:  {
                en: 'Vision & Machine Intelligence: ML, Computer Vision, Deep Learning, Optimization.',
                fr: 'Vision & Machine Intelligente: ML, Vision par ordinateur, Deep Learning, Optimisation.',
            },
        },
        edu2: {
            date:  { en: '2021 — 2024',             fr: '2021 — 2024' },
            role:  { en: "Bachelor's in Computer Science", fr: "Licence en Informatique" },
            place: { en: 'UPEC, France',             fr: 'UPEC, France' },
            note:  {
                en: 'Algorithms, Systems Programming (C/C++), Web Engineering, Databases, Distributed Systems.',
                fr: 'Algorithmes, Programmation Système (C/C++), Génie Logiciel Web, Bases de données, Systèmes Distribués.',
            },
        },
    },

    // ── RESUME PAGE ──────────────────────────────────────────────────────────
    resume: {
        pageLabel:   { en: 'Curriculum Vitæ',   fr: 'Curriculum Vitæ' },
        pageTitle:   { en: 'Resume',             fr: 'CV' },
        pageDesc:    {
            en: 'Computer Science student specialising in AI, Computer Vision & Full-Stack Development',
            fr: 'Étudiant en informatique spécialisé en IA, Vision par ordinateur & Développement Full-Stack',
        },
        downloadPdf: { en: '↓ Download PDF', fr: '↓ Télécharger PDF' },
        statLangs:   { en: 'Languages',       fr: 'Langages' },
        statDegree:  { en: 'Current degree',  fr: 'Diplôme actuel' },
        statSpec:    { en: 'Specialisation',  fr: 'Spécialisation' },
        statXp:      { en: 'Work experience', fr: 'Expérience pro' },
        summaryLabel: { en: 'Summary',  fr: 'Résumé' },
        summaryP1:    {
            en: "CS student at <em>Université Paris Cité</em> with a strong foundation in programming and hands-on experience across mobile, web, and systems development. My background spans algorithm design, computer vision, and modern web engineering.",
            fr: "Étudiant en informatique à l'<em>Université Paris Cité</em> avec de solides bases en programmation et une expérience pratique en développement mobile, web et système. Mon parcours couvre la conception algorithmique, la vision par ordinateur et le génie logiciel moderne.",
        },
        summaryP2:    {
            en: "I've worked as a React Native developer and continue building expertise in machine learning and computer vision through both coursework and independent projects.",
            fr: "J'ai travaillé comme développeur React Native et continue à développer mon expertise en apprentissage automatique et vision par ordinateur à travers ma formation et des projets personnels.",
        },
        expLabel:    { en: 'Experience', fr: 'Expérience' },
        workTag:     { en: 'Work',       fr: 'Stage' },
        eduLabel:    { en: 'Education',  fr: 'Formation' },
        coursework:  { en: 'Core coursework', fr: 'Cours principaux' },
        focusAreas:  { en: 'Focus areas',     fr: 'Domaines clés' },
        skillsLabel: { en: 'Skills',          fr: 'Compétences' },
        fullBreakdown: { en: 'Full breakdown →', fr: 'Détail complet →' },
        langLabel:   { en: 'Languages',   fr: 'Langues' },
        interestsLabel: { en: 'Interests', fr: 'Intérêts' },
        ctaTitle:    { en: "Let's connect",   fr: 'Restons en contact' },
        ctaDesc:     {
            en: 'Open to internships, research collabs, and interesting projects.',
            fr: 'Ouvert aux stages, collaborations de recherche et projets intéressants.',
        },
        // Education entries
        m2degree:   { en: "Master's in Computer Science", fr: 'Master en Informatique' },
        m2sub:      { en: 'Vision & Machine Intelligence', fr: 'Vision & Intelligence Machine' },
        m2coursework: {
            en: ['Machine Learning & AI', 'Computer Vision & Image Processing', 'Optimization & Data Mining', 'Advanced Algorithms'],
            fr: ['Apprentissage automatique & IA', 'Vision par ordinateur & Traitement d\'image', 'Optimisation & Fouille de données', 'Algorithmique avancée'],
        },
        m2focus: {
            en: ['Deep Learning & Neural Networks', 'Pattern Recognition', 'Intelligent Systems'],
            fr: ['Deep Learning & Réseaux de neurones', 'Reconnaissance de formes', 'Systèmes intelligents'],
        },
        l3degree: { en: "Bachelor's in Computer Science", fr: 'Licence en Informatique' },
        l3school: { en: 'UPEC: Université Paris-Est Créteil', fr: 'UPEC: Université Paris-Est Créteil' },
        l3coursework: {
            en: ['Data Structures & Algorithms', 'Systems Programming (C, C++)', 'Database Systems', 'Web & Software Engineering'],
            fr: ['Structures de données & Algorithmes', 'Programmation Système (C, C++)', 'Bases de données', 'Génie logiciel Web'],
        },
        l3focus: {
            en: ['Argumentation Frameworks', 'Distributed Systems & DevOps', 'Human-Computer Interaction'],
            fr: ['Frameworks d\'argumentation', 'Systèmes distribués & DevOps', 'Interaction Homme-Machine'],
        },
        // Job
        jobRole:    { en: 'React Native Developer', fr: 'Développeur React Native' },
        jobDate:    { en: 'May – Jun 2024',          fr: 'Mai – Juin 2024' },
        jobPlace:   { en: 'Ondrh / Artem5',          fr: 'Ondrh / Artem5' },
        jobDesc:    {
            en: 'Developed "Socializus" a social event app for expatriates using React Native & TypeScript.',
            fr: 'Développement de "Socializus" une app d\'événements sociaux pour expatriés avec React Native & TypeScript.',
        },
        jobAchievements: {
            en: [
                'Built LoginRegister, CreateProfile and EditProfile flows with full validation and error handling',
                'Implemented image cropping for profile photos and SMS verification system',
                'Migrated JavaScript codebase to TypeScript; configured Webpack for improved robustness',
                'Developed reusable components with multilingual support across 36 languages',
                'Actively participated in Daily Scrum meetings; maintained detailed Git documentation',
            ],
            fr: [
                'Développement des flux LoginRegister, CreateProfile et EditProfile avec validation complète',
                'Implémentation du recadrage d\'image pour les photos de profil et système de vérification SMS',
                'Migration du codebase JavaScript vers TypeScript ; configuration Webpack pour plus de robustesse',
                'Développement de composants réutilisables avec support multilingue sur 36 langues',
                'Participation active aux Daily Scrum ; documentation Git détaillée maintenue',
            ],
        },
        interests: {
            en: ['CS Research', 'Web Dev', 'Mobile Dev', 'Open Source', 'Dark Ambient Music', 'Retro Hardware', 'Dystopian Literature'],
            fr: ['Recherche informatique', 'Dev Web', 'Dev Mobile', 'Open Source', 'Musique Dark Ambient', 'Matériel rétro', 'Littérature dystopique'],
        },
        french:  { en: 'French',  fr: 'Français' },
        english: { en: 'English', fr: 'Anglais' },
        native:  { en: 'Native',  fr: 'Natif' },
        bilingual: { en: 'Bilingual', fr: 'Bilingue' },
    },

    // ── SKILLS PAGE ──────────────────────────────────────────────────────────
    skills: {
        pageLabel: { en: 'Technical Profile',    fr: 'Profil technique' },
        pageTitle: { en: 'Skills &',             fr: 'Compétences &' },
        pageTitleEm: { en: 'Technologies',       fr: 'Technologies' },
        pageDesc:  {
            en: 'Hands-on experience across AI, computer vision, full-stack, and systems programming',
            fr: 'Expérience concrète en IA, vision par ordinateur, full-stack et programmation système',
        },
        statTech:  { en: 'Technologies', fr: 'Technologies' },
        statBuilt: { en: 'Projects built', fr: 'Projets réalisés' },
        statLangs: { en: 'Languages',     fr: 'Langages' },
        statYears: { en: 'Years coding',  fr: 'Années de code' },
        ctaTitle:  { en: 'See these skills in action', fr: 'Ces compétences en pratique' },
        ctaDesc:   {
            en: "Explore the projects where I've applied these technologies.",
            fr: "Explorez les projets où j'ai appliqué ces technologies.",
        },
        viewProjects:   { en: 'View projects',   fr: 'Voir les projets' },
        downloadResume: { en: 'Download resume', fr: 'Télécharger le CV' },
        // Categories
        catLangs:  { en: 'Programming Languages', fr: 'Langages de programmation' },
        catLangsDesc: {
            en: 'Core languages used across projects',
            fr: 'Langages principaux utilisés dans mes projets',
        },
        catAI:     { en: 'AI & Machine Learning', fr: 'IA & Apprentissage automatique' },
        catAIDesc: {
            en: 'Applied ML, computer vision, and deep learning',
            fr: 'ML appliqué, vision par ordinateur et deep learning',
        },
        catWeb:    { en: 'Web & Mobile Development', fr: 'Développement Web & Mobile' },
        catWebDesc: {
            en: 'Frontend, backend, and mobile engineering',
            fr: 'Frontend, backend et développement mobile',
        },
        catDevops: { en: 'DevOps & Systems', fr: 'DevOps & Systèmes' },
        catDevopsDesc: {
            en: 'Infrastructure, containerisation, and low-level programming',
            fr: 'Infrastructure, conteneurisation et programmation bas niveau',
        },
        // Skill sub-tags (reusable)
        xpLabel: { en: 'yrs', fr: 'ans' },
        projectsLabel: { en: 'projects', fr: 'projets' },
    },

    // ── PROJECTS PAGE ────────────────────────────────────────────────────────
    projects: {
        pageLabel:   { en: 'Portfolio',  fr: 'Portfolio' },
        pageTitle:   { en: 'Projects',   fr: 'Projets' },
        found:       { en: 'found',      fr: 'trouvé(s)' },
        project:     { en: 'project',    fr: 'projet' },
        projects:    { en: 'projects',   fr: 'projets' },
        searchPlaceholder: { en: 'Search projects, technologies…', fr: 'Rechercher projets, technologies…' },
        filterCat:   { en: 'All',        fr: 'Tous' },
        resetLabel:  { en: '✕ Reset',    fr: '✕ Réinitialiser' },
        sortRecent:  { en: 'Recent first', fr: 'Plus récents' },
        sortTitle:   { en: 'A → Z',       fr: 'A → Z' },
        sortComplex: { en: 'Complexity',   fr: 'Complexité' },
        noResults:   { en: 'No projects match your filters.', fr: 'Aucun projet ne correspond à vos filtres.' },
        featuresLabel:  { en: 'Features',    fr: 'Fonctionnalités' },
        updatedLabel:   { en: 'Updated',     fr: 'Mis à jour' },
        complexityLabel:{ en: 'Complexity',  fr: 'Complexité' },
        withLabel:      { en: 'With',        fr: 'Avec' },
    },

    // ── CONTACT PAGE ─────────────────────────────────────────────────────────
    contact: {
        pageLabel:   { en: 'Get in touch',   fr: 'Me contacter' },
        pageTitle:   { en: "Let's work",     fr: 'Travaillons' },
        pageTitleEm: { en: 'together',       fr: 'ensemble' },
        pageDesc:    {
            en: 'Open to internships, research collaborations, and projects worth building',
            fr: 'Ouvert aux stages, collaborations de recherche et projets qui valent la peine',
        },
        emailLabel:  { en: 'Direct email', fr: 'Email direct' },
        emailDesc:   {
            en: 'Best for quick questions and direct collaboration proposals.',
            fr: 'Idéal pour les questions rapides et les propositions de collaboration.',
        },
        profilesLabel: { en: 'Profiles', fr: 'Profils' },
        openToLabel:   { en: 'Currently open to', fr: 'Actuellement ouvert à' },
        openToList:    {
            en: ['Internships (2025)', 'Research collaborations', 'Open-source contributions', 'Freelance projects'],
            fr: ['Stages (2025)', 'Collaborations de recherche', 'Contributions open-source', 'Projets freelance'],
        },
        formName:        { en: 'Name',       fr: 'Nom' },
        formEmail:       { en: 'Email',      fr: 'Email' },
        formSubject:     { en: 'Subject',    fr: 'Sujet' },
        formMessage:     { en: 'Message',    fr: 'Message' },
        formNamePh:      { en: 'Your name',  fr: 'Votre nom' },
        formEmailPh:     { en: 'your@email.com', fr: 'votre@email.com' },
        formSubjectPh:   { en: "What's this about?", fr: "De quoi s'agit-il ?" },
        formMessagePh:   {
            en: 'Tell me about your project, question, or how we can work together…',
            fr: 'Parlez-moi de votre projet, question, ou comment nous pourrions collaborer…',
        },
        formSend:        { en: 'Send message →', fr: 'Envoyer →' },
        formSending:     { en: 'Sending…',        fr: 'Envoi…' },
        formError:       { en: 'Failed to send: ', fr: 'Échec d\'envoi: ' },
        successTitle:    { en: 'Message sent',   fr: 'Message envoyé' },
        successDesc:     {
            en: "Thanks for reaching out, I'll get back to you soon.",
            fr: 'Merci de m\'avoir contacté, je vous répondrai bientôt.',
        },
    },
};

// Helper: get value for a given lang
// e.g. getLang(t.nav.home, 'fr') → 'Accueil'
export function getLang(entry, lang) {
    if (!entry || typeof entry !== 'object') return entry ?? '';
    return entry[lang] ?? entry['en'] ?? '';
}

// Alias with reversed args — more readable in some contexts
// e.g. sgetLang('fr', t.nav.home)
export function sgetLang(lang, entry) {
    return getLang(entry, lang);
}