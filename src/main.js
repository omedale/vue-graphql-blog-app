// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import { setContext } from 'apollo-link-context'
import store from '@/store/store'


Vue.config.productionTip = false

const httpLink = new HttpLink({
  // URL to graphql server, you should use an absolute URL here
  uri: 'http://localhost:3333/graphql'
})
const authLink = setContext((_, { headers }) => {
  // get the authentication token from localstorage if it exists
  const token = localStorage.getItem('blog-app-token')

  // return the headers to the context so httpLink can read them
  return {
      headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : null
      }
  }
})

// create the apollo client
const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  apolloProvider,
  components: { App },
  template: '<App/>'
})
