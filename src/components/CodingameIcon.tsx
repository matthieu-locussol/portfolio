import CodeIcon from '@mui/icons-material/Code';
import type { SvgIconProps } from '@mui/material';
import { useTheme } from '@mui/material';
import { ExternalLink } from './ExternalLink';

interface CodingameIconProps extends SvgIconProps {
   link: string;
}

export const CodingameIcon = ({ link, sx, ...rest }: CodingameIconProps) => {
   const theme = useTheme();

   return (
      <ExternalLink
         label="Visit Codingame profile"
         href={link}
         sx={{
            pointerEvents: 'auto',
         }}>
         <CodeIcon
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
