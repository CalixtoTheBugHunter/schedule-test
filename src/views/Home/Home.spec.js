/* eslint-disable no-undef */
import { mount } from '@vue/test-utils'
import Home from './Home'
import { createStore } from 'vuex'

describe('Home', () => {
  let wrapper, store

  beforeEach(() => {

    store = createStore({
      modules: {
        schedule: {
          namespaced: true,
          state() {
            return {
              data: {}
            }
          },
          getters: {
            sheduleLength: () => 0
          }
        }
      }
    })

    wrapper = mount(Home, {
      global: {
        plugins: [store]
      }
    })
  })

  it('Component exists', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Component not changed', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})