import { Button, Container, Typography } from '@mui/material';
import { Layout } from '../components/Layout';

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
            <Typography
               component="h1"
               gutterBottom
               variant="subtitle1"
               color="primary"
               sx={{ fontFamily: 'Fira Code', fontSize: 18, mb: 2 }}
            >
               What's Next?
            </Typography>
            <Typography gutterBottom variant="h2" sx={{ fontSize: 54 }}>
               Get In Touch
            </Typography>
            <Typography
               component="p"
               gutterBottom
               variant="subtitle1"
               color="textSecondary"
               sx={{ maxWidth: 600, lineHeight: '28px', mt: 4 }}
            >
               I am listening to all opportunities. Whether you have a question, a potential project
               or just want to say hi, I will get back to you as soon as possible!
            </Typography>
            <Button
               size="large"
               variant="outlined"
               sx={{ mt: 6, p: '20px 28px', fontSize: 16 }}
               href="mailto:dev.matthieu.locussol@gmail.com"
            >
               Say Hello
            </Button>
         </Container>
      </Layout>
   );
};

export default Contact;
