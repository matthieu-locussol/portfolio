import ToolIcon from '@mui/icons-material/BuildCircleSharp';
import WebIcon from '@mui/icons-material/Language';
import SoftwareIcon from '@mui/icons-material/Terminal';
import { Box, Card, Typography } from '@mui/material';
import { useColorMode } from '../contexts/ColorModeContext';
import type { OtherProject } from '../data/projects';
import { GitHubIcon } from './GitHubIcon';
import { LinkIcon } from './LinkIcon';

interface PortfolioCardOtherProps extends OtherProject {}

export const PortfolioCardOther = ({
   title,
   description,
   tags,
   link,
   github,
   type,
}: PortfolioCardOtherProps) => {
   const { colorMode } = useColorMode();

   return (
      <Card
         sx={{
            p: 4,
            mt: 1,
            borderRadius: 0.5,
            boxShadow:
               colorMode === 'dark'
                  ? 'rgb(2 12 27 / 100%) 0px 10px 30px -10px'
                  : 'rgb(2 12 27 / 70%) 0px 2px 9px -3px',
            transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
            ':hover': {
               transform: 'translateY(-5px)',
            },
         }}>
         <Box sx={{ display: 'flex', width: '100%' }}>
            {type === 'web' && <WebIcon color="primary" fontSize="large" sx={{ mr: 'auto' }} />}
            {type === 'software' && (
               <SoftwareIcon color="primary" fontSize="large" sx={{ mr: 'auto' }} />
            )}
            {type === 'tool' && <ToolIcon color="primary" fontSize="large" sx={{ mr: 'auto' }} />}
            {github && <GitHubIcon link={github} sx={{ mr: 2 }} />}
            <LinkIcon link={link} />
         </Box>
         <Typography
            component="h4"
            gutterBottom
            variant="h6"
            color="secondary"
            fontWeight="600"
            sx={{ mt: 2 }}>
            {title}
         </Typography>
         <Typography component="p" fontSize={15} lineHeight={1.7} color="secondary">
            {description}
         </Typography>
         <Typography component="p" color="textSecondary" sx={{ mt: 2 }}>
            {`▹ ${tags.join(' ▹ ')}`}
         </Typography>
      </Card>
   );
};
