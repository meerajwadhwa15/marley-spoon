import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const SPACE_ID = process.env.SPACE_ID;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const httpLink = createHttpLink({
  uri: `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/master`,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
