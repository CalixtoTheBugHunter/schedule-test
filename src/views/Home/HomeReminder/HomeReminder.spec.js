/* eslint-disable no-undef */
import { mount } from '@vue/test-utils'
import HomeReminder from './HomeReminder'
import { createStore } from 'vuex'

describe('HomeReminder', () => {
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
            sheduleLength: () => 0,
            hasDateInData: () => false,
            hasReminderId: () => false
          }
        }
      }
    })

    wrapper = mount(HomeReminder, {
      global: {
        plugins: [store]
      }
    })
  })

  it('Component exists', () => {
    expect(wrapper.exists()).toBe(true)
  })

  describe('Ability to add a new "reminder" for a user entered day and time. Also, include a city.', () => {
    it('Reminder with max 30 chars', async () => {
      const input = wrapper.find('#title input')

      await input.setValue('hello world')

      expect(input.element.value.length).toBeLessThan(31)

    })
    it('Reminder and city required - empty', async () => {
      wrapper = mount(HomeReminder, {
        global: {
          plugins: [store]
        },
        data() {
          return {
            title: '',
            city: '',
          }
        }
      })

      await wrapper.find('#save').trigger('click')

      expect(wrapper.find('#save').wrapperElement).toHaveProperty('disabled', true)
    })
    it('Reminder and city required - filled', async () => {
      wrapper = mount(HomeReminder, {
        global: {
          plugins: [store]
        },
        data() {
          return {
            title: 'Lorem Ipsum',
            city: 'New York',
          }
        }
      })

      await wrapper.find('#save').trigger('click')

      expect(wrapper.find('#save').wrapperElement).toHaveProperty('disabled', false)
    })
    it('Reminder and city required - filled only title', async () => {
      wrapper = mount(HomeReminder, {
        global: {
          plugins: [store]
        },
        data() {
          return {
            title: 'Lorem Ipsum',
            city: '',
          }
        }
      })

      await wrapper.find('#save').trigger('click')

      expect(wrapper.find('#save').wrapperElement).toHaveProperty('disabled', true)
    })
    it('Reminder and city required - filled only city', async () => {
      wrapper = mount(HomeReminder, {
        global: {
          plugins: [store]
        },
        data() {
          return {
            title: '',
            city: 'Miami',
          }
        }
      })

      await wrapper.find('#save').trigger('click')

      expect(wrapper.find('#save').wrapperElement).toHaveProperty('disabled', true)
    })
  })

  it('Component not changed', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})