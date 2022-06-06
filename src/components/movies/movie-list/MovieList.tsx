import { MovieListProps } from "./types";
import { MovieRow } from "../movie-row";

export default function MovieList({ list }: MovieListProps) {
    return (
        <>
            {
                list.map((movie) => (
                        <MovieRow key={movie.id} movie={movie} />
                ))
            }
        </>
    )
}
