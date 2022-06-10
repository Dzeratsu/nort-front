import Vuex, { Store } from 'vuex'
import Vue from 'vue'

export interface RootState {
  auth: any
}
export const store = new Vuex.Store<RootState>({})
const createStore = (): Store<RootState> => {
  return store
}
export default createStore
