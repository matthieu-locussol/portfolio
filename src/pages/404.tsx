import { Button, Container, Typography } from '@mui/material';
import Link from 'next/link';
import { Layout } from '../components/Layout';

const Custom404 = () => {
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
               minHeight: '80vh',
            }}
         >
            <Typography
               gutterBottom
               variant="h1"
               color="primary"
               sx={{ fontFamily: 'Fira Code', fontSize: { xs: 160, lg: 300 }, mb: 2 }}
            >
               404
            </Typography>
            <Typography gutterBottom variant="h2">
               Page Not Found
            </Typography>
            <Link href="/" passHref>
               <Button size="large" variant="outlined" sx={{ mt: 6, p: '20px 28px', fontSize: 16 }}>
                  Go Home
               </Button>
            </Link>
         </Container>
      </Layout>
   );
};

export default Custom404;
