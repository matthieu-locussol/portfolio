import { Box, Container, Typography, useTheme } from '@mui/material';
import { CareerCard } from '../components/CareerCard';
import { Layout } from '../components/Layout';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { WORKS } from '../data/works';

const Work = () => {
   const theme = useTheme();

   return (
      <Layout>
         <Container maxWidth="lg" sx={{ pt: 2, pb: 4 }}>
            <RevealOnScroll>
               <Typography component="h1" variant="h3">
                  Work
               </Typography>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
               <Box>
                  <Typography
                     component="p"
                     variant="subtitle1"
                     color="textSecondary"
                     sx={{ mt: 2 }}
                  >
                     As part of my work experience, I've been writing performant & scalable web
                     applications for a diverse array of customers and platforms. I have also been
                     communicating with different teams of engineers, researchers and designers on a
                     daily basis and have been mentoring newcomers as well as writing technical
                     articles.
                  </Typography>
               </Box>
            </RevealOnScroll>
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
                     <Typography component="h2" gutterBottom variant="h4">
                        Careers
                     </Typography>
                  </RevealOnScroll>
                  {WORKS.map((work, index) => (
                     <RevealOnScroll key={index} delay={index * 0.05}>
                        <CareerCard
                           roles={work.roles}
                           company={work.company}
                           tags={work.tags}
                           active={work.active}
                           internship={work.internship}
                           entries={work.entries}
                        />
                     </RevealOnScroll>
                  ))}
               </Box>
            </Container>
         </Box>
      </Layout>
   );
};

export default Work;
