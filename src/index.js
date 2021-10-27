import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider,HttpLink } from "@apollo/client";
import fetch from 'cross-fetch';

const client = new ApolloClient({
    connectToDevTools: true,
      cache: new InMemoryCache(),
      link: new HttpLink({
        uri:'http://localhost:4000/graphql',
        fetch
      }) ,    
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

