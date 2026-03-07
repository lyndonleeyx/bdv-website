interface GradientOverlayProps {
  opacity?: number; // 0-1, default 1
}

export const GradientOverlay = ({ opacity = 1 }: GradientOverlayProps) => {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `
          radial-gradient(
            circle at 20% 30%,
            rgba(170,199,223,0.15) 0%,
            transparent 50%
          ),
          radial-gradient(
            circle at 80% 70%,
            rgba(180,170,210,0.1) 0%,
            transparent 50%
          )
        `,
        opacity,
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
};
