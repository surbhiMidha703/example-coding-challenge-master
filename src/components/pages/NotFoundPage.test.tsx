import { render, screen } from '@testing-library/react'
import { NotFoundPage } from './NotFoundPage'
import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'


test('should show message when page is not found', () => {
    const history = createMemoryHistory()
    render(
        <Router location={history.location} navigator={history}>
          <NotFoundPage />
        </Router>,
      )
    
    expect(screen.findByRole('link', { name: /← back/i })).toBeInTheDocument
    expect(screen.getByText('I\'m sorry, that page doesn\'t exist! Please click the back button to go back to the homepage.')).toBeInTheDocument
})