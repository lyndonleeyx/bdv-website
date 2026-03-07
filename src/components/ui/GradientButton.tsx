import type { ReactNode } from 'react';

interface GradientButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  gradientColors?: [string, string]; // [from, to] colors
  className?: string;
}

export const GradientButton = ({
  children,
  href,
  onClick,
  variant = 'primary',
  gradientColors = ['rgb(170,199,223)', 'rgb(180,170,210)'],
  className = '',
}: GradientButtonProps) => {
  const baseStyles =
    'relative overflow-hidden px-6 py-3 rounded-full font-medium transition-all duration-300';

  const variantStyles = {
    primary: 'bg-text text-cream',
    secondary: 'border-2 border-text text-text bg-transparent',
  };

  const gradientStyle = `
    before:absolute before:inset-0
    before:bg-gradient-to-r
    before:translate-x-[-100%]
    before:transition-transform before:duration-500
    hover:before:translate-x-[100%]
  `;

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${gradientStyle} ${className}`;

  // Inline style for gradient colors
  const gradientBgStyle = {
    '--gradient-from': gradientColors[0],
    '--gradient-to': gradientColors[1],
  } as React.CSSProperties;

  if (href) {
    return (
      <a
        href={href}
        className={combinedStyles}
        style={gradientBgStyle}
        onClick={onClick}
      >
        <style>{`
          a.${combinedStyles.split(' ')[0]}::before {
            background: linear-gradient(
              90deg,
              transparent,
              ${gradientColors[0]},
              ${gradientColors[1]},
              transparent
            );
          }
        `}</style>
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <button
      className={combinedStyles}
      style={gradientBgStyle}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};
