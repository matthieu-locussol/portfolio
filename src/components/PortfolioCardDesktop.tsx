import type { BoxProps } from '@mui/material';
import { Box, Card, Typography, useTheme } from '@mui/material';
import NextImage from 'next/image';
import { useColorMode } from '../contexts/ColorModeContext';
import type { Project } from '../data/projects';
import { ExternalLink } from './ExternalLink';
import { GitHubIcon } from './GitHubIcon';
import { LinkIcon } from './LinkIcon';

interface PortfolioCardDesktopProps extends Project {
   rtl?: boolean;
   sx?: BoxProps['sx'];
}

export const PortfolioCardDesktop = ({
   picture,
   title,
   description,
   tags,
   link,
   github,
   rtl,
   sx,
}: PortfolioCardDesktopProps) => {
   const theme = useTheme();
   const { colorMode } = useColorMode();

   const property = rtl ? 'ml' : 'mr';

   const Image = () => (
      <Box sx={{ zIndex: 500 }}>
         <ExternalLink
            label="Visit project website"
            href={link}
            sx={{
               '& img': {
                  opacity: 0.6,
                  borderRadius: 1,
                  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                  border:
                     colorMode === 'light'
                        ? `1px solid ${theme.palette.text.primary} !important`
                        : `1px solid rgba(255, 255, 255, 0.12) !important`,
                  ':hover': {
                     opacity: 1,
                     cursor: 'pointer',
                  },
               },
            }}
         >
            <NextImage
               src={picture}
               alt={title}
               width={500}
               height={370}
               layout="fixed"
               placeholder="blur"
            />
         </ExternalLink>
      </Box>
   );

   const Description = () => (
      <Box
         sx={{
            display: 'flex',
            flexDirection: 'column',
            [property]: -16,
            zIndex: 510,
            pointerEvents: 'none',
         }}
      >
         <Typography
            component="h2"
            variant="subtitle1"
            color="primary"
            sx={{ [property]: 'auto', fontFamily: 'Fira Code' }}
         >
            Featured project
         </Typography>
         <Typography
            component="h3"
            gutterBottom
            variant="h5"
            color="textPrimary"
            fontWeight="600"
            sx={{ [property]: 'auto', mb: 3 }}
         >
            {title}
         </Typography>
         <Card
            variant="outlined"
            sx={{
               p: 3,
               boxShadow:
                  colorMode === 'dark'
                     ? 'rgb(2 12 27 / 100%) 0px 10px 30px -10px'
                     : 'rgb(2 12 27 / 70%) 0px 2px 9px -3px',
               backgroundColor: theme.palette.background.default,
               pointerEvents: 'auto',
            }}
         >
            <Typography
               component="p"
               align={rtl ? 'right' : 'left'}
               fontSize={15}
               lineHeight={1.7}
               color="secondary"
            >
               {description}
            </Typography>
         </Card>
         <Typography
            component="p"
            variant="button"
            color="textSecondary"
            sx={{ [property]: 'auto', mt: 2, maxWidth: '66%' }}
         >
            {`▹ ${tags.join(' ▹ ')}`}
         </Typography>
         <Box
            sx={{
               [property]: 'auto',
               mt: 2,
               ...(rtl && { '& > *:not(:first-of-type)': { [property]: 2 } }),
               ...(!rtl && { '& > *:not(:last-child)': { [property]: 2 } }),
            }}
         >
            {github && <GitHubIcon link={github} />}
            <LinkIcon link={link} />
         </Box>
      </Box>
   );

   return (
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', ...sx }}>
         {rtl ? <Image /> : <Description />}
         {rtl ? <Description /> : <Image />}
      </Box>
   );
};
