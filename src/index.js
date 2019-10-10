import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { ApolloProvider } from '@apollo/react-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory'

import App from './components/App'
import configureStore from './store/store'

const store = configureStore()
const link = createHttpLink({
  uri: 'http://localhost:4002/api/graphql'
})
const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
})
ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}><App /></Provider>
  </ApolloProvider>, document.getElementById('root'))
