import React from 'react';
import Image, { ImageProps } from 'next/image';

interface ImageFrameProps extends Omit<ImageProps, 'className'> {
  className?: string;
  containerClassName?: string;
}

export function ImageFrame({ className = '', containerClassName = '', alt, ...props }: ImageFrameProps) {
  return (
    <div className={`relative overflow-hidden rounded-xl bg-black ${containerClassName}`}>
      <Image
        alt={alt}
        className={`object-cover transition-transform duration-700 ease-out hover:scale-105 ${className}`}
        {...props}
      />
      <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
    </div>
  );
}
