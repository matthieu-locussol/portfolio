import type { LinkProps } from '@mui/material';
import { Link } from '@mui/material';
import NextLink from 'next/link';

interface InternalLinkProps extends LinkProps {
   label: string;
}

export const InternalLink = ({ children, href, label, ...rest }: InternalLinkProps) => {
   return (
      <NextLink href={href}>
         <Link
            aria-label={label}
            sx={{
               textDecoration: 'none',
               '&:hover': {
                  cursor: 'pointer',
                  opacity: 0.8,
                  transition: 'opacity 0.3s',
               },
            }}
            {...rest}>
            {children}
         </Link>
      </NextLink>
   );
};
