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
         <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {title}
            {company ? <ExternalLink href={company.link}>{` @ ${company.name}`}</ExternalLink> : ''}
         </Typography>
         <Box sx={{ mt: 1 }}>
            {tags.map((tag) => (
               <CareerChip label={tag} active={active} key={tag} />
            ))}
         </Box>
         {entries.map(([label, content]) => (
            <CareerEntry label={label} content={content} />
         ))}
      </Card>
   );
};
