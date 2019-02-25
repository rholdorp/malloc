import React from 'react'
import { render } from 'react-testing-library'
import { Home } from './Home'

describe('Home', () => {
  it('renders correctly', () => {
    const { container } = render(<Home />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('prints malloc somewhere', () => {
    const { getByText } = render(<Home />)

    expect(getByText(/malloc/i)).toBeInTheDocument()
  })
})
<<<<<<< Updated upstream
=======
 
>>>>>>> Stashed changes
