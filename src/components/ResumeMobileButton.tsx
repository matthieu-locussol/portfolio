import { ListItem, ListItemText, Typography, useTheme } from '@mui/material';
import Link from 'next/link';

interface ResumeMobileButtonProps {
   lang: 'EN' | 'FR';
}

export const ResumeMobileButton = ({ lang }: ResumeMobileButtonProps) => {
   const theme = useTheme();

   return (
      <Link href={`/resume/Matthieu_LOCUSSOL_Resume_${lang}.pdf`} passHref>
         <ListItem button sx={{ p: 2 }}>
            <ListItemText
               primary={
                  <Typography
                     color={theme.palette.primary.main}
                     sx={{ fontFamily: 'Fira Code' }}>{`Resume (${lang})`}</Typography>
               }
            />
         </ListItem>
      </Link>
   );
};
