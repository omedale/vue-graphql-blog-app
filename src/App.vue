<template>
  <div id="app">
    <nav class="navbar is-link" role="navigation" aria-label="main navigation">
            <div class="container">
                <div class="navbar-brand">
                    <router-link class="navbar-item" to="/">Blog App</router-link>

                    <button class="button navbar-burger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>


            </div>
            <div class="navbar-end">
                    <div class="navbar-item">
                      <div class="field is-grouped">
                        <p
                         v-if="!$store.state.isUserLoggedIn"
                         class="control">
                          <router-link  class="bd-tw-button button" to="login">
                            <span>
                              Login
                            </span>
                          </router-link >
                        </p>
                        <p
                         v-if="!$store.state.isUserLoggedIn"
                         class="control">
                          <router-link  class="bd-tw-button button" to="signup">
                            <span>
                              Register
                            </span>
                          </router-link >
                        </p>
                        <p
                         @click="logout"
                         v-if="$store.state.isUserLoggedIn"
                         class="control">
                          <router-link class="bd-tw-button button" to="signup">
                            <span>
                              Logout
                            </span>
                          </router-link >
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
        </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
     logout () {
      console.log('heloooo');
      this.$store.dispatch('setToken', null)
      // this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
