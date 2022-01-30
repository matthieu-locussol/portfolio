import MuiGitHubIcon from '@mui/icons-material/GitHub';
import type { SvgIconProps } from '@mui/material';
import { useTheme } from '@mui/material';
import { ExternalLink } from './ExternalLink';

interface GitHubIconProps extends SvgIconProps {
   link: string;
}

export const GitHubIcon = ({ link, sx, ...rest }: GitHubIconProps) => {
   const theme = useTheme();

   return (
      <ExternalLink
         label="Visit GitHub page"
         href={link}
         sx={{
            pointerEvents: 'auto',
         }}>
         <MuiGitHubIcon
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
