import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import theme from "./../styles/theme";
import GlobalStyles from "./../styles/globals";
import client from "./../src/libs/connect";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
