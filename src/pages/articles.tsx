import { Box, Container, Typography, useTheme } from '@mui/material';
import { ArticleCard } from '../components/ArticleCard';
import { Layout } from '../components/Layout';
import { ARTICLES } from '../data/articles';
import { chunk } from '../utils/chunk';

export default () => {
   const theme = useTheme();

   return (
      <Layout>
         <Container maxWidth="lg" sx={{ pt: 2, pb: 4 }}>
            <Typography variant="h3">Articles</Typography>
            <Box>
               <Typography variant="subtitle1" color="textSecondary" sx={{ mt: 2 }}>
                  I love writing articles, whether it's for my work or just as a hobby, sharing
                  technical knowledge on a subject is always an enjoyable exercise. I have written
                  articles in English and French, which you will find listed below.
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
                     Technical
                  </Typography>
                  {chunk(ARTICLES, 2).map((articles) => (
                     <Box
                        sx={{
                           display: 'grid',
                           gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
                           columnGap: 4,
                           marginBottom: 4,
                           '& > *:first-child': {
                              mb: { xs: 4, md: 0 },
                           },
                           ':last-child': {
                              mb: 4,
                           },
                        }}>
                        {articles.map((article) => (
                           <ArticleCard {...article} />
                        ))}
                     </Box>
                  ))}
               </Box>
            </Container>
         </Box>
      </Layout>
   );
};