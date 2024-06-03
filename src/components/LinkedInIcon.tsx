import MuiLinkedInIcon from '@mui/icons-material/LinkedIn';
import type { SvgIconProps } from '@mui/material';
import { useTheme } from '@mui/material';
import { ExternalLink } from './ExternalLink';

interface LinkedInIconProps extends SvgIconProps {
   link: string;
}

export const LinkedInIcon = ({ link, sx, ...rest }: LinkedInIconProps) => {
   const theme = useTheme();

   return (
      <ExternalLink
         label="Visit LinkedIn profile"
         href={link}
         sx={{
            pointerEvents: 'auto',
         }}
      >
         <MuiLinkedInIcon
            color="secondary"
            sx={{
               transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
               ':hover': { color: theme.palette.primary.main },
               ...sx,
            }}
            {...rest}
         />
      </ExternalLink>
   );
};
