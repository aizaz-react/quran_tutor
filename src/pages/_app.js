import { darkTheme } from '@/helper/themehelper';
import '@/styles/globals.css';
import { ThemeProvider } from '@mui/material';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
