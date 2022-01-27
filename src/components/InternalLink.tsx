import { Link, LinkProps } from '@mui/material';
import NextLink from 'next/link';

export const InternalLink = ({ children, href, ...rest }: LinkProps) => {
   return (
      <NextLink href={href}>
         <Link
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
