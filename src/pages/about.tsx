import { Box, Container, Link, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import { CareerCard } from '../components/CareerCard';
import { ExternalLink } from '../components/ExternalLink';
import { Layout } from '../components/Layout';
import { EDUCATIONS } from '../data/educations';

export default () => {
   const theme = useTheme();

   return (
      <Layout>
         <Container maxWidth="lg" sx={{ pt: 2, pb: 4 }}>
            <Typography variant="h3">About</Typography>
            <Box
               sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: { xs: 'column', md: 'row' },
               }}>
               <Box>
                  <Typography
                     variant="subtitle1"
                     color="textSecondary"
                     sx={{ maxWidth: 500, mt: 2 }}>
                     Hello! I'm Matthieu, a graduated software engineer based in Toulouse (France)
                     who enjoys architecting and building applications. I develop both softwares and
                     websites using modern technologies to provide end-users with intuitive and
                     efficient ready-to-use tools.
                  </Typography>
                  <Typography
                     variant="subtitle1"
                     color="textSecondary"
                     sx={{ maxWidth: 500, mt: 2 }}>
                     Shortly after graduating from{' '}
                     <ExternalLink href="http://www.enseeiht.fr/en/index.html">
                        ENSEEIHT
                     </ExternalLink>
                     , I joined the engineering team at{' '}
                     <ExternalLink href="https://galadrim.fr/">Galadrim</ExternalLink> where I work
                     on challenging and purposeful projects daily. Besides my work, I work as a
                     freelance consultant in innovation funding at{' '}
                     <ExternalLink href="http://www.iii-financements.com/">
                        III Financements
                     </ExternalLink>
                     .
                  </Typography>
               </Box>
               <Box sx={{ position: 'relative', mt: { xs: 4, md: 0 } }}>
                  <Link
                     href="https://github.com/matthieu-locussol"
                     target="_blank"
                     rel="noreferrer"
                     sx={{
                        transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: 1,
                        display: 'block',
                        position: 'relative',
                        width: '100%',
                        maxWidth: '280px',
                        height: '97.5%',
                        maxHeight: { xs: '280px', md: '290px' },
                        margin: { xs: 'auto', md: 0 },
                        '& img': {
                           borderRadius: 1,
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
                     }}>
                     <Image src="/me.jpg" alt="Profile picture" width={320} height={320} />
                  </Link>
               </Box>
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
                  p: 4,
                  mb: -4,
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  width: '100%',
               }}>
               <Box
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     p: { xs: 0, sm: 4, md: 0 },
                  }}>
                  <Typography gutterBottom variant="h4">
                     Educations
                  </Typography>
                  {EDUCATIONS.map((education) => (
                     <CareerCard {...education} />
                  ))}
               </Box>
            </Container>
         </Box>
      </Layout>
   );
};
