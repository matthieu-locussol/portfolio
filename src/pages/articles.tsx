import { Box, Container, Typography, useTheme } from '@mui/material';
import { ArticleCard } from '../components/ArticleCard';
import { Layout } from '../components/Layout';
import { ARTICLES } from '../data/articles';
import { chunk } from '../utils/chunk';

const Articles = () => {
   const theme = useTheme();

   return (
      <Layout>
         <Container maxWidth="lg" sx={{ pt: 2, pb: 4 }}>
            <Typography component="h1" variant="h3">
               Articles
            </Typography>
            <Box>
               <Typography component="p" variant="subtitle1" color="textSecondary" sx={{ mt: 2 }}>
                  I love writing articles, whether it's for my work or just as a hobby, sharing
                  technical knowledge on a subject is always an enjoyable exercise. I have written
                  articles in English and French, you will find some of them listed below.
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
                  {chunk(ARTICLES, 2).map((articles, idx) => (
                     <Box
                        key={idx}
                        sx={{
                           display: 'grid',
                           gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
                           columnGap: 4,
                           marginBottom: 4,
                           '& > *:first-of-type': {
                              mb: { xs: 4, md: 0 },
                           },
                           ':last-child': {
                              mb: 4,
                           },
                        }}
                     >
                        {articles.map((article) => (
                           <ArticleCard key={article.title} {...article} />
                        ))}
                     </Box>
                  ))}
               </Box>
            </Container>
         </Box>
      </Layout>
   );
};

export default Articles;
