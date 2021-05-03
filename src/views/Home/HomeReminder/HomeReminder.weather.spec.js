/* eslint-disable no-undef */
import { mount } from '@vue/test-utils'
import Weather from './HomeReminder.weather'

describe('Weather', () => {
  const WRAPPER = mount(Weather, {
    props: {
        value: {}
    },
  })

  it('Component exists', () => {
    expect(WRAPPER.exists()).toBe(true)
  })

  it('Component not changed', () => {
    expect(WRAPPER.html()).toMatchSnapshot()
  })
})