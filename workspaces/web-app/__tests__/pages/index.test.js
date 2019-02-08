import React from 'react'
import { render } from 'react-testing-library'
import Home from '../../pages/index'

describe('index', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  it('has proper styling', () => {
    const { container } = render(<Home />)
    // for the fading animation to finish
    jest.runAllTimers()
    expect(container).toMatchSnapshot()
  })

  it('displays secret form', () => {
    const { getByText } = render(<Home />)
    // for the fading animation to finish
    jest.runAllTimers()
    expect(getByText(/hello/i)).toBeInTheDocument()
  })
})
