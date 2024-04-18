import React, { useEffect, useState } from 'react';
import PreLoader from './components/Preloader';

function withPreloader(WrappedComponent) {
  return function WithPreloader(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 100);

      return () => clearTimeout(timer);
    }, []);

    return (
      <>
        <div className={`preloader ${loading ? '' : 'fade-out'}`}>
          <PreLoader />
        </div>
        {!loading && <WrappedComponent {...props} />}
      </>
    );
  };
}

export default withPreloader;