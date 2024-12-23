import { BACKEND_SKILLS, FRONTEND_SKILLS } from './tech-skills';

export const PROJECT_CATEGORY = {
  ALL: 'all',
  EDUCATION: 'education',
  GAMBLING: 'gambling',
  ECOMMERCE: 'e-commerce',
  ONLINE_MEDIA: 'online-media',
  HEALTH: 'health',
};

export const TABS = [
  {
    label: 'All',
    value: PROJECT_CATEGORY.ALL,
    icon: 'fluent:tab-desktop-20-regular',
  },
  {
    label: 'Education',
    value: PROJECT_CATEGORY.EDUCATION,
    icon: 'bx:code-block',
  },
  {
    label: 'Gambling',
    value: PROJECT_CATEGORY.GAMBLING,
    icon: 'fluent-mdl2:game-console',
  },
  {
    label: 'E-commerce',
    value: PROJECT_CATEGORY.ECOMMERCE,
    icon: 'fluent-mdl2:shopping-bag',
  },
  {
    label: 'Online Media',
    value: PROJECT_CATEGORY.ONLINE_MEDIA,
    icon: 'fluent-mdl2:video',
  },
  {
    label: 'Health',
    value: PROJECT_CATEGORY.HEALTH,
    icon: 'fluent-mdl2:health',
  },
];

const getSkillByLabel = (skills, techLabel) => {
  const skill = skills.find(({ label }) => label === techLabel);
  return skill ? skill : { label: techLabel, icon: 'unknown-icon' };
};

export const PROJECTS = [
  {
    title: 'Classtime',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Material UI (mui)'),
      getSkillByLabel(FRONTEND_SKILLS, 'Redux'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Mongodb'),
      getSkillByLabel(BACKEND_SKILLS, 'Laravel'),
      getSkillByLabel(BACKEND_SKILLS, 'Postgresql'),
      getSkillByLabel(BACKEND_SKILLS, 'Ruby on Rails'),
      getSkillByLabel(BACKEND_SKILLS, 'Mysql'),
      getSkillByLabel(FRONTEND_SKILLS, 'Angular'),
      getSkillByLabel(FRONTEND_SKILLS, 'Vue.js'),
      {
        label: 'Django',
        icon: 'logos:django-icon',
      },
    ],
    description:
      'A powerful digital tool for educational assessments and tests, providing real-time scoring and detailed analysis. Classtime empowers teachers by offering immediate feedback on student progress, thereby improving classroom interactions and learning outcomes.',
    sourceLink: 'https://www.classtime.com/',
    category: [PROJECT_CATEGORY.EDUCATION],
  },
  {
    title: 'Quiz App',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Node.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'MongoDB'),
    ],
    description:
      'The web application accessible at Quiz Fullstack App is a digital quiz platform. Such applications are designed for educational purposes, enabling users to create, take, and manage quizzes online. This type of platform is commonly used in education technology (EdTech) to provide interactive learning experiences and online assessments.',
    sourceLink: 'https://quiz-fullstack-app-2024-v2.onrender.com/',
    category: [PROJECT_CATEGORY.EDUCATION],
  },
  {
    title: 'Virtulearn',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'MongoDB'),
    ],
    description:
      'Virtulearn is an online platform offering streaming tutorial videos tailored specifically for engineering students. The platform provides comprehensive educational content across various engineering disciplines, designed to enhance the learning experience. By offering accessible and high-quality video tutorials, Virtulearn aims to make engineering education more engaging and easier to understand for students worldwide.',
    sourceLink: 'https://virtulearn.onrender.com',
    category: [PROJECT_CATEGORY.EDUCATION],
  },

  {
    title: 'Sports Interaction',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(BACKEND_SKILLS, 'REST Api'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Express'),
      getSkillByLabel(BACKEND_SKILLS, 'MongoDB'),
    ],
    description: 'An online sportsbook and casino offering a comprehensive range of betting options across various sports and casino games. The platform provides live updates and real-time data interaction for a more engaging user experience.',
    sourceLink: 'https://sports.sportsinteraction.com/en-ca/sports',
    category: [PROJECT_CATEGORY.GAMBLING,],
  },

  {
    title: 'LetsTango.com',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
    ],
    description: 'LetsTango.com is an independently-owned e-commerce platform based in the United Arab Emirates (UAE), offering a broad range of products including electronics, home appliances, fashion, and more. The store emphasizes secure shopping experiences and fast delivery, aiming to support local businesses in the Middle East.',
    sourceLink: 'https://www.letstango.com/',
    category: [PROJECT_CATEGORY.ECOMMERCE,],
  },
  {
    title: 'Netflix Clone',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Next.js'),
      getSkillByLabel(BACKEND_SKILLS, 'REST Api'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'MongoDB'),
    ],
    description: "The application accessible at Netflix Clone Login emulates Netflix's interface and functionality. Such projects are often created for educational purposes to help developers practice building complex, full-stack web applications using modern web technologies.",
    sourceLink: 'https://netflix-clone-one-plum-86.vercel.app/login',
    category: [PROJECT_CATEGORY.ONLINE_MEDIA,],
  },
  {
    title: 'Visiobelle',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React'),
      getSkillByLabel(BACKEND_SKILLS, 'REST Api'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'MongoDB'),
    ],
    description: "Visiobelle is a cutting-edge platform designed to provide realistic, real-time simulations of aesthetic facial treatments. By using advanced algorithms and AI-powered tools, Visiobelle allows both practitioners and patients to visualize potential treatment outcomes before undergoing procedures. Focused on minimally invasive treatments using hyaluronic acid and dermal fillers, Visiobelle offers multiple simulation levels (Silver, Gold, Diamond) to help users understand and plan their aesthetic goals. The platform also includes a medical directory to connect users with qualified professionals.",
    sourceLink: 'https://www.visiobelle.com/',
    category: [PROJECT_CATEGORY.HEALTH,],
  },
];
