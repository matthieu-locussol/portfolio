import type { LinkProps } from '@mui/material';
import { Link } from '@mui/material';

interface ExternalLinkProps extends LinkProps {
   label: string;
}

export const ExternalLink = ({ label, ...rest }: ExternalLinkProps) => {
   return (
      <Link
         target="_blank"
         rel="noreferrer"
         aria-label={label}
         sx={{
            textDecoration: 'underline',
            transition: 'opacity 0.3s',
            '&:hover': {
               opacity: 0.8,
            },
         }}
         {...rest}
      />
   );
};
