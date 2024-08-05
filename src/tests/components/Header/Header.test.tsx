import { fireEvent, render, screen } from '@testing-library/react'
import { useRouter } from 'next/navigation'
import { Header } from '@/components'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('Test header component', () => {
  const mockPush = jest.fn()
  const mockUseRouter = useRouter as jest.Mock

  beforeEach(() => {
    jest.resetAllMocks()
    mockUseRouter.mockReturnValue({
      push: mockPush,
    })
  })

  test('should render header component', () => {
    render(<Header />)
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('alt', 'Logo Marvel')
  })

  test('should render the selected HeartIcon', () => {
    render(<Header />)
    const heartIcon = screen.getByTestId('selected-heart-icon')
    expect(heartIcon).toBeInTheDocument()
  })

  test('should navitage to the home when click the Logo', () => {
    render(<Header />)
    const logo = screen.getByAltText('Logo Marvel')
    fireEvent.click(logo)
    expect(window.location.pathname).toBe('/')
  })
})
