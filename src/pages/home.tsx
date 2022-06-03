import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import Row from "../components/Row";
import AxiosClient from "../lib/axios";
import { ShowQueryI } from "../models/movie.models";

export default function HomePage() {

    const [movies, setMovies] = useState<ShowQueryI[]>([])
    const [query, setQuery] = useState<string>('girls')
    useEffect(() => {
        (async () => {
            const request = await AxiosClient.get(`search/shows?q='${query}`)
            console.log(request.data)
            setMovies(request.data)
        })()
    }, [])

    return <div className="flex justify-center p-3">
        <div className=" bg-white shadow-sm rounded-sm">
            <Row>
                <Input label="Search" placeholder="e.g. Taxi Driver" />
            </Row>
        </div>
        {
            movies.map((movie, index) => <div className=" bg-white shadow-sm rounded-sm">
            <Row key={index}>
                { movie.show.image && <img src={movie.show.image.medium} /> }
            </Row>
        </div>)
        }
    </div>
}