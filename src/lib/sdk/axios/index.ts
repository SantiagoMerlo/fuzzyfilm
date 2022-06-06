import { MovieI, ShowQueryI} from "../../../models/movie.models"
import AxiosClient from "../../axios"

export const getAllShowByPage = async (page: number): Promise<MovieI[]> => {
    try {
        const request = await AxiosClient.get(`shows?page=4${page}`)
        return request.data as MovieI[]
    } catch (err) {
        console.error(err)
        return []
    }
}

export const getAllShowByQuery = async (query: string): Promise<MovieI[]> => {
    try {
        const request = await AxiosClient.get(`search/shows?q='${query}`)
        return (request.data as ShowQueryI[]).map(el => el.show)
    } catch (err) {
        console.error(err)
        return []
    }
}

export const getShowByID = async (id: number): Promise<MovieI | undefined> => {
    try {
        const request = await AxiosClient.get(`shows/${id}`)
        return request.data as MovieI
    } catch (err) {
        console.error(err)
        return undefined
    }
}