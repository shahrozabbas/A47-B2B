
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-500 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed tracking-tight overflow-hidden relative group";
  
  const variants = {
    primary: "bg-neutral-900 text-white hover:bg-neutral-800 shadow-xl shadow-black/10",
    secondary: "bg-brand text-white hover:bg-brand-dark shadow-xl shadow-brand/20",
    outline: "bg-white/40 backdrop-blur-md text-neutral-700 border border-white/80 hover:border-brand/40 hover:bg-white shadow-sm",
    ghost: "bg-transparent text-neutral-400 hover:text-brand"
  };

  const sizes = {
    sm: "px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]",
    md: "px-8 py-4 rounded-3xl text-sm",
    lg: "px-10 py-5 rounded-[32px] text-base"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      <div className="relative z-10 flex items-center">
        {icon && <span className="mr-3 transition-transform group-hover:scale-110">{icon}</span>}
        {children}
      </div>
    </button>
  );
};
