/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils'
import BaseInput from './BaseInput'

describe('BaseInput', () => {
  const WRAPPER = shallowMount(BaseInput)

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