import { ExternalLink } from '../components/ExternalLink';

interface Work {
   roles: {
      title: string;
      since: string;
   }[];
   company: {
      name: string;
      link: string;
   };
   tags: string[];
   active: boolean;
   entries: [string, React.ReactNode][];
}

export const WORKS: Work[] = [
   {
      roles: [
         {
            title: 'Senior Fullstack Developer',
            since: 'May 2026',
         },
      ],
      company: {
         name: 'Iziwork',
         link: 'https://www.iziwork.com/',
      },
      tags: ['May 2026 -> Present', 'Iziwork', 'France'],
      active: true,
      entries: [
         [
            'Description',
            <>
               {
                  '▹ Building high-quality platform to simplify temporary work in France, with a focus on the web application'
               }
               <br />
               {'▹ Participate in architecture decisions and code reviews'}
               <br />
               {`▹ Communicate and sync with the team in an international environment`}
            </>,
         ],
         [
            'Technologies',
            '▹ Typescript ▹ React.js ▹ Next.js ▹ NestJS ▹ MongoDB ▹ Mongoose ▹ Kafka ▹ RabbitMQ',
         ],
         ['Methodologies', '▹ Agile ▹ Test-Driven Development ▹ SOLID Principles ▹ Clean Code'],
      ],
   },
   {
      roles: [
         {
            title: 'Fullstack Developer',
            since: 'April 2020',
         },
         {
            title: 'Senior Fullstack Developer',
            since: 'February 1st, 2025',
         },
      ],
      company: {
         name: 'Galadrim',
         link: 'https://galadrim.fr/',
      },
      tags: ['April 2020 -> May 2026', 'Galadrim', 'France'],
      active: false,
      entries: [
         [
            'Missions',
            <>
               {`▹ Frontend engineer @ `}
               <ExternalLink label="Atmen homepage" href="https://www.atmen.co/">
                  Atmen
               </ExternalLink>
               <br />
               {`▹ Fullstack developer @ `}
               <ExternalLink label="SGDF homepage" href="https://sgdf.fr/">
                  Scouts et Guides de France
               </ExternalLink>
               <br />
               {`▹ Fullstack developer @ `}
               <ExternalLink label="Directskills homepage" href="https://www.directskills.com/">
                  Directskills
               </ExternalLink>
               <br />
               {`▹ Lead backend developer @ `}
               <ExternalLink label="Typology homepage" href="https://www.typology.com/">
                  Typology
               </ExternalLink>
               <br />
               {`▹ Frontend developer @ `}
               <ExternalLink label="Posos homepage" href="https://www.posos.co/">
                  Posos
               </ExternalLink>
            </>,
         ],
         [
            'Description',
            <>
               {`▹ Writing modern, performant, maintainable code for multiple client and platforms (web & mobile)`}
               <br />
               {`▹ Work with a variety of different languages, tools, frameworks, and content management systems`}
               <br />
               {`▹ Communicate with multi-disciplinary teams of engineers and clients on a daily basis`}
               <br />
               {`▹ Mentoring newcomers and writing technical articles`}
               <br />
               {`▹ Communicating and progressing in an international environment`}
            </>,
         ],
         [
            'Technologies',
            '▹ Typescript ▹ React.js ▹ Next.js ▹ NestJS ▹ MobX ▹ Redux ▹ AWS ▹ GCP ▹ OVH ▹ TailwindCSS ▹ Material-UI ▹ Prisma ▹ TypeORM ▹ MySQL ▹ PostgreSQL ▹ GraphQL ▹ Relay ▹ GitLab CI/CD ▹ GitHub Actions',
         ],
         ['Methodologies', '▹ Agile ▹ Test-Driven Development'],
      ],
   },
   {
      roles: [
         {
            title: 'Innovation Finance Consultant',
            since: 'May 2019',
         },
      ],
      company: {
         name: 'III Financements',
         link: 'http://www.iii-financements.com/',
      },
      tags: ['May 2019 -> January 2025', 'III Financements', 'France'],
      active: false,
      entries: [
         [
            'Description',
            <>
               {
                  '▹ Writing technical documents for start-ups and SMEs in the context of fundraising applications to '
               }
               <ExternalLink label="Bpifrance homepage" href="https://www.bpifrance.com/">
                  Bpifrance
               </ExternalLink>
            </>,
         ],
         ['Technologies', '▹ Microsoft Word ▹ Microsoft Excel ▹ Microsoft PowerPoint'],
      ],
   },
   {
      roles: [
         {
            title: 'Software Engineer Intern',
            since: 'March 2019',
         },
      ],
      company: {
         name: 'Viveris',
         link: 'https://www.viveris.fr/',
      },
      tags: ['March 2019 -> September 2019', 'Viveris', 'France'],
      active: false,
      entries: [
         [
            'Description',
            <>
               {`▹ Worked with a R&D team of five researchers as a software engineer to improve `}
               <ExternalLink label="OpenSAND homepage" href="http://opensand.org/content/home.php">
                  OpenSAND
               </ExternalLink>
               {`, a 10+ years old software promoted by the `}
               <ExternalLink label="CNES homepage" href="https://cnes.fr/en">
                  CNES
               </ExternalLink>
               {` (french space center) and emulating satellite communication systems`}
               <br />
               {`▹ Architected an efficient and generic configuration library using C++ to define metamodels and datamodels that can be dynamically loaded and saved to files`}
               <br />
               {`▹ Developed a generic web HMI, automatically generated by parsing a metamodel and allowing to generate a datamodel to be live-loaded by OpenSAND ; Python3 bindings have been used to communicate between C++ and React.JS`}
               <br />
               {`▹ Designed a modern topology HMI allowing OpenSAND entities management, metamodels and datamodels management`}
            </>,
         ],
         [
            'Technologies',
            '▹ Software architecture ▹ Typescript ▹ React.JS ▹ Python ▹ C++ ▹ Catch2 ▹ Boost ▹ CMake ▹ DevOps',
         ],
      ],
   },
   {
      roles: [
         {
            title: 'Research Intern',
            since: 'June 2018',
         },
      ],
      company: {
         name: 'IRIT-ENSEEIHT',
         link: 'https://www.irit.fr/',
      },
      tags: ['June 2018 -> July 2018', 'IRIT-ENSEEIHT', 'France'],
      active: false,
      entries: [
         [
            'Description',
            <>
               {`▹ Defined a state-of-the-art of existing tools used for modeling Domain-Specific Languages using the web as a support platform`}
               <br />
               {`▹ Architected a solution to use Xtext, Sirius and Acceleo on the web using C++, TypeScript, the `}
               <ExternalLink
                  label="Language Server Protocol webpage"
                  href="https://microsoft.github.io/language-server-protocol/"
               >
                  LSP
               </ExternalLink>
               {` and the `}
               <ExternalLink
                  label="Graphical Server Protocol webpage"
                  href="https://obeonetwork.github.io/GraphicalServerProtocol/"
               >
                  GSP
               </ExternalLink>
            </>,
         ],
         [
            'Technologies',
            '▹ Software architecture ▹ State of the art realization ▹ Web development',
         ],
      ],
   },
   {
      roles: [
         {
            title: 'Software Engineer Intern',
            since: 'April 2017',
         },
      ],
      company: {
         name: 'IRIT-UPS',
         link: 'https://www.irit.fr/',
      },
      tags: ['April 2017 -> July 2017', 'IRIT-UPS', 'France'],
      active: false,
      entries: [
         [
            'Description',
            <>
               {`▹ Collaborated with a `}
               <ExternalLink label="IRIT Team webpage" href="https://www.irit.fr/STORM/site/team/">
                  team
               </ExternalLink>
               {` of research engineers to enhance `}
               <ExternalLink
                  label="Radium-Engine GitHub repository"
                  href="https://github.com/STORM-IRIT/Radium-Engine"
               >
                  Radium-Engine
               </ExternalLink>
               {`, a 3D rendering engine used by university teachers for their Master's courses`}
               <br />
               {`▹ Architected a better OpenGL abstraction to the Radium-Engine and allowed easier code maintenance related to future improvements of the OpenGL specification`}
               <br />
               {`▹ Helped working on `}
               <ExternalLink label="PBRT v3 repository" href="https://github.com/mmp/pbrt-v3">
                  PBRT
               </ExternalLink>
               {` integration within the engine`}
            </>,
         ],
         [
            'Technologies',
            '▹ Software architecture ▹ Image analysis ▹ C++ ▹ OpenGL ▹ GLSL ▹ GLbinding ▹ GLobjects ▹ Git',
         ],
      ],
   },
];
