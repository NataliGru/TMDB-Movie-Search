import classNames from 'classnames';

import { PROGRESS_LOADER_VARIANTS } from './constants';
import type { ProgressLoaderVariant } from './types';

import './style.css';

interface ProgressLoaderProps {
  variant?: ProgressLoaderVariant;
}

export const ProgressLoader = ({
  variant = 'primary',
}: ProgressLoaderProps) => {
  return (
    <div className='progress-loader'>
      <div
        className={classNames(
          'progress-loader-fill',
          PROGRESS_LOADER_VARIANTS[variant],
        )}
      />
    </div>
  );
};
