/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils'
import HomeReminder from './HomeReminder'

describe('HomeReminder', () => {
  const WRAPPER = shallowMount(HomeReminder)

  it('Component exists', () => {
    expect(WRAPPER.exists()).toBe(true)
  })

  it('Component not changed', () => {
    expect(WRAPPER.html()).toMatchSnapshot()
  })
})