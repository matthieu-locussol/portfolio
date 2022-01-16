import { Link, LinkProps } from '@mui/material';

export const ExternalLink = (props: LinkProps) => {
   return (
      <Link
         target="_blank"
         rel="noreferrer"
         sx={{
            textDecoration: 'none',
            '&:hover': {
               opacity: 0.8,
               transition: 'opacity 0.3s',
            },
         }}
         {...props}
      />
   );
};
