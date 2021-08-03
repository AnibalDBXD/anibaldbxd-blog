import { NextRouter } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect } from 'react';

NProgress.configure({ showSpinner: false });

export default function useProgress(router: NextRouter): void {
  useEffect(() => {
    const handleStart = (): void => {
      NProgress.start();
    };
    const handleStop = (): void => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return (): void => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);
}
