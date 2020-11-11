import { useEffect } from 'react';
import { withRouter } from 'next/router';

const ScrollToTop = ({ router }) => {
  const { pathname } = router;

  const handleRouteChangeComplete = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    }
  }, [pathname]);

  return null
};

export default withRouter(ScrollToTop)
