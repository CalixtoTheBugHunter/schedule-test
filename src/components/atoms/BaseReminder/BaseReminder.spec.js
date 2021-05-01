/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils'
import BaseReminder from './BaseReminder'

describe('BaseReminder', () => {
  const WRAPPER = shallowMount(BaseReminder)

  it('Component exists', () => {
    expect(WRAPPER.exists()).toBe(true)
  })

  it('Component not changed', () => {
    expect(WRAPPER.html()).toMatchSnapshot()
  })
})