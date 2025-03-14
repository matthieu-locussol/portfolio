import { Box, Container, Typography, useTheme } from '@mui/material';
import { CareerCard } from '../components/CareerCard';
import { Layout } from '../components/Layout';
import { WORKS } from '../data/works';

const Work = () => {
   const theme = useTheme();

   return (
      <Layout>
         <Container maxWidth="lg" sx={{ pt: 2, pb: 4 }}>
            <Typography component="h1" variant="h3">
               Work
            </Typography>
            <Box>
               <Typography component="p" variant="subtitle1" color="textSecondary" sx={{ mt: 2 }}>
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
                  <Typography component="h2" gutterBottom variant="h4">
                     Careers
                  </Typography>
                  {WORKS.map((work, index) => (
                     <CareerCard
                        key={index}
                        title={work.title}
                        company={work.company}
                        tags={work.tags}
                        active={work.active}
                        entries={work.entries}
                     />
                  ))}
               </Box>
            </Container>
         </Box>
      </Layout>
   );
};

export default Work;
