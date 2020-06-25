export const ADDMOVIE = 'ADD_MOVIE'
export const DELETEMOVIE = 'DELETE_MOVIE'



export function addMovie(value) {
    return {
        type: ADDMOVIE,
        value,
    }
}

export function deleteMovie(index) {
    return {
        type: DELETEMOVIE,
        index,
    }
}
