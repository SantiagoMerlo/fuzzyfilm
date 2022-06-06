import { useState } from "react";
import { MovieRowProps } from "./types";
import "./style.css";
import { Paper } from "../../base";
import { useNavigate } from "react-router-dom";

export default function MovieRow({ movie }: MovieRowProps) {
    const navigate = useNavigate();

    return (
        <Paper key={movie.id} className="relative movie-row-card cursor-pointer" onClick={() => navigate(`/${movie.id}`, { state: movie })}>
            {movie.image && <img src={movie.image.medium} className="w-full h-full object-cover" />}
            <div className="absolute movie-row-detail bg-gray-200 opacity-80 px-3">
                <h6 className="font-bold">{movie.name}</h6>
                <div className="movie-row-summary" dangerouslySetInnerHTML={{ __html: movie.summary }} />
            </div>
        </Paper>
    )
}
