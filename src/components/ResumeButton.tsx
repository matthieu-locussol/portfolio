import { Button } from '@mui/material';

interface ResumeButtonProps {
   lang: 'EN' | 'FR';
}

export const ResumeButton = ({ lang }: ResumeButtonProps) => {
   return (
      <Button
         size="large"
         variant="outlined"
         sx={{ ml: 2 }}
         href={`/resume/Matthieu_LOCUSSOL_Resume_${lang}.pdf`}
         target="_blank"
         rel="noreferrer">
         Resume ({lang})
      </Button>
   );
};
