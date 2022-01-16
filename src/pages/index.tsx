import { Button, Container, Typography } from '@mui/material';
import { ExternalLink } from '../components/ExternalLink';
import { Layout } from '../components/Layout';

export default () => {
   return (
      <Layout>
         <Container maxWidth="md" sx={{ pt: { xs: 4, md: 18 }, pb: { xs: 4, md: 18 } }}>
            <Typography
               gutterBottom
               variant="subtitle1"
               color="primary"
               sx={{ fontFamily: 'Fira Code', fontSize: 18, mb: 2 }}>
               Hi, my name is
            </Typography>
            <Typography gutterBottom variant="h2">
               Matthieu Locussol.
            </Typography>
            <Typography gutterBottom variant="h2" color="textSecondary">
               I am a software engineer.
            </Typography>
            <Typography
               gutterBottom
               variant="subtitle1"
               color="textSecondary"
               sx={{ maxWidth: 500, lineHeight: '28px', mt: 4 }}>
               I'm a software engineer based in the south of France, working as a full-time worker
               at <ExternalLink href="https://galadrim.fr/">Galadrim</ExternalLink>. I love
               architecting & building high-quality softwares and intuitive web applications.
            </Typography>
            <Button size="large" variant="outlined" sx={{ mt: 6, p: '20px 28px', fontSize: 16 }}>
               Get In Touch
            </Button>
         </Container>
      </Layout>
   );
};
