import { Button, Container, Typography } from '@mui/material';
import { ExternalLink } from '../components/ExternalLink';
import { Layout } from '../components/Layout';
import { RevealOnScroll } from '../components/RevealOnScroll';

const Home = () => {
   return (
      <Layout>
         <Container maxWidth="md" sx={{ pt: { xs: 4, md: 10 }, pb: 4 }}>
            <RevealOnScroll delay={0}>
               <Typography
                  component="h1"
                  gutterBottom
                  variant="overline"
                  color="primary"
                  sx={{ mb: 2 }}
               >
                  Hi, my name is
               </Typography>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
               <Typography
                  gutterBottom
                  variant="h2"
                  sx={{ fontSize: { xs: '2.5rem', md: '3.375rem' } }}
               >
                  Matthieu Locussol.
               </Typography>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
               <Typography
                  component="h3"
                  gutterBottom
                  variant="h2"
                  color="textSecondary"
                  sx={{ fontSize: { xs: '2.5rem', md: '3.375rem' } }}
               >
                  I am a fullstack developer.
               </Typography>
            </RevealOnScroll>
            <RevealOnScroll delay={0.3}>
               <Typography
                  component="p"
                  gutterBottom
                  variant="subtitle1"
                  color="textSecondary"
                  sx={{ maxWidth: 500, mt: 4 }}
               >
                  I'm a senior fullstack developer working as a full remote worker at{' '}
                  <ExternalLink label="Iziwork website" href="https://www.iziwork.com/">
                     Iziwork
                  </ExternalLink>
                  . I love architecting & building high-quality softwares and intuitive web
                  applications.
               </Typography>
            </RevealOnScroll>
            <RevealOnScroll delay={0.4}>
               <Button
                  size="large"
                  variant="outlined"
                  sx={{ mt: 6, p: '20px 28px', fontSize: 16 }}
                  href="mailto:dev.matthieu.locussol@gmail.com"
               >
                  Get In Touch
               </Button>
            </RevealOnScroll>
         </Container>
      </Layout>
   );
};

export default Home;
