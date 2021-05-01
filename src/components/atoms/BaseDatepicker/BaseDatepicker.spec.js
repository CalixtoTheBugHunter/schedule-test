/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils'
import BaseDatepicker from './BaseDatepicker'

describe('BaseDatepicker', () => {
  const WRAPPER = shallowMount(BaseDatepicker)

  it('Component exists', () => {
    expect(WRAPPER.exists()).toBe(true)
  })

  it('Component not changed', () => {
    expect(WRAPPER.html()).toMatchSnapshot()
  })
})