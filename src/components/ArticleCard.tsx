import { Box, Card, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import { useColorMode } from '../contexts/ColorModeContext';
import type { Article } from '../data/articles';
import { ExternalLink } from './ExternalLink';

interface ArticleCardProps extends Article {}

export const ArticleCard = ({ title, content, date, picture, link }: ArticleCardProps) => {
   const theme = useTheme();
   const { colorMode } = useColorMode();

   return (
      <Card
         variant="outlined"
         sx={{
            p: 0,
            borderRadius: 2,
            transition: 'all 0.15s ease-out 0s',
            ':hover': {
               boxShadow:
                  colorMode === 'dark'
                     ? 'rgb(2 12 27 / 60%) 0px 8px 30px -4px, rgb(2 12 27 / 40%) 0px 2px 8px'
                     : 'rgba(46, 48, 71, 0.10) 0px 8px 30px -4px, rgba(46, 48, 71, 0.05) 0px 2px 8px',
               transform: 'translateY(-2px)',
            },
            backgroundColor: theme.palette.background.default,
         }}
      >
         <ExternalLink label="Read article content" href={link}>
            <Image src={picture} alt={title} layout="responsive" placeholder="blur" />
         </ExternalLink>
         <Box sx={{ p: 2 }}>
            <Typography component="h3" variant="caption">
               {date}
            </Typography>
            <Typography component="h4" variant="h6">
               <ExternalLink
                  label="Read article content"
                  href={link}
                  sx={{
                     fontSize: 18,
                     transition: 'all 0.15s ease-out 0s',
                     color: theme.palette.text.primary,
                     textDecoration: 'none',
                     ':hover': { color: theme.palette.primary.main },
                  }}
               >
                  {title}
               </ExternalLink>
            </Typography>
            <Typography component="p" variant="body2" color="textSecondary">
               {content.slice(0, 160)}...
            </Typography>
         </Box>
      </Card>
   );
};
