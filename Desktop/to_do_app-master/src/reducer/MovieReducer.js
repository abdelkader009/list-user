import { v4 as uuid } from 'uuid'
import { UPDATEMOVIE, ADDMOVIE, DELETEMOVIE } from '../action/actionTyes'

const initialState = {
    MovieList: [
        {
            id: uuid(),
            title: 'Venom',
            dec: 'Venom is a fictional character appearing ',
            isDone: true
        },

        {
            id: uuid(),
            title: 'Fury',
            dec: 'Fury is a 2014 American war film ',
            isDone: false
        },
        {
            id: uuid(),
            title: 'Spiderman',
            dec: 'Superhuman strength, agility ',
            isDone: false
        }
    ]
}

const MovieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case UPDATEMOVIE:
            return { ...state, MovieList: state.MovieList.map(el => el.id === payload.id ? { ...payload } : el) }
        case ADDMOVIE:
            return { ...state, MovieList: [...state.MovieList, payload] }
        case DELETEMOVIE:
            return { ...state, MovieList: state.MovieList.filter(tk => tk.id !== payload) }

        default:
            return state;
    }

}

export default MovieReducer
