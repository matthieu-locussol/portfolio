export interface BaseProject {
   title: string;
   description: string;
   tags: string[];
   github?: string;
   link: string;
}

export interface OtherProject extends BaseProject {
   type: 'web' | 'software' | 'tool';
}

export interface Project extends BaseProject {
   picture: string;
}

export const FEATURED_PROJECTS: Project[] = [
   {
      title: 'Kanjisho',
      description:
         'Kanjisho is a modern Japanese dictionary one can use to find informations on kanjis, words, English translations, kanji strokes and more. It uses third-party sources to provide these data.',
      tags: ['Typescript', 'AWS', 'Next.js', 'SSG', 'Vercel'],
      link: 'https://www.kanjisho.com/',
      picture: '/projects/kanjisho.png',
   },
   {
      title: 'Pokémine',
      description:
         'Pokémine is a webtool allowing users to ease the trade messages generation for Pokémon bots. It uses data from PokéAPI, Smogon & others to provide presets and input validation.',
      tags: ['Typescript', 'Scraping', 'React.JS', 'MobX', 'ViteJS'],
      link: 'https://pokemine.vercel.app/',
      picture: '/projects/pokemine.png',
   },
   {
      title: 'Portfolio',
      description:
         'My personal portfolio project is the website you are on! It uses TypeScript, MUI & Next.js and is available on GitHub.',
      tags: ['Typescript', 'Next.js', 'Material-UI', 'Responsive'],
      link: 'https://www.matthieu-locussol.com/',
      picture: '/projects/portfolio.png',
      github: 'https://github.com/matthieu-locussol/portfolio',
   },
   {
      title: 'Traycer',
      description:
         'Traycer is a little Ray-Tracer written in C++. Ray tracing is a rendering technique for generating an image by tracing the path of light as pixels in an image plane.',
      tags: ['C++', 'CMake', '3D Graphics', 'Cross-Platform'],
      link: 'https://matthieu-locussol.github.io/Traycer/',
      picture: '/projects/traycer.png',
      github: 'https://github.com/matthieu-locussol/Traycer',
   },
];

export const OTHER_PROJECTS: OtherProject[] = [
   {
      title: 'MagicVault',
      description:
         'MagicVault is a modern and responsive search engine and cards collection manager for the Magic: The Gathering TCG. It uses Scryfall API as a third party to retrieve cards informations.',
      tags: ['Typescript', 'FaunaDB', 'Next.js', 'Scryfall API'],
      link: 'https://magicvault.vercel.app/',
      github: 'https://github.com/matthieu-locussol/magicvault',
      type: 'web',
   },
   {
      title: 'Novelly',
      description:
         'Novelly is a free online writing platform accessible to everyone. Its purpose is to provide a pleasant environment and writing tools supported by a strong underlying architecture.',
      tags: ['Typescript', 'FaunaDB', 'AWS', 'Next.js', 'Material-UI'],
      link: 'https://novelly.netlify.com/',
      github: 'https://github.com/matthieu-locussol/Novelly',
      type: 'web',
   },
   {
      title: 'NatashaDiaries',
      description:
         "NatashaDiaries is a blog made to help japanese students willing to study abroad by providing them advices based on Natasha's experiences.",
      tags: ['Vue.JS', 'Netlify CMS', 'Gridsome', 'SEO'],
      link: 'https://natasha-diaries.netlify.com/',
      github: 'https://github.com/matthieu-locussol/NatashaDiaries',
      type: 'web',
   },
   {
      title: 'golPlayground',
      description:
         'A game of life simulator written in C++. Described by John Horton Conway in 1970, it is the most famous Turing complete cellular automata.',
      tags: ['C++', 'CMake', 'SFML', 'DevOps / CI', 'Cross-Platform'],
      link: 'https://matthieu-locussol.github.io/golPlayground/',
      github: 'https://github.com/matthieu-locussol/golPlayground',
      type: 'software',
   },
   {
      title: 'VSChill',
      description:
         'VSChill is a Visual Studio Code theme based on Nord, specifically edited to fit my preferences regarding Javascript / Typescript programming.',
      tags: ['VSCE', 'VS Code', 'JavaScript'],
      link: 'https://marketplace.visualstudio.com/items?itemName=matthieu-locussol.vschill',
      github: 'https://github.com/matthieu-locussol/VSChill',
      type: 'tool',
   },
   {
      title: 'MattBot',
      description:
         'A multipurpose Discord bot written using Typescript. Handles advanced commands for osu! game, commands for retrieving gifs and ping command.',
      tags: ['TypeScript', 'Discord.JS', 'Osu! API', 'Chart.JS'],
      link: 'https://matthieu-locussol.github.io/MattBot/',
      github: 'https://github.com/matthieu-locussol/MattBot',
      type: 'software',
   },
   {
      title: 'TVManager',
      description:
         'TVManager allows you to better manage your media library : TV Shows, Movies and Animes. It makes use of the TMDB API to retrieve all data and keep the website up to date.',
      tags: ['Jboss', 'Java EE', 'Database', 'JSP', 'API'],
      link: 'https://matthieu-locussol.github.io/TVManager/',
      github: 'https://github.com/matthieu-locussol/TVManager',
      type: 'web',
   },
   {
      title: 'Cact',
      description:
         'Cact is a cat fact coming with a random cute cat picture picker. It makes use of TheCatAPI and the cat-facts API with a modern React.JS project structure.',
      tags: ['React.JS', 'Typescript', 'REST API', 'Axios'],
      link: 'https://cact.netlify.com/',
      github: 'https://github.com/matthieu-locussol/cact',
      type: 'web',
   },
   {
      title: 'Hex',
      description:
         'Hex is a strategy board game for two players played on a hexagonal grid. Project carried out as part of my second year at Paul Sabatier University.',
      tags: ['C', 'HMI', 'SDL 1.2.15', 'Cross-Platform'],
      link: 'https://matthieu-locussol.github.io/Hex/',
      github: 'https://github.com/matthieu-locussol/Hex',
      type: 'software',
   },
   {
      title: 'SensorNetwork',
      description:
         'I had to realize a software to gather, visualize and interpret real-time datas from different types of sensors located on the University campus.',
      tags: ['Java', 'Swing', 'IoT', 'Network'],
      link: 'https://matthieu-locussol.github.io/SensorNetwork/',
      github: 'https://github.com/matthieu-locussol/SensorNetwork',
      type: 'software',
   },
];
