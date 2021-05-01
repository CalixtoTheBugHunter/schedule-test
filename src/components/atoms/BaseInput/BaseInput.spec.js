/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils'
import BaseInput from './BaseInput'

describe('BaseInput', () => {
  const WRAPPER = shallowMount(BaseInput, {
    propsData: {
      value: 'hello world'
    }
  })

  it('Component exists', () => {
    expect(WRAPPER.exists()).toBe(true)
  })

  describe('Methods - onFocus', () => {
    it('When focus is on', () => {
      WRAPPER.setData({ focus: true })
      WRAPPER.vm.onFocus()
      expect(WRAPPER.vm.focus).toBe(false)
    })

    it('When focus is off', () => {
      WRAPPER.setData({ focus: false })
      WRAPPER.vm.onFocus()
      expect(WRAPPER.vm.focus).toBe(true)
    })
  })

  it('Methods - inputEnterHandler', () => {
    WRAPPER.vm.inputEnterHandler()
    expect(WRAPPER.emitted('enter')).toBeTruthy()
  })

  it('Component not changed', () => {
    expect(WRAPPER.html()).toMatchSnapshot()
  })
})