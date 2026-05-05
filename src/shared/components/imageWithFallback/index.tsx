import { useState } from 'react';
import classNames from 'classnames';

import './style.css';
import '@/app/index.css';

interface ImageWithFallbackProps {
  src?: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export const ImageWithFallback = ({
  src,
  alt,
  className,
  fallbackSrc = '/movie-placeholder.svg',
}: ImageWithFallbackProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc);

  const handleFinishLoading = () => setIsLoading(false);

  const handleImageError = () => {
    if (imgSrc === fallbackSrc) return;

    setImgSrc(fallbackSrc);
  };

  return (
    <>
      {isLoading && <div className={classNames(className, 'skeleton-block')} />}

      <img
        src={imgSrc}
        alt={alt}
        className={classNames(className, 'image', isLoading && 'image-hidden')}
        onLoad={handleFinishLoading}
        onError={handleImageError}
      />
    </>
  );
};
