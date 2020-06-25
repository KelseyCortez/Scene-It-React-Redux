export const ADDMOVIE = 'ADDMOVIE'



export function addMovie(value) {
    return {
        type: 'ADD_MOVIE',
        value,
    }
}

export function deleteMovie(index) {
    return {
        type: 'DELETE_MOVIE',
        index,
    }
}
