import { MovieListItem } from "./MovieListItem";
import {render, screen} from '@testing-library/react'
import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'

test('Should display movie details', () => {
    const history = createMemoryHistory()

    render(
        <Router location={history.location} navigator={history}>
            <MovieListItem ID='123' Title='title' Poster='poster'/>
    </Router>
    )

    // expect(get)
    expect(screen.getByRole('link', { name: /movie poster/i })).toBeInTheDocument
    expect(screen.getByText('title')).toBeInTheDocument
})