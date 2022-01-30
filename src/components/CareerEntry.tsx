import { Box, Divider, Typography } from '@mui/material';

interface CareerEntryProps {
   label: string;
   content: React.ReactNode;
}

export const CareerEntry = ({ label, content }: CareerEntryProps) => {
   return (
      <>
         <Divider sx={{ mt: 2, mb: 2 }} />
         <Box
            sx={{
               display: 'flex',
               flexDirection: { xs: 'column', md: 'row' },
               justifyContent: 'space-between',
               alignItems: { xs: 'stretch', md: 'center' },
            }}>
            <Typography
               component="h4"
               variant="button"
               fontSize="15px"
               fontWeight="600"
               sx={{ minWidth: 150 }}>
               {label}
            </Typography>
            <Typography component="p" variant="body2" sx={{ lineHeight: '24px', width: '100%' }}>
               {content}
            </Typography>
         </Box>
      </>
   );
};
