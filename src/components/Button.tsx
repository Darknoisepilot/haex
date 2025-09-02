import * as React from 'react';

type Variant = 'primary' | 'secondary';
type Size = 'md' | 'lg';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    { variant = 'primary', size = 'md', className = '', children, ...props },
    ref,
  ) => {
    const base =
      'inline-flex items-center justify-center rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';
    const variants: Record<Variant, string> = {
      primary:
        'bg-white text-black hover:bg-neutral-200 focus:ring-neutral-300',
      secondary:
        'bg-neutral-900/60 text-neutral-100 hover:bg-neutral-800 focus:ring-neutral-700',
    };
    const sizes: Record<Size, string> = {
      md: 'h-10 px-4 text-sm',
      lg: 'h-12 px-5 text-base',
    };

    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = 'Button';
