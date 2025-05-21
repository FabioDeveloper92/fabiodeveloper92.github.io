
// About section content
export const aboutContent = {
  intro: {
    it: "Sono un Software Developer con una passione per la creazione di soluzioni digitali robuste ed eleganti. Con diversi anni di esperienza nello sviluppo web e applicativo, mi dedico a costruire software che risolve problemi reali.",
    en: "I'm a Software Developer with a passion for creating robust and elegant digital solutions. With several years of experience in web and application development, I dedicate myself to building software that solves real problems."
  },
  current: {
    it: "Attualmente lavoro in Mind3, dove mi occupo di turismo B2B, sviluppando soluzioni web innovative su misura per agenzie di viaggio, con l'obiettivo di facilitare e migliorare l'esperienza delle persone.",
    en: "I currently work at Mind3, where I focus on B2B travel by developing innovative, tailor-made web solutions for travel agencies, aiming to simplify and enhance people's experiences."
  },
  goal: {
    it: "Il mio obiettivo è continuare a crescere professionalmente nel settore IT, lavorando a progetti stimolanti che mi permettano di evolvere come sviluppatore e un giorno avviare una mia impresa tecnologica.",
    en: "Il mio obiettivo è creare soluzioni digitali all'avanguardia che uniscano tecnologia e creatività, per aiutare aziende e persone a trasformare le loro idee in realtà tangibili, migliorando l'esperienza digitale e generando valore concreto."
  },
  personalInfo: {
    name: "Fabio Ramoni",
    email: "fabramo92@gmail.com",
    phone: "-",
    availability: {
      it: "Disponibile per nuovi progetti",
      en: "Available for new projects"
    }
  },
  skills: [
    "JavaScript", "TypeScript", "React", "Angular", 
    "C#", "ASP.NET", ".NET Core", "SQL Server", 
    "MongoDB", "HTML5", "CSS3", "Git"
  ],
  skillLevels: []
};

