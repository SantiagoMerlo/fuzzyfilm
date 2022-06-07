import { cleanup, render, screen } from "@testing-library/react"

import MovieDetails from "../MovieDetails"

afterEach(cleanup)

describe("MovieDetails", () => {

    const mockList = [
        { data: 'spanish', label: 'language' },
        { data: '17/03/2020', label: 'started' },
        { data: '17/03/2022', label: 'ended' }
    ]

    it('should render cards when there are data', async () => {
        giveMeTheComponent(mockList)
        mockList.forEach(data => expect(document.getElementById(data.label)).not.toBeNull())
    })

    it('should not render cards when there are not data', async () => {
        giveMeTheComponent([])
        const text = screen.queryAllByRole('paragraph')
        expect(text).toHaveLength(0)
    })

    function giveMeTheComponent(data: any) {
        render(<MovieDetails values={data} />);
    }
});
