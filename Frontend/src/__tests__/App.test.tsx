import { render, screen } from '@testing-library/react'
import App from '../main/App'
describe('testing app component', () => {
  test('renders learn react link', () => {
    render(<App />)
    const linkElement = screen.getByText(/Página Principal/i)
    expect(linkElement).toBeInTheDocument()
  })
})
