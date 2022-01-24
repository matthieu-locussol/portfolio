import { Box, Container, Typography, useTheme } from '@mui/material';
import { CareerCard } from '../components/CareerCard';
import { ExternalLink } from '../components/ExternalLink';
import { Layout } from '../components/Layout';

export default () => {
   const theme = useTheme();

   return (
      <Layout>
         <Container maxWidth="lg" sx={{ pt: 2, pb: 4 }}>
            <Typography variant="h3">Work</Typography>
            <Box>
               <Typography variant="subtitle1" color="textSecondary" sx={{ mt: 2 }}>
                  As part of my work experience, I've been writing performant & scalable web
                  applications for a diverse array of customers and platforms. I have also been
                  communicating with different teams of engineers, researchers and designers on a
                  daily basis and have been mentoring newcomers as well as writing technical
                  articles.
               </Typography>
            </Box>
         </Container>
         <Box
            sx={{
               borderTop: `1px solid ${theme.palette.text.secondary}`,
               ml: -4,
               mr: -4,
               mt: 2,
               pt: 2,
               backgroundColor: theme.palette.background.paper,
            }}>
            <Container
               maxWidth="lg"
               sx={{
                  pt: 4,
                  pb: 4,
                  mb: -4,
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  width: '100%',
               }}>
               <Box
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                  }}>
                  <Typography gutterBottom variant="h4">
                     Careers
                  </Typography>
                  <CareerCard
                     title="Full-Stack Developer"
                     company={{
                        name: 'Galadrim',
                        link: 'https://galadrim.fr/',
                     }}
                     tags={['2020 -> Now', 'Galadrim', 'France']}
                     active={true}
                     entries={[
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
                           </>,
                        ],
                        [
                           'Technologies',
                           '▹ Typescript ▹ React.js ▹ React Native ▹ Next.js ▹ NestJS ▹ MobX ▹ Redux ▹ AWS ▹ GCP ▹ OVH ▹ TailwindCSS ▹ Material-UI ▹ Prisma ▹ TypeORM ▹ MySQL ▹ PostgreSQL ▹ GraphQL ▹ Relay ▹ GitLab CI/CD ▹ GitHub Actions',
                        ],
                        ['Methodologies', '▹ Agile ▹ Test-Driven Development'],
                     ]}
                  />
                  <CareerCard
                     title="Innovation Finance Consultant"
                     company={{
                        name: 'III Financements',
                        link: 'http://www.iii-financements.com/',
                     }}
                     tags={['2019 -> Now', 'III Financements', 'France']}
                     active={true}
                     entries={[
                        [
                           'Description',
                           '▹ Writing technical documents for start-ups and SMEs in the context of fundraising applications to Bpifrance',
                        ],
                        [
                           'Technologies',
                           '▹ Microsoft Word ▹ Microsoft Excel ▹ Microsoft PowerPoint',
                        ],
                     ]}
                  />
                  <CareerCard
                     title="Software Engineer Intern"
                     company={{
                        name: 'Viveris',
                        link: 'https://www.viveris.fr/',
                     }}
                     tags={['March 2019 -> September 2019', 'Viveris', 'France']}
                     active={false}
                     entries={[
                        [
                           'Description',
                           <>
                              {`▹ Worked with a R&D team of five researchers as a software engineer to improve `}
                              <ExternalLink href="http://opensand.org/content/home.php">
                                 OpenSAND
                              </ExternalLink>
                              {`, a 10+ years old software promoted by the `}
                              <ExternalLink href="https://cnes.fr/en">CNES</ExternalLink>
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
                     ]}
                  />
                  <CareerCard
                     title="Research Intern"
                     company={{
                        name: 'IRIT-ENSEEIHT',
                        link: 'https://www.irit.fr/',
                     }}
                     tags={['June 2018 -> July 2018', 'IRIT-ENSEEIHT', 'France']}
                     active={false}
                     entries={[
                        [
                           'Description',
                           <>
                              {`▹ Defined a state-of-the-art of existing tools used for modeling Domain-Specific Languages using the web as a support platform`}
                              <br />
                              {`▹ Architected a solution to use Xtext, Sirius and Acceleo on the web using C++, TypeScript, the `}
                              <ExternalLink href="https://microsoft.github.io/language-server-protocol/">
                                 LSP
                              </ExternalLink>
                              {` and the `}
                              <ExternalLink href="https://obeonetwork.github.io/GraphicalServerProtocol/">
                                 GSP
                              </ExternalLink>
                           </>,
                        ],
                        [
                           'Technologies',
                           '▹ Software architecture ▹ State of the art realization ▹ Web development',
                        ],
                     ]}
                  />
                  <CareerCard
                     title="Software Engineer Intern"
                     company={{
                        name: 'IRIT-UPS',
                        link: 'https://www.irit.fr/',
                     }}
                     tags={['April 2017 -> July 2017', 'IRIT-UPS', 'France']}
                     active={false}
                     entries={[
                        [
                           'Description',
                           <>
                              {`▹ Collaborated with a `}
                              <ExternalLink href="https://www.irit.fr/STORM/site/team/">
                                 team
                              </ExternalLink>
                              {` of research engineers to enhance `}
                              <ExternalLink href="https://github.com/STORM-IRIT/Radium-Engine">
                                 Radium-Engine
                              </ExternalLink>
                              {`, a 3D rendering engine used by university teachers for their Master's courses`}
                              <br />
                              {`▹ Architected a better OpenGL abstraction to the Radium-Engine and allowed easier code maintenance related to future improvements of the OpenGL specification`}
                              <br />
                              {`▹ Helped working on `}
                              <ExternalLink href="https://github.com/mmp/pbrt-v3">
                                 PBRT
                              </ExternalLink>
                              {` integration within the engine`}
                           </>,
                        ],
                        [
                           'Technologies',
                           '▹ Software architecture ▹ Image analysis ▹ C++ ▹ OpenGL ▹ GLSL ▹ GLbinding ▹ GLobjects ▹ Git',
                        ],
                     ]}
                  />
               </Box>
            </Container>
         </Box>
      </Layout>
   );
};
