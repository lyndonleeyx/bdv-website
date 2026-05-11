import { Link } from 'react-router-dom';

const PrivacyPage = () => {
  return (
    <div
      className="min-h-screen bg-cream"
      style={{
        paddingBlock: 'clamp(4rem, 6vw, 8rem)',
        paddingInline: 'clamp(1.5rem, 1rem + 3vw, 4rem)',
      }}
    >
      <div className="max-w-[720px] mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-[14px] text-text/50 hover:text-text transition-colors mb-12 uppercase tracking-wide"
        >
          &larr; Back to Home
        </Link>

        <h1
          className="text-text mb-2"
          style={{ fontSize: 'clamp(2rem, 1.5rem + 2vw, 3rem)', fontWeight: 700, lineHeight: 1.2 }}
        >
          Privacy Policy
        </h1>
        <p className="text-text/50 mb-8" style={{ fontSize: '0.875rem', fontStyle: 'italic' }}>
          Last updated: April 24, 2026
        </p>

        <div
          className="text-text"
          style={{ fontSize: '1rem', lineHeight: 1.8, fontWeight: 300 }}
        >
          <p className="mb-6">
            This website is operated by BDV CoBuilder Ops, Inc., a Delaware corporation.
          </p>

          <h2 className="text-text mb-3" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
            Information we collect.
          </h2>
          <p className="mb-6">
            When you visit this site, we may collect standard usage data automatically — such as
            IP address, browser type, and pages viewed — through analytics tools. We do not
            operate user accounts, subscription forms, or investor contact intake on this site.
            We do not knowingly collect personal information from visitors.
          </p>

          <h2 className="text-text mb-3" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
            How we use it.
          </h2>
          <p className="mb-6">
            Analytics data is used solely to understand site usage and improve the experience. We
            do not sell or share visitor data with third parties, except as required by law.
          </p>

          <h2 className="text-text mb-3" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
            Cookies.
          </h2>
          <p className="mb-6">
            This site may use cookies for analytics purposes. You can disable cookies in your
            browser settings without affecting your ability to use the site.
          </p>

          <h2 className="text-text mb-3" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
            Third-party services.
          </h2>
          <p className="mb-6">
            We may use third-party analytics providers (such as Google Analytics). Those providers
            have their own privacy policies governing their use of data.
          </p>

          <h2 className="text-text mb-3" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
            Contact.
          </h2>
          <p>
            For privacy questions, contact us at{' '}
            <a
              href="mailto:privacy@builtdifferent.vc"
              className="underline hover:text-text/70 transition-colors"
            >
              privacy@builtdifferent.vc
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
