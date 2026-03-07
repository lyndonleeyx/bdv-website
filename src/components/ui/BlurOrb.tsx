interface BlurOrbProps {
  color: string; // rgb() or rgba() format
  blur: number; // blur amount in px (typically 250 or 410)
  size: number; // diameter in px
  position: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  opacity?: number; // 0-1, default 0.3
}

export const BlurOrb = ({
  color,
  blur,
  size,
  position,
  opacity = 0.3,
}: BlurOrbProps) => {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: color,
        filter: `blur(${blur}px)`,
        opacity,
        zIndex: 0,
        ...position,
      }}
      aria-hidden="true"
    />
  );
};
