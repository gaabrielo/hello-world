import ImageGameroll from './assets/gameroll.webp';
import ImageSkinSpin from './assets/skinspin.png';
import ImageMovs from './assets/movs.webp';
import ImageReads from './assets/epubreads.png';
import ImageAstro from './assets/astro.png';
import ImageLupulo from './assets/lupulo.png';
import {
  IsoIconABC,
  IsoIconChess,
  IsoIconFastFood,
  IsoIconPlant,
  IsoIconStar,
  IsoIconTheater,
} from './utils/icons';

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

export const projectImagePath = {
  epubreads: { path: ImageReads, icon: IsoIconABC },
  skinspin: { path: ImageSkinSpin, icon: IsoIconChess },
  gameroll: { path: ImageGameroll, icon: IsoIconStar },
  astro: {
    path: ImageAstro,
    className: 'object-center',
    icon: IsoIconFastFood,
  },
  movs: { path: ImageMovs, className: 'object-center', icon: IsoIconTheater },
  lupulo: {
    path: ImageLupulo,
    className: 'object-center',
    icon: IsoIconPlant,
  },
};

const projects = [
  // astro
  {
    title: {
      pt: 'Astro Burger - Cardápio Digital',
      en: 'Astro Burger  - Digital Menu',
    },
    slug: 'astro',
    description: {
      pt: 'Cardápio digital de hamburgueria. Com foco na experiência mobile.',
      en: 'Digital menu for a burger restaurant. Focused on mobile experience.',
    },
    stack: ['React', 'Node.js', 'TypeScript', 'Supabase'],
    links: {
      web: 'https://burgerastro.vercel.app/',
      github: '',
    },
    inDevelopment: false,
  },
  // movs
  {
    title: 'movs',
    slug: 'movs',
    description: {
      pt: 'Registre seus filmes favoritos e acompanhe as avaliações dos seus amigos.',
      en: 'Register your favorite movies and follow the ratings of your friends.',
    },
    stack: ['React', 'Node.js', 'TypeScript', 'GraphQL'],
    links: {
      dribbble: 'https://dribbble.com/shots/18466798-movs-Cinema-application',
      github: '',
    },
    inDevelopment: false,
  },
  // epubreads
  {
    title: {
      pt: 'Reads — Leitor de EPUB online',
      en: 'Reads — Online EPUB Reader',
    },
    slug: 'epubreads',
    description: {
      pt: 'Leia arquivos .epub diretamente no seu navegador. Crie sua biblioteca pessoal, customize sua leitura e continue de onde parou. Simples e rápido.',
      en: 'Read .epub files directly in your browser. Create your personal library, customize your reading experience and continue where you left off. Simple and fast.',
    },
    stack: ['Next.js', 'TypeScript', 'IndexedDB'],
    links: { web: 'https://epub-reads.vercel.app/', github: '' },
    inDevelopment: true,
  },
  // lupulo
  {
    title: 'Lupulo',
    slug: 'lupulo',
    description: {
      pt: 'Sistema de suporte à decisão para a lavoura. Receba recomendações automatizadas e precisas sobre a irrigação da sua cultura, otimizando o uso da água com base em dados climáticos em tempo real e parâmetros específicos da planta.',
      en: 'Decision support system for crop cultivation. Receive automated and precise recommendations on irrigation, optimizing water usage based on real-time climate data and specific plant parameters.',
    },
    stack: ['React', 'Python', 'Flask', 'TypeScript'],
    links: {
      web: 'https://lupulo.vercel.app/',
      github: 'https://github.com/gaabrielo/lupulo-api/tree/master',
    },
    inDevelopment: false,
  },
  // gameroll
  {
    title: 'Gameroll',
    slug: 'gameroll',
    description: {
      pt: 'Gameroll é a sua rede social para games. Crie um diário com os jogos que você jogou, avalie, escreva críticas e descubra seu próximo jogo favorito com base nas recomendações da comunidade.',
      en: 'Gameroll is your social network for games. Create a diary with the games you played, rate, write critiques and discover your next favorite game with the community’s recommendations.',
    },
    stack: ['React Native', 'Node.js', 'TypeScript', 'Stripe'],
    links: {
      dribbble: 'https://dribbble.com/shots/22829842-Review-form-Gameroll',
    },
    inDevelopment: true,
  },
  // skinspin
  {
    title: 'SkinSpin',
    slug: 'skinspin',
    description: {
      pt: 'Abra caixas de skins de CS, gire a roleta e simule a criação do seu inventário dos sonhos.',
      en: 'Open boxes of CS skins, spin the wheel and simulate the creation of your dream inventory.',
    },
    stack: ['Next.js', 'Node.js', 'TypeScript', 'Framer Motion', 'Stripe'],
    links: { web: 'https://skinspin.vercel.app/', github: '' },
    inDevelopment: false,
  },
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
        status: {
          inDevelopment: 'In development',
          live: 'Live',
        },
        items: projects.map((p) => ({
          title: typeof p.title === 'string' ? p.title : p.title.en,
          slug: p.slug,
          description: p.description.en,
          stack: p.stack,
          links: p.links,
          inDevelopment: p.inDevelopment,
        })),
      },
      writings: {
        title: 'Writings',
        articles: [
          {
            slug: 'interdisciplinary',
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
            slug: 'neural-network',
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
        status: {
          inDevelopment: 'Em desenvolvimento',
          live: 'Live',
        },
        items: projects.map((p) => ({
          title: typeof p.title === 'string' ? p.title : p.title.pt,
          slug: p.slug,
          description: p.description.pt,
          stack: p.stack,
          links: p.links,
          inDevelopment: p.inDevelopment,
        })),
      },
      writings: {
        title: 'Artigos',
        articles: [
          {
            slug: 'interdisciplinary',
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
            slug: 'neural-network',
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
