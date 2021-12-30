import { Card, Typography } from '@mui/material';
import { Layout } from '../components/Layout';

export default () => {
   return (
      <Layout>
         <Typography variant="h5">Some title...</Typography>
         <Typography variant="body1" color="secondary">
            Some content...
         </Typography>
         <Card sx={{ p: 2, mt: 4 }}>Here is come card content!</Card>
      </Layout>
   );
};
