import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import { useTheme } from '@mui/material/styles';
import { EB_Garamond } from 'next/font/google'
import React from 'react';


import { blueGrey, grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
 
const appTheme = createTheme({
  palette: {
    primary: blueGrey,
    secondary: {main : '#5f7153'},
  },
});


import { useEffect } from 'react';

const garamond = EB_Garamond({ subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <main className={garamond.className}>
      <ThemeProvider theme={appTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}

export default MyApp;