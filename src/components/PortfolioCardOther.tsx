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
            borderRadius: 2.5,
            boxShadow:
               colorMode === 'dark'
                  ? 'rgb(2 12 27 / 40%) 0px 2px 8px, rgb(2 12 27 / 30%) 0px 1px 3px'
                  : 'rgba(46, 48, 71, 0.06) 0px 1px 3px, rgba(46, 48, 71, 0.04) 0px 1px 2px',
            transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
            ':hover': {
               transform: 'translateY(-5px)',
               boxShadow:
                  colorMode === 'dark'
                     ? 'rgb(2 12 27 / 60%) 0px 8px 30px -4px, rgb(2 12 27 / 40%) 0px 2px 8px'
                     : 'rgba(46, 48, 71, 0.10) 0px 8px 30px -4px, rgba(46, 48, 71, 0.05) 0px 2px 8px',
            },
         }}
      >
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
            sx={{ mt: 2 }}
         >
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
