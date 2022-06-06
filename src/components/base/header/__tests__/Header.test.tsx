import { cleanup, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

import Header from "../Header"

afterEach(cleanup)

it("Header", () => {
    render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    )

    expect(screen.getByText(/films fuzzy fish/i)).toBeTruthy()
});