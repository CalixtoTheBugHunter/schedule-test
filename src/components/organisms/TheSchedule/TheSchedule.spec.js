/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils'
import TheSchedule from './TheSchedule'

describe('TheSchedule', () => {
  const WRAPPER = shallowMount(TheSchedule)

  it('Component exists', () => {
    expect(WRAPPER.exists()).toBe(true)
  })

  it('Component not changed', () => {
    expect(WRAPPER.html()).toMatchSnapshot()
  })
})