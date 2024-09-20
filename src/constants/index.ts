export const navLinks = [
    {
      id: 1,
      name: 'Accueil',
      href: '#home',
    },
    {
      id: 2,
      name: 'A propos',
      href: '#about',
    },
    {
      id: 3,
      name: 'Projets',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const myProjects = [
    {
      title: 'AirBnB Clone',
      desc: "Ce projet visait à créer une réplique fonctionnelle d'AirBnB, permettant aux utilisateurs de rechercher, réserver et gérer des locations. Développée avec Next.js 13, Tailwind CSS, TypeScript, Prisma et MongoDB, cette application m'a permis d'explorer en profondeur ces technologies modernes.",
      subdesc:
        "Bien que ce soit une réplique, ce projet a été un tremplin important dans mon parcours d'apprentissage. Il m'a permis de maîtriser les fondamentaux de Next.js et de découvrir les vastes possibilités offertes par ce framework puissant et flexible.",
      href: 'https://bnb-clone-next.vercel.app/',
      texture: '/textures/project/airbnb-clone.mp4',
      logo: '/assets/airbnb.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'Next.js',
          path: '/assets/nextjs.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'PrismaORM',
          path: '/assets/prisma.svg',
        },
        {
          id: 5,
          name: 'MongoDB',
          path: '/assets/mongodb.svg',
        },
      ],
    },
    {
      title: 'ShopMMI - Administration',
      desc: "ShopMMI est une application e-commerce fictive dont j'ai développé le portail d'administration. Utilisant Next.js, PlanetScale, TailwindCSS et Prisma, ce dashboard offre des fonctionnalités complètes pour gérer les produits, les commandes, les utilisateurs et visualiser les statistiques de vente.",
      subdesc:
        "Ce projet m'a permis d'approfondir mes compétences full-stack, en mettant l'accent sur la création d'interfaces utilisateur intuitives et la gestion efficace des données. J'ai pu explorer les défis liés à la sécurité et aux performances dans un contexte d'administration e-commerce.",
      href: 'https://ecommerce-next-js-admin.vercel.app/',
      texture: '/textures/project/admin-e-commerce.mp4',
      logo: '/assets/admin-mmi.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'Next.js',
          path: '/assets/nextjs.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 3,
          name: 'Prisma',
          path: '/assets/prisma.svg',
        },
        {
          id: 4,
          name: 'PlanetScale',
          path: '/assets/planetscale.svg',
        },
      ],
    },
    {
      title: 'ShopMMI - Frontend',
      desc: "Le frontend de ShopMMI, développé avec les mêmes technologies que le backend, offre une expérience utilisateur fluide et responsive. Les clients peuvent parcourir les produits, les ajouter au panier et effectuer des réservations, le tout dans une interface intuitive et esthétique.",
      subdesc:
        "Ce projet m'a permis de perfectionner mes compétences en développement front-end, en mettant l'accent sur la création d'interfaces utilisateur intuitives et réactives. Travaillant en tandem avec le backend, j'ai pu approfondir ma compréhension de l'intégration front-end/back-end dans un contexte e-commerce.",
      href: 'https://ecommerce-next-js-store.vercel.app/',
      texture: '/textures/project/e-commerce-shop.mp4',
      logo: '/assets/shopmmi.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Stripe',
          path: '/assets/stripe.svg',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall: boolean, isMobile: boolean, isTablet: boolean): {
    deskScale: number;
    cubeScale: number;
    reactLogoScale: number;
    ringScale: number;
    targetScale: number;
    deskPosition: [number, number, number];
    cubePosition: [number, number, number];
    reactLogoPosition: [number, number, number];
    ringPosition: [number, number, number];
    targetPosition: [number, number, number];
  } => {
    return {
      deskScale: isSmall ? 0.055 : isMobile ? 0.06 : isTablet ? 0.055 : 0.055,
      cubeScale: isSmall ? .6 : isMobile ? .6 : isTablet ? .5 : .7,
      reactLogoScale: isSmall ? .3 : isMobile ? .4 : isTablet ? .3 : .5,
      ringScale: isSmall ? .3 : isMobile ? .4 : isTablet ? .3 : .5,
      targetScale: isSmall ? .5 : isMobile ? 1 : isTablet ? 1 : 1.5,
      deskPosition: isSmall ? [0.5, -4, 0] : isMobile ? [0.5, -7, 0] : isTablet ? [0.25, -5, 0] : [0.25, -4.5, 0],
      cubePosition: isSmall ? [6, -2, 0] : isMobile ? [8, -3, 0] : isTablet ? [6.5, -4, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [5, 5, 0] : isMobile ? [7, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-20, 13.5, 0] : isMobile ? [-5, 3, 0] : isTablet ? [-1, 3, 0] : [-7, 3, 0],
      targetPosition: isSmall ? [-6, -5, 0] : isMobile ? [-10.5, -10, -10] : isTablet ? [-9.5, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 2,
      name: 'CPAM de Haute-Garonne',
      pos: 'Concepteur-Développeur',
      duration: 'Juillet 2023 - Aujourd\'hui',
      title: "À l'origine en tant que stagiaire, puis en CDD en passant par l'alternance, j'ai travaillé sur plusieurs applications utilisées par les agents de la CPAM, en équipe réduite comme en équipe de 10 personnes à responsabilités différentes. Ces applications étaient destinées à un usage interne, afin de simplifier la vie des agents.",
      icon: '/assets/cpam.png',
      animation: 'shake-hands',
    },
    {
      id: 3,
      name: 'Insert Solutions',
      pos: 'Stagiaire - Developpeur Web',
      duration: 'Février 2022 - Mars 2022',
      title: "Insert Solutions est une entreprise basée à Castres, dans le Tarn, qui a pour but de faciliter la réinsertion professionnelle des personnes à circonstances difficiles. J'ai travaillé sur leur site web et sur leur application mobile.",
      icon: '/assets/insert.png',
      animation: 'bow',
    },
  ];