// Resume/CV content
export const resumeContent = {
  education: [
    {
      degree: {
        it: "Laurea magistrale in Informatica",
        en: "Master's in Computer Science"
      },
      institution: {
        it: "Università Insubria, Varese",
        en: "Insubria University, Varese"
      },
      period: "2015 - 2017",
      description: {
        it: "Specializzazione in gestione dei progetti software.",
        en: "Specialization in software project management."
      }
    },
    {
      "degree": {
        "it": "Laurea triennale in Informatica",
        "en": "Bachelor’s Degree in Computer Science"
      },
      "institution": {
        "it": "Università Insubria, Varese",
        "en": "Insubria University, Varese"
      },
      "period": "2011 - 2015",
      "description": {
        "it": "",
        "en": ""
      }
      },
      {
        "degree": {
          "it": "Diploma di scuola superiore in Ragioneria e Programmazione",
          "en": "High School Diploma in Accounting and Programming"
        },
        "institution": {
          "it": "ITCG L. Einaudi, Domodossola (VB)",
          "en": "ITCG L. Einaudi, Domodossola (VB)"
        },
        "period": "2006 - 2011",
        "description": {
          "it": "Indirizzo Mercurio",
          "en": "Course: Mercurio"
        }
      }
  ],
  experience: [
    {
      role: {
        it: "Senior Software Developer",
        en: "Senior Software Developer"
      },
      company: {
        it: "Acme Tech Solutions",
        en: "Acme Tech Solutions"
      },
      period: {
        it: "2021 - Presente",
        en: "2021 - Present"
      },
      description: {
        it: "Sviluppo di applicazioni web enterprise con React, Node.js e .NET Core. Implementazione di architetture a microservizi e database distribuiti.",
        en: "Development of enterprise web applications with React, Node.js, and .NET Core. Implementation of microservice architectures and distributed databases."
      },
      achievements: {
        it: [
          "Riduzione del 30% nei tempi di caricamento delle applicazioni web",
          "Implementazione di CI/CD pipeline che hanno migliorato l'efficienza del team del 25%",
          "Formazione di sviluppatori junior su best practices e metodologie agili"
        ],
        en: [
          "30% reduction in web application loading times",
          "Implementation of CI/CD pipelines that improved team efficiency by 25%",
          "Training junior developers on best practices and agile methodologies"
        ]
      }
    },
    {
      role: {
        it: "Full Stack Developer",
        en: "Full Stack Developer"
      },
      company: {
        it: "Digital Innovations",
        en: "Digital Innovations"
      },
      period: "2018 - 2021",
      description: {
        it: "Progettazione e sviluppo di applicazioni web responsive utilizzando React, Node.js e MongoDB. Collaborazione con il team di design per migliorare l'UX.",
        en: "Design and development of responsive web applications using React, Node.js, and MongoDB. Collaboration with the design team to improve UX."
      },
      achievements: {
        it: [
          "Sviluppo di una dashboard analytics che ha incrementato le conversioni del 20%",
          "Ottimizzazione del database che ha migliorato le prestazioni del 40%",
          "Integrazione di sistemi di pagamento che hanno aumentato le vendite del 15%"
        ],
        en: [
          "Development of an analytics dashboard that increased conversions by 20%",
          "Database optimization that improved performance by 40%",
          "Integration of payment systems that increased sales by 15%"
        ]
      }
    },
    {
      role: {
        it: "Web Developer (Internship)",
        en: "Web Developer (Internship)"
      },
      company: {
        it: "Startup Hub",
        en: "Startup Hub"
      },
      period: "2017 - 2018",
      description: {
        it: "Sviluppo di componenti frontend utilizzando HTML, CSS e JavaScript. Collaborazione con il team di backend per l'integrazione di API.",
        en: "Development of frontend components using HTML, CSS, and JavaScript. Collaboration with the backend team for API integration."
      },
      achievements: {
        it: [
          "Creazione di landing pages per 5 progetti di successo",
          "Implementazione di un sistema di newsletter che ha ottenuto 2000+ iscritti",
          "Ottimizzazione SEO che ha portato a un aumento del traffico organico del 30%"
        ],
        en: [
          "Creation of landing pages for 5 successful projects",
          "Implementation of a newsletter system that got 2000+ subscribers",
          "SEO optimization that led to a 30% increase in organic traffic"
        ]
      }
    }
  ]
};

// Projects content
export const projectsContent = [
  {
    id: 1,
    title: {
      it: "Piattaforma E-commerce",
      en: "E-commerce Platform"
    },
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: {
      it: "Piattaforma e-commerce completa con gestione prodotti, carrello, pagamenti e area amministrativa.",
      en: "Complete e-commerce platform with product management, cart, payments, and admin area."
    },
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    slug: "e-commerce-platform"
  },
  {
    id: 2,
    title: {
      it: "App Gestione Attività",
      en: "Task Management App"
    },
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: {
      it: "Applicazione per la gestione di progetti e attività, con dashboard personalizzata e notifiche.",
      en: "Application for project and task management, with personalized dashboard and notifications."
    },
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    slug: "task-management-app"
  },
  {
    id: 3,
    title: {
      it: "Portale Sanitario",
      en: "Healthcare Portal"
    },
    category: "Enterprise Solution",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: {
      it: "Portale per la gestione di appuntamenti medici e cartelle cliniche, con dashboard per medici e pazienti.",
      en: "Portal for managing medical appointments and clinical records, with dashboards for doctors and patients."
    },
    technologies: [".NET Core", "SQL Server", "Angular", "Azure"],
    slug: "healthcare-portal"
  },
  {
    id: 4,
    title: {
      it: "Marketplace Immobiliare",
      en: "Real Estate Marketplace"
    },
    category: "Web Platform",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: {
      it: "Piattaforma per l'acquisto e la vendita di immobili, con ricerca avanzata e strumenti di valutazione.",
      en: "Platform for buying and selling real estate, with advanced search and valuation tools."
    },
    technologies: ["React", "Django", "PostgreSQL", "Google Maps API"],
    slug: "real-estate-marketplace"
  }
];
