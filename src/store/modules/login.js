import * as mutaionTypes from 'store/mutation-types'
import * as apis from 'apis/login'

const state = {
  token: '',
  uid: ''
}

const getters = {
  uid: state => state.uid
}

const mutations = {
  [mutaionTypes.SET_UID]: function (state, uid) {
    state.uid = uid
  }
}

const actions = {
  login: async function (username, password) {
    try {
      const user = await apis.login({
        username,
        password
      })
      console.log(user)
    } catch (err) {
      console.warn(err)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
