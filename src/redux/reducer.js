import { ADDMOVIE } from './actions/Add_Movie';

const initialState = {
    movies: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADDMOVIE:
            return {
                movies: state.movies + action.value
            }
             default:
            return state;
    }
}



export default reducer;