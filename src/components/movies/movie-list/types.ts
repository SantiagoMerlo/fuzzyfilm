import { MovieI } from "../../../models/movie.models"

export type MovieListProps = WithChildren & {
    list: MovieI[]
};
