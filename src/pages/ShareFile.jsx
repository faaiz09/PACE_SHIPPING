import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const ShareFile = () => {
  useEffect(() => {
    // Open the URL in a new tab
    window.open('https://portal.pacemarinesolutions.com/client-upload-files', '_blank');
  }, []);

  return (
    <>
      <Helmet>
        <title>Share Files - Pace Marine</title>
        <meta name="description" content="Opening file upload portal in a new tab..." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-primary-light to-primary-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-white mb-4">
            Opening File Upload Portal...
          </h1>
          <p className="text-xl text-white/90">
            Please wait while we open the file upload portal in a new tab.
          </p>
        </div>
      </div>
    </>
  );
};

export default ShareFile; 