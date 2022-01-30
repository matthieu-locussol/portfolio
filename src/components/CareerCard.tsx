import { Box, Card, Typography, useTheme } from '@mui/material';
import { CareerChip } from './CareerChip';
import { CareerEntry } from './CareerEntry';
import { ExternalLink } from './ExternalLink';

interface CareerCardProps {
   title: string;
   company?: {
      name: string;
      link: string;
   };
   tags: string[];
   active: boolean;
   entries?: [string, React.ReactNode][];
}

export const CareerCard = ({ title, company, tags, active, entries = [] }: CareerCardProps) => {
   const theme = useTheme();

   return (
      <Card
         variant="outlined"
         sx={{
            p: 2,
            backgroundColor: theme.palette.background.default,
            borderLeft: `4px solid ${
               active ? theme.palette.primary.main : theme.palette.text.primary
            }`,
            mb: 4,
         }}>
         <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
            {title}
            {company ? (
               <ExternalLink
                  label={`Visit ${company.name} website`}
                  href={company.link}>{` @ ${company.name}`}</ExternalLink>
            ) : (
               ''
            )}
         </Typography>
         <Box sx={{ mt: 1 }}>
            {tags.map((tag) => (
               <CareerChip key={tag} label={tag} active={active} />
            ))}
         </Box>
         {entries.map(([label, content]) => (
            <CareerEntry key={label} label={label} content={content} />
         ))}
      </Card>
   );
};
