import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import App from './components/App'
import configureStore from './store/store'

const store = configureStore()
const client = new ApolloClient({
  url: process.env.REACT_APP_SFN_BACKEND
})
ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}><App /></Provider>
  </ApolloProvider>, document.getElementById('root'))
