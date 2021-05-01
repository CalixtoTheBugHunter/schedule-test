/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils'
import BaseButton from './BaseButton'

describe('BaseButton', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(BaseButton)
  })

  it('Component exists', () => {
    expect(wrapper.exists()).toBe(true)
  })

  describe('Click in component', () => {

    it('Emit function click', () => {
      wrapper.vm.click()
      expect(wrapper.emitted('click')).toBeTruthy()
    })
  })

  it('Component not changed', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})