
import React from 'react';

export const BrandMark: React.FC<{ className?: string; light?: boolean }> = ({ className = "w-8 h-8", light = false }) => (
  <img 
    src={light ? '/assets/logo_white.png' : '/assets/logo_black.png'} 
    alt="A47 AI Logo" 
    className={className}
  />
);

export const Logo: React.FC<{ light?: boolean }> = ({ light }) => (
  <BrandMark className="w-32 h-auto" light={light} />
);
