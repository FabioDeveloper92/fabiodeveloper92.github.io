
// Project data with i18n support using translation keys
export const projectsData = [
  {
    id: 1,
    titleKey: "project.ecommerce.title",
    category: "Web Development",
    categoryKey: "category.webDevelopment",
    image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    slug: "e-commerce-platform",
    descriptionKey: "project.ecommerce.description",
    year: "2023",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    client: {
      en: "Clothing Company",
      it: "Azienda di Abbigliamento"
    },
    duration: {
      en: "4 months",
      it: "4 mesi"
    },
    fullDescriptionKey: "project.ecommerce.fullDescription"
  },
  {
    id: 2,
    titleKey: "project.taskManagement.title",
    category: "Web Application",
    categoryKey: "category.webApplication",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    slug: "task-management-app",
    descriptionKey: "project.taskManagement.description",
    year: "2022",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    client: {
      en: "Consulting Company",
      it: "Azienda di Consulenza"
    },
    duration: {
      en: "3 months",
      it: "3 mesi"
    },
    fullDescriptionKey: "project.taskManagement.fullDescription"
  },
  {
    id: 3,
    titleKey: "project.healthcare.title",
    category: "Enterprise Solution",
    categoryKey: "category.enterpriseSolution",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    slug: "healthcare-portal",
    descriptionKey: "project.healthcare.description",
    year: "2023",
    technologies: [".NET Core", "SQL Server", "Angular", "Azure"],
    client: {
      en: "Private Clinics Network",
      it: "Network di Cliniche Private" 
    },
    duration: {
      en: "6 months",
      it: "6 mesi"
    },
    fullDescriptionKey: "project.healthcare.fullDescription"
  },
  {
    id: 4,
    titleKey: "project.realEstate.title",
    category: "Web Platform",
    categoryKey: "category.webPlatform",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    slug: "real-estate-marketplace",
    descriptionKey: "project.realEstate.description",
    year: "2022",
    technologies: ["React", "Django", "PostgreSQL", "Google Maps API"],
    client: {
      en: "Real Estate Agency",
      it: "Agenzia Immobiliare"
    },
    duration: {
      en: "5 months",
      it: "5 mesi"
    },
    fullDescriptionKey: "project.realEstate.fullDescription"
  },
  {
    id: 5,
    titleKey: "project.socialMedia.title",
    category: "Analytics",
    categoryKey: "category.analytics",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    slug: "social-media-dashboard",
    descriptionKey: "project.socialMedia.description",
    year: "2023",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    client: {
      en: "Marketing Agency",
      it: "Agenzia di Marketing"
    },
    duration: {
      en: "3 months",
      it: "3 mesi"
    },
    fullDescriptionKey: "project.socialMedia.fullDescription"
  },
  {
    id: 6,
    titleKey: "project.banking.title",
    category: "Mobile Development",
    categoryKey: "category.mobileDevelopment",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    slug: "mobile-banking-app",
    descriptionKey: "project.banking.description",
    year: "2022",
    technologies: ["React Native", "Redux", "Node.js", "PostgreSQL"],
    client: {
      en: "Financial Services Company",
      it: "Azienda di Servizi Finanziari"
    },
    duration: {
      en: "4 months",
      it: "4 mesi"
    },
    fullDescriptionKey: "project.banking.fullDescription"
  }
];

