import { Chip } from '@mui/material';

interface CareerChipProps {
   label: string;
   active: boolean;
}

export const CareerChip = ({ label, active }: CareerChipProps) => {
   return (
      <Chip
         size="small"
         label={label}
         color={active ? 'primary' : 'default'}
         variant={active ? 'filled' : 'filled'}
         sx={{ borderRadius: 1, fontWeight: 'bold', mr: 1 }}
      />
   );
};
