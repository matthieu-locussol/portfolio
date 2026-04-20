import { ListItem, ListItemText, Typography, useTheme } from '@mui/material';
import Link from 'next/link';
import { FONT_MONO } from '../theme/constants';

interface ResumeMobileButtonProps {
   lang: 'EN' | 'FR';
}

export const ResumeMobileButton = ({ lang }: ResumeMobileButtonProps) => {
   const theme = useTheme();

   return (
      <Link href={`/resume/Matthieu_LOCUSSOL_Resume_${lang}.pdf`} passHref>
         <ListItem component="a" button sx={{ p: 2 }}>
            <ListItemText
               primary={
                  <Typography
                     color={theme.palette.primary.main}
                     sx={{ fontFamily: FONT_MONO }}
                  >{`Resume (${lang})`}</Typography>
               }
            />
         </ListItem>
      </Link>
   );
};
