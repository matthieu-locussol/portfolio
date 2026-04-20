import { Box, Card, Typography, useTheme } from '@mui/material';
import { CareerChip } from './CareerChip';
import { CareerEntry } from './CareerEntry';
import { ExternalLink } from './ExternalLink';

type Role = {
   title: string;
   since: string;
};

interface CareerCardProps {
   roles?: Role[];
   title?: string;
   company?: {
      name: string;
      link: string;
   };
   tags: string[];
   active: boolean;
   internship?: boolean;
   entries?: [string, React.ReactNode][];
}

export const CareerCard = ({
   roles = [],
   title,
   company,
   tags,
   active,
   internship = false,
   entries = [],
}: CareerCardProps) => {
   const theme = useTheme();
   const fallbackRole = title ? [{ title, since: '' }] : [];
   const timelineRoles = [...(roles.length > 0 ? roles : fallbackRole)].reverse();
   const currentRole = timelineRoles[0];
   const hasSingleRole = timelineRoles.length <= 1;

   const companyLink = company ? (
      <>
         {' '}
         @{' '}
         <ExternalLink label={`Visit ${company.name} website`} href={company.link}>
            {`${company.name}`}
         </ExternalLink>
      </>
   ) : null;

   const borderColor = active
      ? theme.palette.primary.main
      : internship
        ? theme.palette.text.disabled
        : theme.palette.text.primary;

   return (
      <Card
         variant="outlined"
         sx={{
            p: 2,
            mb: 4,
            backgroundColor: internship
               ? theme.palette.mode === 'dark'
                  ? 'oklch(22.8% 0.013 107.4)'
                  : 'oklch(98.8% 0.003 106.5)'
               : theme.palette.background.default,
            borderLeft: `4px solid ${borderColor}`,
            opacity: internship ? 0.85 : 1,
            transition: 'border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
            ':hover': {
               transform: 'translateY(-2px)',
               borderLeftColor: theme.palette.primary.main,
            },
         }}
      >
         <Box sx={{ mt: hasSingleRole ? 1 : 0 }}>
            {hasSingleRole ? (
               <Typography
                  variant="h6"
                  component="h3"
                  sx={{ fontWeight: 600, lineHeight: 0.5, mb: 2 }}
               >
                  {currentRole?.title ?? ''}
                  {companyLink}
               </Typography>
            ) : (
               timelineRoles.map((role, index) => {
                  const isCurrent = index === 0;
                  const isLast = index === timelineRoles.length - 1;
                  const dotSize = isCurrent ? 10 : 8;

                  return (
                     <Box
                        key={`${role.title}-${role.since}`}
                        sx={{
                           display: 'flex',
                           gap: 1.5,
                           position: 'relative',
                           pb: isLast ? 0 : 1.5,
                        }}
                     >
                        <Box sx={{ width: 14, position: 'relative', flexShrink: 0 }}>
                           {!isLast && (
                              <Box
                                 component="svg"
                                 viewBox="0 0 14 100"
                                 preserveAspectRatio="none"
                                 sx={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    width: 14,
                                    height: 'calc(100% + 12px)',
                                 }}
                              >
                                 <line
                                    x1="7"
                                    y1="11"
                                    x2="7"
                                    y2="100"
                                    stroke={theme.palette.divider}
                                    strokeWidth="2"
                                 />
                              </Box>
                           )}
                           <Box
                              sx={{
                                 position: 'absolute',
                                 left: (14 - dotSize) / 2,
                                 top: isCurrent ? 7 : 5,
                                 width: dotSize,
                                 height: dotSize,
                                 borderRadius: '50%',
                                 backgroundColor:
                                    isCurrent && active
                                       ? theme.palette.primary.main
                                       : theme.palette.text.secondary,
                              }}
                           />
                        </Box>
                        <Box>
                           <Typography
                              variant={isCurrent ? 'h6' : 'subtitle1'}
                              component={isCurrent ? 'h3' : 'p'}
                              sx={{ fontWeight: isCurrent ? 600 : 500, lineHeight: 1.2 }}
                           >
                              {role.title}
                              {isCurrent && companyLink}
                           </Typography>
                           {role.since && (
                              <Typography
                                 component="p"
                                 variant="body2"
                                 color="textSecondary"
                                 fontStyle="italic"
                                 sx={{ mt: 0.25 }}
                              >
                                 {`Since ${role.since}`}
                              </Typography>
                           )}
                        </Box>
                     </Box>
                  );
               })
            )}
         </Box>
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
