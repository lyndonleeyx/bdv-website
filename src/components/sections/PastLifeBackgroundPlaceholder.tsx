/**
 * PastLifeBackgroundPlaceholder
 *
 * Minimal placeholder showing only building2 background.
 * Used as fromSection in PastLifeToFocusTransition to provide
 * visual continuity from PastLife without duplicating the carousel content.
 */

const PastLifeBackgroundPlaceholder = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: '100vh',
        backgroundImage: 'url("/assets/images/decorative/building2b.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
};

export default PastLifeBackgroundPlaceholder;
