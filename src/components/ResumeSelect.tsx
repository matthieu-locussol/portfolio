import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button, Menu, MenuItem } from '@mui/material';
import { useRef, useState } from 'react';

interface ResumeOption {
   lang: string;
   href: string;
}

const RESUME_OPTIONS: ResumeOption[] = [
   { lang: 'English', href: '/resume/Matthieu_LOCUSSOL_Resume_EN.pdf' },
   { lang: 'Français', href: '/resume/Matthieu_LOCUSSOL_Resume_FR.pdf' },
];

export const ResumeSelect = () => {
   const [open, setOpen] = useState(false);
   const anchorRef = useRef<HTMLButtonElement>(null);

   return (
      <>
         <Button
            ref={anchorRef}
            size="large"
            variant="outlined"
            sx={{ ml: 2 }}
            endIcon={<KeyboardArrowDownIcon />}
            onClick={() => setOpen((prev) => !prev)}
         >
            Resume
         </Button>
         <Menu
            anchorEl={anchorRef.current}
            open={open}
            onClose={() => setOpen(false)}
            PaperProps={{
               sx: {
                  minWidth: anchorRef.current?.offsetWidth,
               },
            }}
         >
            {RESUME_OPTIONS.map(({ lang, href }) => (
               <MenuItem
                  key={lang}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
               >
                  {lang}
               </MenuItem>
            ))}
         </Menu>
      </>
   );
};
