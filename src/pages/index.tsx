import { Button, Container, Typography } from '@mui/material';
import { ExternalLink } from '../components/ExternalLink';
import { Layout } from '../components/Layout';

const Home = () => {
   return (
      <Layout>
         <Container maxWidth="md" sx={{ pt: { xs: 4, md: 10 }, pb: 4 }}>
            <Typography
               gutterBottom
               variant="subtitle1"
               color="primary"
               sx={{ fontFamily: 'Fira Code', fontSize: 18, mb: 2 }}>
               Hi, my name is
            </Typography>
            <Typography gutterBottom variant="h2" sx={{ fontSize: 54 }}>
               Matthieu Locussol.
            </Typography>
            <Typography gutterBottom variant="h2" color="textSecondary" sx={{ fontSize: 54 }}>
               I am a software engineer.
            </Typography>
            <Typography
               gutterBottom
               variant="subtitle1"
               color="textSecondary"
               sx={{ maxWidth: 500, lineHeight: '28px', mt: 4 }}>
               I'm a software engineer based in the south of France, working as a full-time full
               remote worker at{' '}
               <ExternalLink label="Galadrim website" href="https://galadrim.fr/">
                  Galadrim
               </ExternalLink>
               . I love architecting & building high-quality softwares and intuitive web
               applications.
            </Typography>
            <Button
               size="large"
               variant="outlined"
               sx={{ mt: 6, p: '20px 28px', fontSize: 16 }}
               href="mailto:dev.matthieu.locussol@gmail.com">
               Get In Touch
            </Button>
         </Container>
      </Layout>
   );
};

export default Home;
