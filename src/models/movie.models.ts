export interface ShowQueryI {
    score: number,
    show: MovieI
}

export interface MovieI {
    averageRuntime: number,
    dvdCountry: any,
    ended: string,
    externals: {
        imdb: string
        thetvdb: number
        tvrage: number
    },
    genres: string[],
    id: number,
    image?: {
        medium: string,
        original: string
    },
    language: string,
    name: string,
    network: {
        id: number, name: string,
        country: {
            name: string,
            code: string,
            timezone: string
        }, officialSite: any
    },
    officialSite: string,
    premiered: string
    rating: { average: number }
    runtime: number
    schedule: { time: string, days: string[] }
    status: string
    summary: string
    type: string
    updated: number
    url: string
    webChannel: any
    weight: number
}