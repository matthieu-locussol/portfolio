import { Box, Card, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import { useColorMode } from '../contexts/ColorModeContext';
import { Article } from '../data/articles';
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
                     ? 'rgb(2 12 27 / 100%) 0px 10px 30px -10px'
                     : 'rgb(2 12 27 / 70%) 0px 2px 9px -3px',
            },
            backgroundColor: theme.palette.background.default,
         }}>
         <ExternalLink href={link}>
            <Image
               src={picture}
               alt={title}
               width={960}
               height={360}
               layout="responsive"
               placeholder="blur"
            />
         </ExternalLink>
         <Box sx={{ p: 2 }}>
            <Typography component="h3" variant="caption">
               {date}
            </Typography>
            <Typography component="h2" variant="h6">
               <ExternalLink
                  href={link}
                  sx={{
                     fontSize: 18,
                     transition: 'all 0.15s ease-out 0s',
                     color: theme.palette.text.primary,
                     textDecoration: 'none',
                     ':hover': { color: theme.palette.primary.main },
                  }}>
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
