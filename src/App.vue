<template>
  <div id="app">
    <she-button @click="request" type="primary">Login</she-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import axios from 'axios'

import SheButton from 'components/common/button/Button'
export default {
  name: 'app',
  methods: {
    ...mapActions(['login']),
    request: function () {
      axios.get('/api/cat/hello/123').then(res => {
        console.log(res)
      }).catch(err => {
        console.warn(err)
      })
    }
  },
  components: {
    SheButton
  }
}
</script>

<style lang="scss">
  @import "../node_modules/minireset.css/minireset.css"
</style>

