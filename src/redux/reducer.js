import { ADDMOVIE, DELETEMOVIE } from './actions/Add_Movie';

const initialState = {
    movies: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADDMOVIE:
            return {
                movies: [...state.movies, action.value]
            }
        case DELETEMOVIE:
            const remainingMovies = state.movies.filter((movie, index) => {
                if (index !== action.index) {
                    return true
                }
                return false;
            })
            return {
                ...state,
                movies: remainingMovies
            }
        default:
            return state;
    }
}



export default reducer;