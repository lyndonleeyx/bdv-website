import { Link } from 'react-router-dom';

const DisclaimerPage = () => {
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
          className="text-text mb-8"
          style={{ fontSize: 'clamp(2rem, 1.5rem + 2vw, 3rem)', fontWeight: 700, lineHeight: 1.2 }}
        >
          Legal Notice
        </h1>

        <div
          className="text-text"
          style={{ fontSize: '1rem', lineHeight: 1.8, fontWeight: 300 }}
        >
          <p className="mb-6">
            This website (builtdifferent.vc) is operated by BDV CoBuilder Ops, Inc.
          </p>
          <p className="mb-6">
            BDV Opco Pte. Ltd. ("BDV SG") provides business consulting and venture-building
            services to BDV CoBuilder Ops, Inc. under a Master Services Agreement. BDV SG does
            not provide fund management, securities dealing, investment advisory, or corporate
            finance advisory services. BDV SG does not manage, operate, or make investment
            decisions for any fund.
          </p>
          <p>
            The content on this site is for informational purposes only. Nothing on this site
            constitutes investment advice, a solicitation to invest, an offer to purchase or sell
            any security, or a recommendation of any kind. BDV CoBuilder Ops, Inc. is not a
            registered investment adviser, broker-dealer, or financial adviser.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPage;
