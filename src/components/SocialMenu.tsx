import { Box, Divider, useTheme } from '@mui/material';
import { GitHubIcon } from './GitHubIcon';
import { LinkedInIcon } from './LinkedInIcon';

export const SocialMenu = () => {
   const theme = useTheme();

   return (
      <Box
         sx={{
            display: { xs: 'none', xl: 'flex' },
            flexDirection: 'column',
            alignItems: 'center',
            position: 'fixed',
            bottom: 0,
            left: 32,
            '& > *:not(:last-child)': {
               mb: 2,
            },
         }}
      >
         <GitHubIcon
            fontSize="large"
            link="https://github.com/matthieu-locussol"
            sx={{
               ':hover': {
                  transform: 'translateY(-5px)',
                  color: 'primary.main',
               },
            }}
         />
         <LinkedInIcon
            fontSize="large"
            link="https://www.linkedin.com/in/matthieu-locussol"
            sx={{
               ':hover': {
                  transform: 'translateY(-5px)',
                  color: 'primary.main',
               },
            }}
         />
         <Divider
            orientation="vertical"
            sx={{ border: `1px solid ${theme.palette.text.secondary}`, height: 80, width: '1px' }}
         />
      </Box>
   );
};
