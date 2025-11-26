export const stack = [
  { tech: 'Python', year: new Date().setFullYear('2019') },
  { tech: 'React', year: new Date().setFullYear('2020') },
  { tech: 'SQL', year: new Date().setFullYear('2020') },
  { tech: 'TypeScript', year: new Date().setFullYear('2020') },
  { tech: 'Next.js', year: new Date().setFullYear('2020') },
  { tech: 'Node.js', year: new Date().setFullYear('2020') },
  { tech: 'Java', year: new Date().setFullYear('2021') },
  { tech: 'NestJS', year: new Date().setFullYear('2021') },
  { tech: 'MongoDB', year: new Date().setFullYear('2021') },
  { tech: 'React Native', year: new Date().setFullYear('2021') },
  { tech: 'GraphQL', year: new Date().setFullYear('2022') },
  { tech: 'Supabase', year: new Date().setFullYear('2022') },
  { tech: 'Firebase', year: new Date().setFullYear('2022') },
  { tech: '.NET', year: new Date().setFullYear('2023') },
  { tech: 'C#', year: new Date().setFullYear('2023') },
  { tech: 'Remix', year: new Date().setFullYear('2023') },
];

export const translations = {
  en: {
    name: 'Gabriel Dias Mendonça',
    role: 'Full-Stack Software Developer',
    sections: {
      about: {
        title: 'About me',
        bio1: '23yo, Bachelor’s in Computer Science at UFPR. I’m a Full Stack Developer focused on building modern web products with smooth UX. Recently worked on platforms for edtech and agribusiness, including a gamified app for farmers and a web IDE for programming education.',
        bio2: 'I love crafting interfaces that not only look great, but feel fast and intuitive — using tools like TypeScript, Node.js, React and Framer Motion. Currently building tools with AI (OpenAI API) and diving deeper into design systems and WebGL.',
        findMe: 'You’ll find more about my work on',
        andCode: 'and more of my code on',
      },
      projects: {
        title: 'Projects',
        items: [
          {
            title: 'Reads — Online EPUB Reader',
            slug: 'epubreads',
            description:
              'Read .epub files directly in your browser. Create your personal library, customize your reading experience and continue where you left off. Simple and fast.',
            stack: ['Next.js', 'TypeScript', 'IndexedDB'],
            links: { web: 'https://epub-reads.vercel.app/', github: '' },
            inDevelopment: true,
          },
          {
            title: 'SkinSpin',
            slug: 'skinspin',
            description:
              'Open boxes of CS skins, spin the wheel and simulate the creation of your dream inventory.',
            stack: [
              'Next.js',
              'Node.js',
              'TypeScript',
              'Framer Motion',
              'Stripe',
            ],
            links: { web: 'https://skinspin.vercel.app/', github: '' },
            inDevelopment: false,
          },
          {
            title: 'Gameroll',
            slug: 'gameroll',
            description:
              'Gameroll is your social network for games. Create a diary with the games you played, rate, write critiques and discover your next favorite game with the community’s recommendations.',
            stack: ['React Native', 'Node.js', 'TypeScript', 'Stripe'],
            links: {
              dribbble:
                'https://dribbble.com/shots/22829842-Review-form-Gameroll',
            },
            inDevelopment: true,
          },
          {
            title: 'Astro Burger - Digital Menu',
            slug: 'astro',
            description:
              'Digital menu for a burger restaurant. Focused on mobile experience.',
            stack: ['React', 'Node.js', 'TypeScript', 'Supabase'],
            links: {
              web: 'https://burgerastro.vercel.app/',
              github: '',
            },
            inDevelopment: false,
          },
          {
            title: 'movs',
            slug: 'movs',
            description:
              'Register your favorite movies and follow the ratings of your friends.',
            stack: ['React', 'Node.js', 'TypeScript', 'GraphQL'],
            links: {
              dribbble:
                'https://dribbble.com/shots/18466798-movs-Cinema-application',
              github: '',
            },
            inDevelopment: false,
          },
        ],
      },
      writings: {
        title: 'Writings',
        articles: [
          {
            title:
              'Development of an Interdisciplinary Gamified Virtual Learning Environment',
            tags: [
              'Brazilian Symposium on Informatics in Education',
              'Philosophy of Science',
            ],
            redirectTo:
              'https://www.researchgate.net/publication/386258851_Desenvolvimento_de_um_Ambiente_Virtual_de_Aprendizagem_Gamificado_Interdisciplinar',
          },
          {
            title:
              "ESTIMATING STUDENTS' INTEREST IN REMOTE CLASSES BASED ON THE ANALYSIS OF FACIAL EXPRESSIONS USING CONVOLUTIONAL NEURAL NETWORKS",
            tags: [
              'IV Symposium on Degrees in Exact Sciences and Computing',
              'Computer Science',
            ],
            redirectTo:
              'https://www.researchgate.net/publication/395158220_ESTIMANDO_O_INTERESSE_DE_ALUNOS_EM_AULAS_REMOTAS_COM_BASE_NA_ANALISE_DE_EXPRESSOES_FACIAIS_COM_REDES_NEURAIS_CONVOLUCIONAIS',
          },
        ],
      },
      stack: {
        title: 'Stack',
        years: 'years',
      },
    },
  },
  pt: {
    name: 'Gabriel Dias Mendonça',
    role: 'Desenvolvedor Full-Stack',
    sections: {
      about: {
        title: 'Sobre mim',
        bio1: '23 anos, Licenciatura em Computação pela UFPR. Sou desenvolvedor Full Stack com foco na criação de produtos web modernos enfatizando a experiência do usuário. Recentemente atuei em plataformas para edtech e agronegócio, incluindo um app gamificado para agricultores e um IDE web para ensino de programação.',
        bio2: 'Gosto de criar interfaces não só bonitas, mas que também são rápidas e intuitivas — usando ferramentas como TypeScript, Node.js, React e Framer Motion. Atualmente estou desenvolvendo soluções com IA (OpenAI API) e me aprofundando em design systems e WebGL.',
        findMe: 'Você pode conhecer mais do meu trabalho no',
        andCode: 'e ver meu código no',
      },
      projects: {
        title: 'Projetos',
        items: [
          {
            title: 'Reads — Leitor de EPUB online',
            slug: 'epubreads',
            description:
              'Leia arquivos .epub diretamente no seu navegador. Crie sua biblioteca pessoal, customize sua leitura e continue de onde parou. Simples e rápido.',
            stack: ['Next.js', 'TypeScript', 'IndexedDB'],
            links: { web: 'https://epub-reads.vercel.app/', github: '' },
            inDevelopment: true,
          },
          {
            title: 'SkinSpin',
            slug: 'skinspin',
            description:
              'Abra caixas de skins de CS, gire a roleta e simule a criação do seu inventário dos sonhos.',
            stack: [
              'Next.js',
              'Node.js',
              'TypeScript',
              'Framer Motion',
              'Stripe',
            ],
            links: { web: 'https://skinspin.vercel.app/', github: '' },
            inDevelopment: false,
          },
          {
            title: 'Gameroll',
            slug: 'gameroll',
            description:
              'Gameroll é a sua rede social para games. Crie um diário com os jogos que você jogou, avalie, escreva críticas e descubra seu próximo jogo favorito com base nas recomendações da comunidade.',
            stack: ['React Native', 'Node.js', 'TypeScript', 'Stripe'],
            links: {
              dribbble:
                'https://dribbble.com/shots/22829842-Review-form-Gameroll',
            },
            inDevelopment: true,
          },
          {
            title: 'Astro Burger - Cardápio Digital',
            slug: 'astro',
            description:
              'Cardápio digital de hamburgueria. Com foco na experiência mobile.',
            stack: ['React', 'Node.js', 'TypeScript', 'Supabase'],
            links: {
              web: 'https://burgerastro.vercel.app/',
              github: '',
            },
            inDevelopment: false,
          },
          {
            title: 'movs',
            slug: 'movs',
            description:
              'Registre seus filmes favoritos e acompanhe as avaliações dos seus amigos.',
            stack: ['React', 'Node.js', 'TypeScript', 'GraphQL'],
            links: {
              dribbble:
                'https://dribbble.com/shots/18466798-movs-Cinema-application',
              github: '',
            },
            inDevelopment: false,
          },
        ],
      },
      writings: {
        title: 'Artigos',
        articles: [
          {
            title:
              'Desenvolvimento de um Ambiente Virtual de Aprendizagem Gamificado Interdisciplinar',
            tags: [
              'Simpósio Brasileiro de Informática na Educação',
              'Filosofia da Ciência',
            ],
            redirectTo:
              'https://www.researchgate.net/publication/386258851_Desenvolvimento_de_um_Ambiente_Virtual_de_Aprendizagem_Gamificado_Interdisciplinar',
          },
          {
            title:
              'ESTIMANDO O INTERESSE DE ALUNOS EM AULAS REMOTAS COM BASE NA ANÁLISE DE EXPRESSÕES FACIAIS COM REDES NEURAIS CONVOLUCIONAIS',
            tags: [
              'IV Simpósio de Licenciaturas em Ciências Exatas e em Computação',
              'Ciência da Computação',
            ],
            redirectTo:
              'https://www.researchgate.net/publication/395158220_ESTIMANDO_O_INTERESSE_DE_ALUNOS_EM_AULAS_REMOTAS_COM_BASE_NA_ANALISE_DE_EXPRESSOES_FACIAIS_COM_REDES_NEURAIS_CONVOLUCIONAIS',
          },
        ],
      },
      stack: {
        title: 'Experiência',
        years: 'anos',
      },
    },
  },
};
