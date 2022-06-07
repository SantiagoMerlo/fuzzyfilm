import { cleanup, render, screen, fireEvent, waitFor } from "@testing-library/react"
import { MovieI } from "../../../../models/movie.models";

import MovieRow from "../MovieRow"
import { mockMovie } from "./mock";
import { MemoryRouter } from "react-router-dom"

afterEach(cleanup)

describe("MovieRow", () => {

    it('when you hover, then it should show more information', async () => {
        const { baseElement } = giveMeTheComponent(mockMovie)
        fireEvent.mouseOver(baseElement)
        await waitFor(() => expect(screen.getByText(mockMovie.name)).toBeTruthy())
    })

    function giveMeTheComponent(movie: MovieI) {
        return render(<MemoryRouter >
            <MovieRow movie={movie}/>
        </MemoryRouter>);
    }
});
