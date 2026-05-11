import { Link } from 'react-router-dom';

const TermsPage = () => {
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
          Terms of Use
        </h1>
        <p className="text-text/50 mb-8" style={{ fontSize: '0.875rem', fontStyle: 'italic' }}>
          Last updated: April 24, 2026
        </p>

        <div
          className="text-text"
          style={{ fontSize: '1rem', lineHeight: 1.8, fontWeight: 300 }}
        >
          <p className="mb-6">
            This website is operated by BDV CoBuilder Ops, Inc., a Delaware corporation. By
            accessing this site, you agree to these terms.
          </p>

          <h2 className="text-text mb-3" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
            Informational only.
          </h2>
          <p className="mb-6">
            The content on this site is for informational purposes only. Nothing on this site
            constitutes investment advice, a solicitation to invest, an offer to purchase or sell
            any security, or a recommendation of any kind. BDV CoBuilder Ops, Inc. is not a
            registered investment adviser, broker-dealer, or financial adviser.
          </p>

          <h2 className="text-text mb-3" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
            Intellectual property.
          </h2>
          <p className="mb-6">
            All content on this site — including text, graphics, and logos — is owned by or
            licensed to BDV CoBuilder Ops, Inc. You may not reproduce, distribute, or create
            derivative works from this content without prior written consent.
          </p>

          <h2 className="text-text mb-3" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
            No warranties.
          </h2>
          <p className="mb-6">
            This site is provided "as is" and "as available" without warranties of any kind,
            express or implied. We make no representations about the accuracy or completeness of
            any content.
          </p>

          <h2 className="text-text mb-3" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
            Limitation of liability.
          </h2>
          <p className="mb-6">
            To the maximum extent permitted by applicable law, BDV CoBuilder Ops, Inc. and its
            affiliates are not liable for any direct, indirect, incidental, or consequential
            damages arising from your use of this site.
          </p>

          <h2 className="text-text mb-3" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
            Governing law.
          </h2>
          <p className="mb-6">
            These terms are governed by the laws of the State of Delaware, without regard to its
            conflict-of-law provisions.
          </p>

          <h2 className="text-text mb-3" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
            Changes.
          </h2>
          <p>
            We may update these terms at any time. Continued use of the site after changes are
            posted constitutes acceptance of the updated terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
