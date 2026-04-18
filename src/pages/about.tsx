import { Box, Container, Link, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import mePicture from '../../public/me.webp';
import { CareerCard } from '../components/CareerCard';
import { ExternalLink } from '../components/ExternalLink';
import { Layout } from '../components/Layout';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { EDUCATIONS } from '../data/educations';

const About = () => {
   const theme = useTheme();

   return (
      <Layout>
         <Container maxWidth="lg" sx={{ pt: 2, pb: 4 }}>
            <RevealOnScroll>
               <Typography variant="h3" component="h1">
                  About
               </Typography>
            </RevealOnScroll>
            <Box
               sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: { xs: 'column', md: 'row' },
               }}
            >
               <RevealOnScroll delay={0.1} width="fit-content">
                  <Box>
                     <Typography
                        component="p"
                        variant="subtitle1"
                        color="textSecondary"
                        sx={{ maxWidth: 500, mt: 2 }}
                     >
                        Hello! I'm Matthieu, I hold a Master's degree in Computer Science from{' '}
                        <ExternalLink
                           label="ENSEEIHT website"
                           href="http://www.enseeiht.fr/en/index.html"
                        >
                           ENSEEIHT
                        </ExternalLink>{' '}
                        and currently work fully remote at{' '}
                        <ExternalLink label="Iziwork website" href="https://www.iziwork.com/">
                           Iziwork
                        </ExternalLink>
                        , France. Day-to-day, I enjoy architecting solid web applications and
                        writing clean, scalable code.
                     </Typography>
                     <Typography
                        component="p"
                        variant="subtitle1"
                        color="textSecondary"
                        sx={{ maxWidth: 500, mt: 2 }}
                     >
                        I really enjoy collaborating within international teams, and I actively look
                        to keep that multicultural dynamic in my work.
                     </Typography>
                     <Typography
                        component="p"
                        variant="subtitle1"
                        color="textSecondary"
                        sx={{ maxWidth: 500, mt: 2 }}
                     >
                        This reflects my personal life too: my family ties to Japan mean I naturally
                        navigate in a cross-cultural environment.
                     </Typography>
                  </Box>
               </RevealOnScroll>
               <RevealOnScroll delay={0.2} width="fit-content">
                  <Box sx={{ position: 'relative', mt: { xs: 4, md: 0 } }}>
                     <Link
                        href="https://github.com/matthieu-locussol"
                        target="_blank"
                        rel="noreferrer"
                        sx={{
                           transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                           backgroundColor: theme.palette.primary.main,
                           borderRadius: 2,
                           display: 'block',
                           position: 'relative',
                           width: '100%',
                           maxWidth: '280px',
                           height: '97.5%',
                           maxHeight: { xs: '280px', md: '290px' },
                           margin: { xs: 'auto', md: 0 },
                           '& img': {
                              borderRadius: 2,
                              filter: 'grayscale(100%) contrast(1)',
                              mixBlendMode: 'multiply',
                              transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                           },
                           ':hover': {
                              cursor: 'pointer',
                              backgroundColor: 'transparent',
                              '& img': {
                                 filter: 'none',
                                 mixBlendMode: 'normal',
                                 transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                              },
                           },
                        }}
                     >
                        <Image
                           src={mePicture}
                           alt="Profile picture"
                           width={320}
                           height={320}
                           placeholder="blur"
                        />
                     </Link>
                  </Box>
               </RevealOnScroll>
            </Box>
         </Container>
         <Box
            sx={{
               borderTop: `1px solid ${theme.palette.divider}`,
               ml: -4,
               mr: -4,
               mt: 2,
               pt: 2,
               backgroundColor: theme.palette.background.paper,
            }}
         >
            <Container
               maxWidth="lg"
               sx={{
                  p: 4,
                  mb: -4,
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  width: '100%',
               }}
            >
               <Box
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     p: { xs: 0, sm: 4, md: 0 },
                  }}
               >
                  <RevealOnScroll>
                     <Typography gutterBottom variant="h4" component="h2">
                        Educations
                     </Typography>
                  </RevealOnScroll>
                  {EDUCATIONS.map((education, index) => (
                     <RevealOnScroll key={education.title} delay={index * 0.05}>
                        <CareerCard {...education} />
                     </RevealOnScroll>
                  ))}
               </Box>
            </Container>
         </Box>
      </Layout>
   );
};

export default About;
