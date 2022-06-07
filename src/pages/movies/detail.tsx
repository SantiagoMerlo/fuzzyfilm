import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Chip, Paper } from "../../components/base";
import { PrimaryButton } from "../../components/shared/button";
import { getShowByID } from "../../lib/sdk/axios";
import { MovieI } from "../../models/movie.models";
import { AiFillStar } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import { MovieDetails } from "../../components/movies";

const PATH_IMG = '/assets/not-found.png'

export default function MovieDetailsPage() {

    const { id } = useParams()
        , location = useLocation()
        , navigator = useNavigate()
        , [movie, setMovie] = useState<MovieI>()

    const fetchMovie = async () => {
        const stateMovie = await getShowByID(id as string)
        setMovie(stateMovie)
    }

    useEffect(() => {
        const stateMovie = location.state as MovieI;
        if (stateMovie) return setMovie(stateMovie)
        fetchMovie()
    }, [])

    return movie ? <div className="p-3">
        <div className="w-full px-8">
            <span className="cursor-pointer bg-indigo-200 text-indigo-500 flex rounded-xl align-middle items-center w-14" onClick={() => navigator('/')}><IoIosArrowBack /> Back</span>
        </div>
        <div className="flex mt-3">
            <div className="object-contain md:w-1/5 w-full flex justify-center">
                <img src={movie.image ? movie.image.medium : process.env.PUBLIC_URL + PATH_IMG} />
            </div>
            <Paper className="p-3 md:w-4/5 w-full">
                <div className="flex items-center mb-3">
                    <h1 className="font-bold">
                        {movie.name}
                    </h1>
                    {
                        movie.rating?.average && <Chip className="pl-3"><AiFillStar className="mr-1" />{movie.rating.average}</Chip>
                    }
                </div>
                <div className="flex">
                    {movie.genres?.map(gener => <Chip key={gener} className='pr-3'>{gener}</Chip>)}
                </div>
                <div className="text-sm">
                    <p className="font-bold">Summary</p>
                </div>
                <div className='text-sm mt-2' dangerouslySetInnerHTML={{ __html: movie.summary }} />
                <MovieDetails values={[
                    { label: "lenguage", data: movie.language },
                    { label: "premiered", data: movie.premiered },
                    { label: "ended", data: movie.ended }
                ]} />
                {
                    movie.officialSite && <PrimaryButton className="w-full mt-3" onClick={() => window.open(movie.officialSite)}>
                        Official Web Site
                    </PrimaryButton>
                }
            </Paper>
        </div>
    </div> : null
}


