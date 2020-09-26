import { AppProps } from "next/app";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ThemeProvider } from "styled-components";
import theme from "./../styles/theme";
import GlobalStyles from "./../styles/globals";

const httpLink = createHttpLink({
  uri:
    "https://graphql.contentful.com/content/v1/spaces/kk2bw5ojx476/environments/master",
});

const authLink = setContext((_, { headers }) => {
  const token =
    "7ac531648a1b5e1dab6c18b0979f822a5aad0fe5f1109829b8a197eb2be4b84c";
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  console.log(Component, pageProps);
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
