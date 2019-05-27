import { default as ApolloClient } from 'apollo-boost';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import fetch from 'isomorphic-fetch';

if(!process.browser) { global.fetch = fetch; }

const linkGuest = new HttpLink({  uri: 'http://10.188.37.107:3000/v1/graphql-first-instance/BtL7NQwOt0R7psYw1Fyx', fetch: fetch });
const linkMain = ApolloLink.from([linkGuest]);
const apolloClientGuest = new ApolloClient({ uri: linkMain });

export { apolloClientGuest };