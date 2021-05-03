/* eslint-disable no-undef */
import { mount } from '@vue/test-utils'
import BaseReminder from './BaseReminder'

describe('BaseReminder', () => {
  const WRAPPER = mount(BaseReminder, {
    props: {
      title: 'Little Reminder'
    },
  })

  it('Component exists', () => {
    expect(WRAPPER.exists()).toBe(true)
  })

  it('Emits click', async () => {
    await WRAPPER.find('.BaseReminder').trigger('click')

    expect(WRAPPER.emitted()).toHaveProperty('click')
  })

  it('Component not changed', () => {
    expect(WRAPPER.html()).toMatchSnapshot()
  })
})