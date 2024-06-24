import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Html2Pdf from '../Html2Pdf.vue'

describe('Html2Pdf', () => {
  it('renders properly', () => {
    const wrapper = mount(Html2Pdf)
    expect(wrapper.text()).toContain('Hello I am Awesome library')
  })
})
