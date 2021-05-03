/* eslint-disable no-undef */
import { mount } from '@vue/test-utils'
import TheSchedule from './TheSchedule'
import { createStore } from 'vuex'

describe('TheSchedule', () => {
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
            hasDateInData: () => false,
            getRemindersByDay: () => null
          }
        }
      }
    })

    wrapper = mount(TheSchedule, {
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