// Project full descriptions with HTML content
export const projectFullDescriptions = {
  "e-commerce-platform": {
    it: `
      <h3>Il Progetto</h3>
      <p>Questo progetto è nato dall'esigenza del cliente di trasformare il proprio business fisico in un'attività digitale. La piattaforma e-commerce doveva permettere la gestione completa di prodotti, ordini, pagamenti e spedizioni.</p>
      
      <h3>Sfide Affrontate</h3>
      <p>Una delle principali sfide è stata l'integrazione di un sistema di pagamento sicuro e affidabile. Abbiamo optato per Stripe API per la sua robustezza e facilità di implementazione. Un'altra sfida significativa è stata la creazione di un pannello amministrativo intuitivo che permettesse al cliente di gestire facilmente il catalogo prodotti.</p>
      
      <h3>Approccio Metodologico</h3>
      <p>Ho adottato un approccio Agile, con sprint bisettimanali, per garantire una consegna incrementale e feedback costante dal cliente. Questo ha permesso di adattare lo sviluppo alle esigenze emergenti e di apportare modifiche in corso d'opera senza impattare i tempi di consegna.</p>
      
      <h3>Soluzioni Tecniche</h3>
      <p>Il frontend è stato sviluppato con React, utilizzando Redux per la gestione dello stato dell'applicazione. Per il backend, ho implementato un'API RESTful con Node.js e Express, mentre MongoDB è stato scelto come database per la sua flessibilità nella gestione dei dati non strutturati.</p>
      
      <h3>Risultati</h3>
      <p>La piattaforma ha permesso al cliente di aumentare le vendite del 45% nel primo trimestre dopo il lancio. I tempi di gestione degli ordini sono stati ridotti del 60%, grazie all'automazione di molti processi precedentemente manuali.</p>
    `,
    en: `
      <h3>The Project</h3>
      <p>This project was born from the client's need to transform their physical business into a digital activity. The e-commerce platform had to allow complete management of products, orders, payments, and shipments.</p>
      
      <h3>Challenges Faced</h3>
      <p>One of the main challenges was the integration of a secure and reliable payment system. We opted for Stripe API for its robustness and ease of implementation. Another significant challenge was creating an intuitive admin panel that would allow the client to easily manage the product catalog.</p>
      
      <h3>Methodological Approach</h3>
      <p>I adopted an Agile approach, with bi-weekly sprints, to ensure incremental delivery and constant feedback from the client. This allowed us to adapt development to emerging needs and make changes during the process without impacting delivery times.</p>
      
      <h3>Technical Solutions</h3>
      <p>The frontend was developed with React, using Redux for application state management. For the backend, I implemented a RESTful API with Node.js and Express, while MongoDB was chosen as the database for its flexibility in managing unstructured data.</p>
      
      <h3>Results</h3>
      <p>The platform allowed the client to increase sales by 45% in the first quarter after launch. Order management times were reduced by 60%, thanks to the automation of many previously manual processes.</p>
    `
  },
  "task-management-app": {
    it: `
      <h3>Il Progetto</h3>
      <p>L'applicazione di gestione attività è stata sviluppata per ottimizzare i flussi di lavoro interni di un'azienda di consulenza. Il cliente necessitava di uno strumento che permettesse la pianificazione e il monitoraggio di progetti complessi, con più team coinvolti.</p>
      
      <h3>Sfide Affrontate</h3>
      <p>La principale sfida è stata la creazione di un sistema di permessi granulare che permettesse diversi livelli di accesso in base ai ruoli aziendali. Inoltre, è stato necessario implementare un sistema di notifiche in tempo reale per aggiornamenti critici.</p>
      
      <h3>Approccio Metodologico</h3>
      <p>Ho utilizzato la metodologia Kanban per lo sviluppo, permettendo una visualizzazione chiara del flusso di lavoro e delle priorità. Le sessioni settimanali di review con il cliente hanno garantito allineamento costante sulle funzionalità in sviluppo.</p>
      
      <h3>Soluzioni Tecniche</h3>
      <p>L'applicazione è stata sviluppata con Vue.js per il frontend, sfruttando Vuex per la gestione dello stato. Firebase è stato scelto come backend-as-a-service per la sua facilità di integrazione e le funzionalità di real-time database e autenticazione. Tailwind CSS ha permesso di creare un'interfaccia responsive e moderna con tempi di sviluppo ridotti.</p>
      
      <h3>Risultati</h3>
      <p>L'implementazione dell'app ha portato a una riduzione del 30% nei tempi di completamento dei progetti e a un miglioramento significativo nella comunicazione tra team. Il cliente ha riportato un aumento della produttività generale del 25%.</p>
    `,
    en: `
      <h3>The Project</h3>
      <p>The task management application was developed to optimize the internal workflows of a consulting company. The client needed a tool that would allow planning and monitoring of complex projects, with multiple teams involved.</p>
      
      <h3>Challenges Faced</h3>
      <p>The main challenge was creating a granular permission system that would allow different levels of access based on company roles. In addition, it was necessary to implement a real-time notification system for critical updates.</p>
      
      <h3>Methodological Approach</h3>
      <p>I used the Kanban methodology for development, allowing a clear visualization of the workflow and priorities. Weekly review sessions with the client ensured constant alignment on the features under development.</p>
      
      <h3>Technical Solutions</h3>
      <p>The application was developed with Vue.js for the frontend, leveraging Vuex for state management. Firebase was chosen as a backend-as-a-service for its ease of integration and real-time database and authentication features. Tailwind CSS allowed for a responsive and modern interface with reduced development times.</p>
      
      <h3>Results</h3>
      <p>The implementation of the app led to a 30% reduction in project completion times and a significant improvement in communication between teams. The client reported a 25% increase in overall productivity.</p>
    `
  },
  "healthcare-portal": {
    it: `
      <h3>Il Progetto</h3>
      <p>Il portale sanitario è stato sviluppato per un network di cliniche private che necessitavano di un sistema integrato per la gestione di appuntamenti, cartelle cliniche e comunicazioni medico-paziente.</p>
      
      <h3>Sfide Affrontate</h3>
      <p>La principale sfida è stata garantire la conformità con le normative sulla privacy dei dati sanitari (GDPR e normative sanitarie specifiche). Inoltre, l'integrazione con i sistemi legacy delle cliniche ha richiesto lo sviluppo di connettori personalizzati.</p>
      
      <h3>Approccio Metodologico</h3>
      <p>Ho adottato un approccio a cascata modificato, con fasi ben definite di analisi, progettazione, sviluppo e test. Data la natura sensibile dei dati trattati, è stato dedicato molto tempo alla fase di testing e sicurezza.</p>
      
      <h3>Soluzioni Tecniche</h3>
      <p>Il backend è stato sviluppato con .NET Core, sfruttando Entity Framework per l'interazione con SQL Server. Il frontend è stato implementato con Angular, creando componenti riutilizzabili per le diverse sezioni del portale. L'intera soluzione è stata ospitata su Azure, sfruttando servizi come Azure AD per l'autenticazione e Azure Key Vault per la gestione sicura delle credenziali.</p>
      
      <h3>Risultati</h3>
      <p>Il portale ha permesso una riduzione del 70% nei tempi di accesso alle cartelle cliniche e una diminuzione del 50% negli errori di prenotazione. La soddisfazione dei pazienti, misurata attraverso sondaggi, è aumentata del 40% dopo l'implementazione.</p>
    `,
    en: `
      <h3>The Project</h3>
      <p>The healthcare portal was developed for a network of private clinics that needed an integrated system for managing appointments, medical records, and doctor-patient communications.</p>
      
      <h3>Challenges Faced</h3>
      <p>The main challenge was ensuring compliance with health data privacy regulations (GDPR and specific health regulations). In addition, integration with the clinics' legacy systems required the development of custom connectors.</p>
      
      <h3>Methodological Approach</h3>
      <p>I adopted a modified waterfall approach, with well-defined phases of analysis, design, development, and testing. Given the sensitive nature of the data processed, a lot of time was dedicated to the testing and security phase.</p>
      
      <h3>Technical Solutions</h3>
      <p>The backend was developed with .NET Core, leveraging Entity Framework for interaction with SQL Server. The frontend was implemented with Angular, creating reusable components for the different sections of the portal. The entire solution was hosted on Azure, leveraging services such as Azure AD for authentication and Azure Key Vault for secure credential management.</p>
      
      <h3>Results</h3>
      <p>The portal allowed a 70% reduction in medical record access times and a 50% decrease in booking errors. Patient satisfaction, measured through surveys, increased by 40% after implementation.</p>
    `
  },
  "real-estate-marketplace": {
    it: `
      <h3>Il Progetto</h3>
      <p>La piattaforma immobiliare è stata creata per un'agenzia immobiliare che voleva digitalizzare il proprio business. L'obiettivo era creare un marketplace dove venditori e acquirenti potessero incontrarsi, con strumenti avanzati di ricerca e valutazione delle proprietà.</p>
      
      <h3>Sfide Affrontate</h3>
      <p>Una delle principali sfide è stata l'integrazione di mappe interattive con funzionalità di ricerca geolocalizzata. Inoltre, la creazione di un algoritmo di valutazione automatica delle proprietà ha richiesto un lavoro significativo di analisi dei dati e machine learning.</p>
      
      <h3>Approccio Metodologico</h3>
      <p>Ho utilizzato un approccio agile con metodologia Scrum, con sprint di due settimane e demo regolari al cliente. Questo ha permesso di adattare lo sviluppo in base ai feedback e di mantenere il focus sulle funzionalità a più alto valore.</p>
      
      <h3>Soluzioni Tecniche</h3>
      <p>Il frontend è stato sviluppato con React e Redux per la gestione dello stato. Il backend è stato implementato con Django, sfruttando il suo potente ORM per l'interazione con PostgreSQL. L'integrazione con Google Maps API ha permesso di implementare le funzionalità di ricerca geolocalizzata e visualizzazione delle proprietà su mappa.</p>
      
      <h3>Risultati</h3>
      <p>La piattaforma ha permesso all'agenzia di aumentare del 35% il numero di contratti conclusi nei primi sei mesi dopo il lancio. Il tempo medio di vendita delle proprietà è diminuito del 20%, grazie al miglior matching tra domanda e offerta.</p>
    `,
    en: `
      <h3>The Project</h3>
      <p>The real estate platform was created for a real estate agency that wanted to digitize its business. The goal was to create a marketplace where sellers and buyers could meet, with advanced property search and valuation tools.</p>
      
      <h3>Challenges Faced</h3>
      <p>One of the main challenges was the integration of interactive maps with geolocation search functionality. In addition, creating an automatic property valuation algorithm required significant work in data analysis and machine learning.</p>
      
      <h3>Methodological Approach</h3>
      <p>I used an agile approach with Scrum methodology, with two-week sprints and regular demos to the client. This allowed for adapting development based on feedback and maintaining focus on the highest-value features.</p>
      
      <h3>Technical Solutions</h3>
      <p>The frontend was developed with React and Redux for state management. The backend was implemented with Django, leveraging its powerful ORM for interaction with PostgreSQL. Integration with Google Maps API allowed for implementing geolocation search functionality and property visualization on maps.</p>
      
      <h3>Results</h3>
      <p>The platform allowed the agency to increase the number of contracts concluded by 35% in the first six months after launch. The average property selling time decreased by 20%, thanks to better matching between supply and demand.</p>
    `
  }
};

// Helper to get project by slug
export const getProjectBySlug = (slug: string) => {
  return projectsData.find(project => project.slug === slug);
};
