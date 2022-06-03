import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import Column from "../components/Column";
import Input from "../components/Input";
import Paper from "../components/Paper";
import Row from "../components/Row";
import AxiosClient from "../lib/axios";
import { MovieI, ShowQueryI } from "../models/movie.models";

export default function HomePage() {

    const [movies, setMovies] = useState<MovieI[]>([])
    const [handlePage, setHandlePage] = useState({
        // crear estado para busqueda y para datos de entrada
        moreMovies: true
    })
    const dataRef = useRef<MovieI[]>([])
    const [query, setQuery] = useState<string>('girls')
    useEffect(() => {
        // (async () => {
        // example de endpoint de busqueda
        //     const request = await AxiosClient.get(`search/shows?q='${query}`)
        //     console.log(request.data)
        //     setMovies(request.data)
        // })()
        // llevar esto a otra carpetas
        (async () => {
            const request = await AxiosClient.get(`shows?page=1`)
            dataRef.current = request.data
            setMovies(dataRef.current.slice(0, 20))
        })()
    }, [])

    const handleMore = () => {
        if (movies.length + 20 >= dataRef.current.length) return setHandlePage(prev => ({ ...prev, moreMovies: false }))
        setMovies(prev => ([ ...prev, ...dataRef.current.slice(prev.length, prev.length + 20)]))
    }

    return <div className="p-3">
        <Paper className="p-3">
            <Row>
                <Input
                    label="Search" 
                    placeholder="e.g. Taxi Driver"
                    className="w-full"
                    />
            </Row>
        </Paper>
        <h2 className="font-bold mt-4">Some recomendations</h2>
        {/** Cambiar en el futuro por COLUMN - ANALIZAR PORQUE ANDA MAL */}
        <div className={'grid md:grid-cols-5 grid-cols-2 gap-1 mt-3'}>
            {
                movies.map((movie, index) => <div key={index} className=" bg-white shadow-sm rounded-sm p-2">
                    {movie.image && <img src={movie.image.medium} className='w-full h-full object-cover' />}
                </div>)
            }
        </div>
        <div className="flex justify-center w-full mt-3">
            <Button variant="primary" onClick={handleMore} disabled={!handlePage.moreMovies}>
                Load More
            </Button>
        </div>
    </div>
}