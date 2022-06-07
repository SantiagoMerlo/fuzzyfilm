import React from "react";
import { MovieRowProps } from "./types";
import "./style.css";
import { Paper } from "../../base";
import { useNavigate } from "react-router-dom";

const PATH_IMG = '/assets/not-found.png'

export default function MovieRow({ movie }: MovieRowProps) {
    const navigate = useNavigate();

    return (
        <Paper id={movie.id.toString()} className="relative movie-row-card cursor-pointer" onClick={() => navigate(`/${movie.id}`, { state: movie })}>
            <img src={movie.image ? movie.image.medium : process.env.PUBLIC_URL + PATH_IMG } className="w-full h-full object-cover" />
            <div className="absolute movie-row-detail bg-gray-200 opacity-80 px-3">
                <h6 className="font-bold">{movie.name}</h6>
                <div className="movie-row-summary" dangerouslySetInnerHTML={{ __html: movie.summary }} />
            </div>
        </Paper>
    )
}
