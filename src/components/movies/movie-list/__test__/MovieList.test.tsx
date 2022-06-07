import { cleanup, render, screen, fireEvent, waitFor } from "@testing-library/react"
import { MovieI } from "../../../../models/movie.models";

import MovieList from "../MovieList"
import { mockMovie } from "../../movie-row/__test__/mock";
import { MemoryRouter } from "react-router-dom"

afterEach(cleanup)

describe("MovieList", () => {

    const mockList = [ {...mockMovie, id: 1}, {...mockMovie, id: 2}, {...mockMovie, id: 3}]

    it('should render cards when there are data', async () => {
        giveMeTheComponent(mockList)
        mockList.forEach( movie => expect(document.getElementById(movie.id.toString())).not.toBeNull())
    })

    it('should not render cards when there are not data', async () => {
        giveMeTheComponent([])
        const text = screen.queryAllByRole('paragraph')
        expect(text).toHaveLength(0)
    })

    function giveMeTheComponent(movies: MovieI[]) {
        return render(<MemoryRouter >
            <MovieList list={movies}/>
        </MemoryRouter>);
    }
});
