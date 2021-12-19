import { DELETEMOVIE, UPDATEMOVIE } from "./actionTyes"

export const updateMovie = (movies) => {
    return {
        type: UPDATEMOVIE,
        payload: movies
    }
}

export const deleteMovie =(id)=>{
    return{
        type: DELETEMOVIE,
        payload:id 
    }
}