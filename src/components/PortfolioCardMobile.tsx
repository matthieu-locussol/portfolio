import { Box, Card, CardProps, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import { useColorMode } from '../contexts/ColorModeContext';
import type { Project } from '../data/projects';
import { ExternalLink } from './ExternalLink';
import { GitHubIcon } from './GitHubIcon';
import { LinkIcon } from './LinkIcon';

interface PortfolioCardMobileProps extends Project {
   sx?: CardProps['sx'];
}

export const PortfolioCardMobile = ({
   picture,
   title,
   description,
   tags,
   link,
   github,
   sx,
}: PortfolioCardMobileProps) => {
   const theme = useTheme();
   const { colorMode } = useColorMode();

   return (
      <Card
         variant="outlined"
         sx={{
            display: 'flex',
            flexDirection: 'column',
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
            ...sx,
         }}>
         <ExternalLink href={link}>
            <Image
               src={picture}
               alt={title}
               width={500}
               height={190}
               layout="responsive"
               objectFit="cover"
               objectPosition="right top"
               placeholder="blur"
            />
         </ExternalLink>
         <Box sx={{ p: 2, mt: -2 }}>
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
            <Typography gutterBottom component="h3" variant="button" color="primary">
               {`▹ ${tags.join(' ▹ ')}`}
            </Typography>
            <Typography component="p" variant="body2" color="textSecondary" sx={{ mt: 1 }}>
               {description}
            </Typography>
            <Box
               sx={{
                  display: 'flex',
                  width: '100%',
                  '& > *:first-child': { ml: 'auto' },
                  '& > *:not(:first-child)': { ml: 2 },
                  mt: 2,
               }}>
               {github && <GitHubIcon link={github} />}
               <LinkIcon link={link} />
            </Box>
         </Box>
      </Card>
   );
};
