import React, { useCallback, useEffect, useRef, useState } from "react";
import { Input, Paper, Row} from "../components/base";
import { MovieList } from "../components/movies";
import { PrimaryButton } from "../components/shared/button";
import AxiosClient from "../lib/axios";
import { getAllShowByPage, getAllShowByQuery } from "../lib/sdk/axios";
import { MovieI, ShowQueryI } from "../models/movie.models";

const config = {
    itemsPerPage: 20
};

export default function HomePage() {

    const [movies, setMovies] = useState<MovieI[]>([])
    const dataRef = useRef<MovieI[]>([])
    const [query, setQuery] = useState<string>('')

    const fetchRandomMovies = async () => {
        dataRef.current = await getAllShowByPage(1)
        setMovies(dataRef.current.slice(0, config.itemsPerPage))
    }

    const fetchByQuery = async () => {
        dataRef.current = await getAllShowByQuery(query)
        console.log(dataRef.current)
        const moviesToAdd = dataRef.current.length > config.itemsPerPage ? config.itemsPerPage : dataRef.current.length
        setMovies(dataRef.current.slice(0, moviesToAdd))
    }

    useEffect(() => {
        fetchRandomMovies();
    }, [])

    const getMoviesToAdd = useCallback(() => {
        const currrentSizeMovies = movies.length
            , totalSizeMovies = dataRef.current.length
            , diffSizes = totalSizeMovies - currrentSizeMovies
            , moviesToAdd = diffSizes >= config.itemsPerPage ? config.itemsPerPage : diffSizes
        return moviesToAdd
    }, [movies, dataRef])

    const handleMore = () => {
        const moviesToAdd = getMoviesToAdd()
            , newSizeMovies = movies.length + moviesToAdd
        setMovies(prev => ([...prev, ...dataRef.current.slice(prev.length, newSizeMovies)]))
    }

    return <div className="p-3">
        <Paper className="p-3">
            <Row>
                <Input
                    label="Search"
                    placeholder="e.g. Taxi Driver"
                    className="w-full"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyUp={(e) => e.key === 'Enter' ? fetchByQuery() : null}
                />
                <PrimaryButton className="mt-4" onClick={fetchByQuery}>
                    Search
                </PrimaryButton>
            </Row>
        </Paper>
        <h2 className="font-bold mt-4">Some recomendations</h2>
        <div className='grid grid-flow-row-dense md:grid-cols-5 grid-cols-2 gap-4 mt-3 p-5'>
            <MovieList list={movies} />
        </div>
        {
            getMoviesToAdd() > 0 && <div className="flex justify-center w-full mt-3">
                <PrimaryButton onClick={handleMore}>
                    Load More
                </PrimaryButton>
            </div>
        }
    </div>
}