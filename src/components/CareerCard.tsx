import { Box, Card, Typography, useTheme } from '@mui/material';
import { CareerChip } from './CareerChip';
import { CareerEntry } from './CareerEntry';
import { ExternalLink } from './ExternalLink';

interface CareerCardProps {
   roles?: {
      title: string;
      since: string;
   }[];
   title?: string;
   company?: {
      name: string;
      link: string;
   };
   tags: string[];
   active: boolean;
   entries?: [string, React.ReactNode][];
}

export const CareerCard = ({
   roles = [],
   title,
   company,
   tags,
   active,
   entries = [],
}: CareerCardProps) => {
   const theme = useTheme();
   const normalizedRoles =
      roles.length > 0
         ? roles
         : title
           ? [
                {
                   title,
                   since: '',
                },
             ]
           : [];
   const timelineRoles = [...normalizedRoles].reverse();
   const currentRole = timelineRoles[0];
   const hasSingleRole = timelineRoles.length <= 1;

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
                  {company ? (
                     <ExternalLink
                        label={`Visit ${company.name} website`}
                        href={company.link}
                     >{` @ ${company.name}`}</ExternalLink>
                  ) : null}
               </Typography>
            ) : (
               timelineRoles.map((role, index) => {
                  const isCurrent = index === 0;
                  const isLast = index === timelineRoles.length - 1;

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
                           {!isLast ? (
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
                           ) : null}
                           <Box
                              sx={{
                                 position: 'absolute',
                                 left: isCurrent ? 2 : 3,
                                 top: isCurrent ? 5 : 5,
                                 width: isCurrent ? 10 : 8,
                                 height: isCurrent ? 10 : 8,
                                 borderRadius: '50%',
                                 backgroundColor: isCurrent
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
                              {isCurrent && company ? (
                                 <ExternalLink
                                    label={`Visit ${company.name} website`}
                                    href={company.link}
                                 >{` @ ${company.name}`}</ExternalLink>
                              ) : null}
                           </Typography>
                           {role.since ? (
                              <Typography
                                 component="p"
                                 variant="body2"
                                 color="textSecondary"
                                 fontStyle="italic"
                                 sx={{ mt: 0.25 }}
                              >
                                 {`Since ${role.since}`}
                              </Typography>
                           ) : null}
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
