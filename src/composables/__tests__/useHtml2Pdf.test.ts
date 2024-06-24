import { describe, it, expect } from 'vitest'
import useHtml2Pdf from '../useHtml2Pdf'

describe('useHtml2Pdf', () => {
  it('converts properly', () => {
    const element = document.createElement('div')
    const text = 'Hello I am Awesome library'
    element.appendChild(document.createTextNode(text))

    const { convert } = useHtml2Pdf(element)
    expect(convert()).toBe(`converted ${text}`)
  })
})
