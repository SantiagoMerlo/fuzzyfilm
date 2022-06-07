import { cleanup, render, screen, fireEvent } from "@testing-library/react"

import SearchMovies from "../SearchMovies"

afterEach(cleanup)

describe("SearchMovies", () => {

    const mockFetchByQuery = jest.fn(x => null)

    it('when you click the button, it should call the function', () => {
        giveMeTheComponent();
        putSomeScript();
        thenPressButton();
        expect(mockFetchByQuery).toHaveBeenCalledTimes(1)
    })

    it('when you press Enter, it should call the function', () => {
        giveMeTheComponent();
        putSomeScript();
        thenPressEnter();
        expect(mockFetchByQuery).toHaveBeenCalledTimes(1)
    })

    function giveMeTheComponent() {
        render(<SearchMovies fetchByQuery={mockFetchByQuery}/>);
    }

    function putSomeScript() {
        const input = screen.getByRole('textbox');
        fireEvent.change(input, {target: {value: 'Locomami'}});
    }

    function thenPressEnter() {
        const input = screen.getByRole('textbox');
        fireEvent.keyUp(input, { key: "Enter", code: 13 });
    }

    function thenPressButton() {
        const button = screen.getByRole('button');
        fireEvent.click(button);
    }
});