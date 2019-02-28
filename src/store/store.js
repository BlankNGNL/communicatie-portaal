import Vue from 'vue'
import Vuex from 'vuex'
import Message from '../modules/Message'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    Message
  }
})
