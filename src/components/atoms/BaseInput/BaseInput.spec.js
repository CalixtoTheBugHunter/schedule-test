/* eslint-disable no-undef */
import { mount } from '@vue/test-utils'
import BaseInput from './BaseInput'

describe('BaseInput', () => {
  const WRAPPER = mount(BaseInput, {
    props: {
      modelValue: 'example'
    }
  })

  it('Component exists', () => {
    expect(WRAPPER.exists()).toBe(true)
  })

  it('Methods - inputEnterHandler', () => { 
    WRAPPER.vm.inputEnterHandler()
    expect(WRAPPER.emitted('enter')).toBeTruthy()
  })

  it('Component not changed', () => {
    expect(WRAPPER.html()).toMatchSnapshot()
  })
})