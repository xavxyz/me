import { ApolloClient, createNetworkInterface } from 'react-apollo';
import fetch from 'isomorphic-fetch';

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

const create = initialState => new ApolloClient({
  initialState,
  ssrMode: !process.browser,
  networkInterface: createNetworkInterface({
    uri: 'https://micro-graphql-github-ecdmgxnohx.now.sh',
    opts: {
      credentials: 'same-origin',
    },
  }),
});

const initApollo = initialState => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
};

export default initApollo;
