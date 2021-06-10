import "@styles/globals.css";
import { ThemeProvider } from "@material-ui/core";
import theme from "ui/themes/theme";
import Head from "next/head";
import Header from "ui/components/surfaces/Header/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Shiny Home</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/fonts/tw-icons/css/treinaweb-icons.css" />
      </Head>

      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
