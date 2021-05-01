/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils'
import Home from './Home'

describe('Home', () => {
  const WRAPPER = shallowMount(Home)

  it('Component exists', () => {
    expect(WRAPPER.exists()).toBe(true)
  })

  it('Component not changed', () => {
    expect(WRAPPER.html()).toMatchSnapshot()
  })
})