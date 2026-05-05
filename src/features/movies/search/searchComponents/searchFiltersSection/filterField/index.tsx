import type { ReactNode } from 'react';

import './style.css';

interface FilterFieldProps {
  children: ReactNode;
  label: string;
}

export const FilterField = ({ children, label }: FilterFieldProps) => {
  return (
    <div className='filter-field'>
      <label className='filter-label'>{label}</label>

      {children}
    </div>
  );
};
