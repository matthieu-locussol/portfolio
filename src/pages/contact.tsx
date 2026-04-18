import { Button, Container, Typography } from '@mui/material';
import { Layout } from '../components/Layout';
import { RevealOnScroll } from '../components/RevealOnScroll';

const Contact = () => {
   return (
      <Layout>
         <Container
            maxWidth="md"
            sx={{
               pt: { xs: 4, md: 10 },
               pb: 4,
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'center',
               alignItems: 'center',
               textAlign: 'center',
            }}
         >
            <RevealOnScroll delay={0}>
               <Typography
                  component="h1"
                  gutterBottom
                  variant="overline"
                  color="primary"
                  sx={{ mb: 2 }}
               >
                  What's Next?
               </Typography>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
               <Typography
                  gutterBottom
                  variant="h2"
                  sx={{ fontSize: { xs: '2.5rem', md: '3.375rem' } }}
               >
                  Get In Touch
               </Typography>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2} width="fit-content">
               <Typography
                  component="p"
                  gutterBottom
                  variant="subtitle1"
                  color="textSecondary"
                  sx={{ maxWidth: 600, mt: 4 }}
               >
                  I am listening to all opportunities. Whether you have a question, a potential
                  project or just want to say hi, I will get back to you!
               </Typography>
            </RevealOnScroll>
            <RevealOnScroll delay={0.3}>
               <Button
                  size="large"
                  variant="outlined"
                  sx={{ mt: 6, p: '20px 28px', fontSize: 16 }}
                  href="mailto:dev.matthieu.locussol@gmail.com"
               >
                  Say Hello
               </Button>
            </RevealOnScroll>
         </Container>
      </Layout>
   );
};

export default Contact;
