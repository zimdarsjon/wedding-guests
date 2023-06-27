import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import { EB_Garamond } from 'next/font/google'
import React from 'react';

import { useEffect } from 'react';

const garamond = EB_Garamond({ subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <main className={garamond.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;