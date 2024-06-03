import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import type { SvgIconProps } from '@mui/material';
import { useTheme } from '@mui/material';
import { ExternalLink } from './ExternalLink';

interface LinkIconProps extends SvgIconProps {
   link: string;
}

export const LinkIcon = ({ link, sx, ...rest }: LinkIconProps) => {
   const theme = useTheme();

   return (
      <ExternalLink
         label="Visit project website"
         href={link}
         sx={{
            pointerEvents: 'auto',
         }}
      >
         <OpenInNewIcon
            fontSize="large"
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
