import classNames from 'classnames';
import type { ReactNode } from 'react';

import type { CircleLoaderVariant } from './types';

import './style.css';

type CircleLoaderProps = {
  children?: ReactNode;
  variant?: CircleLoaderVariant;
};

export const CircleLoader = ({
  children,
  variant = 'primary',
}: CircleLoaderProps) => {
  return (
    <div className='loader' role='status' aria-live='polite'>
      <div className={classNames('circle-loader', variant)} />

      {children && children}
    </div>
  );
};
