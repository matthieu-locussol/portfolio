import frencheersPicture from '../../public/projects/frencheers.webp';
import kanjishoPicture from '../../public/projects/kanjisho.webp';
import pokeminePicture from '../../public/projects/pokemine.webp';
import taktixPicture from '../../public/projects/taktix.webp';

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
   picture: StaticImageData;
}

export const FEATURED_PROJECTS: Project[] = [
   {
      title: 'Frencheers',
      description:
         'Frencheers allows you to study French grammar, using an interactive input-based SRS system. With a lot of sample sentences, audio, verb conjugations and more.',
      tags: ['Next.js', 'SEO', 'Better-auth', 'tRPC', 'HeroUI'],
      link: 'https://www.frencheers.com/',
      picture: frencheersPicture,
   },
   {
      title: 'Kanjisho',
      description:
         'Kanjisho is a modern Japanese dictionary one can use to find informations on kanjis, words, English translations, kanji strokes and more. It uses third-party sources to provide these data.',
      tags: ['Typescript', 'AWS', 'Next.js', 'SSG', 'Vercel'],
      link: 'https://www.kanjisho.com/',
      picture: kanjishoPicture,
   },
   {
      title: 'Taktix MMO',
      description:
         'An open-source cross-platform MMORPG written in TypeScript. It implements a bunch of features such as real-time multiplayer, chat, inventory, fights, and more.',
      tags: ['Phaser', 'Colyseus', 'Websockets', 'Tauri', 'Prisma'],
      link: 'https://taktix.vercel.app/',
      picture: taktixPicture,
      github: 'https://github.com/matthieu-locussol/taktix-app',
   },
   {
      title: 'Pokémine',
      description:
         'Pokémine is a webtool allowing users to ease the trade messages generation for Pokémon bots. It uses data from PokéAPI, Smogon & others to provide presets and input validation.',
      tags: ['Typescript', 'Scraping', 'React.JS', 'MobX', 'ViteJS'],
      link: 'https://pokemine.vercel.app/',
      picture: pokeminePicture,
   },
];

export const OTHER_PROJECTS: OtherProject[] = [
   {
      title: 'Frenchdrill',
      description: "Challenge yourself to learn French faster with this conjugation drill app. Study French grammar, using an interactive quizz system!",
      tags: ['Next.js', 'HeroUI', 'MobX', 'AWS S3', 'GCP TTS'],
      link: 'https://frenchdrill.vercel.app/',
      type: 'web',
   },
   {
      title: 'Pokéflou',
      description: "Guess the pokémon given a decreasingly blurred image and compare your rank with other players!",
      tags: ['Next.js', 'i18next', 'HeroUI', 'MobX', 'Sentry'],
      link: 'https://pokeflou.vercel.app/',
      github: 'https://github.com/matthieu-locussol/pokeflou',
      type: 'web',
   },
   {
      title: 'Kamikaze',
      description: 'Small implementation of the kamikaze drinking game.',
      tags: ['React.js', 'Typescript', 'Material-UI', 'MobX', 'Zod'],
      link: 'https://kamikaze-game.netlify.app/',
      github: 'https://github.com/matthieu-locussol/kamikaze',
      type: 'web',
   },
   {
      title: 'Portfolio',
      description:
         'My personal portfolio project is the website you are on! It uses TypeScript, MUI & Next.js and is available on GitHub.',
      tags: ['Typescript', 'Next.js', 'Material-UI', 'Responsive'],
      link: 'https://www.matthieu-locussol.com/',
      github: 'https://github.com/matthieu-locussol/portfolio',
      type: 'web',
   },
   {
      title: 'SaaSational',
      description:
         'A sensational SaaS boilerplate that allows you to jump straight into your product instead of reinventing the wheel!',
      tags: ['Next.js', 'Shadcn/ui', 'Tailwindcss', 'Stripe', 'Mailgun'],
      link: 'https://saasational.vercel.app/',
      type: 'tool',
   },
   {
      title: "Shohei's Portfolio",
      description: "Shohei Okayama (岡山昇平) is a Japanese artist and illustrator. He is specialized in realistic painting and illustration.",
      tags: ['Next.js', 'Vercel', 'Material-UI', 'Stripe', 'Mailjet'],
      link: 'https://saasational.vercel.app/',
      type: 'web',
   },
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
         'Novelly is a free online writing platform accessible to everyone. Its purpose is to provide a pleasant environment and writing tools supported by a serverless underlying architecture.',
      tags: ['Typescript', 'FaunaDB', 'AWS', 'Next.js', 'Material-UI'],
      link: 'https://novelly.netlify.app/',
      github: 'https://github.com/matthieu-locussol/Novelly',
      type: 'web',
   },
   {
      title: 'NatashaDiaries',
      description:
         "NatashaDiaries is a blog made to help japanese students willing to study abroad by providing them advices based on Natasha's experiences.",
      tags: ['Vue.JS', 'Netlify CMS', 'Gridsome', 'SEO'],
      link: 'https://natasha-diaries.netlify.app/',
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
      title: 'MachuBot',
      description:
         'A multipurpose Discord bot written using Typescript. Handles advanced commands for osu! game, commands for retrieving gifs and ping command.',
      tags: ['TypeScript', 'Discord.JS', 'Osu! API', 'Chart.JS'],
      link: 'https://matthieu-locussol.github.io/MachuBot/',
      github: 'https://github.com/matthieu-locussol/MachuBot',
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
      link: 'https://cact.netlify.app/',
      github: 'https://github.com/matthieu-locussol/cact',
      type: 'web',
   },
   {
      title: 'Traycer',
      description:
         'Traycer is a little Ray-Tracer written in C++. Ray tracing is a rendering technique for generating an image by tracing the path of light as pixels in an image plane.',
      tags: ['C++', 'CMake', '3D Graphics', 'Cross-Platform'],
      link: 'https://matthieu-locussol.github.io/Traycer/',
      github: 'https://github.com/matthieu-locussol/Traycer',
      type: 'software',
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
