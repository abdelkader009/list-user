import { ADDMOVIE } from "./actionTyes"

export const addMovie = (movies) => {
    return {
        type: ADDMOVIE,
        payload: movies
    }
}