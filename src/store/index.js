import { createStore, createLogger } from 'vuex'
import schedule from './modules/schedule'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: { schedule },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})