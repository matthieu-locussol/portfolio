export interface Project {
   picture: string;
   title: string;
   description: string;
   tags: string[];
   github?: string;
   link: string;
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
      title: 'Novelly',
      description:
         'Novelly is a free online writing platform accessible to everyone. Its purpose is to provide a pleasant environment and writing tools supported by a strong underlying architecture.',
      tags: ['Typescript', 'FaunaDB', 'AWS', 'Next.js', 'Material-UI'],
      link: 'https://novelly.netlify.com/',
      picture: '/projects/novelly.png',
      github: 'https://github.com/matthieu-locussol/Novelly',
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
