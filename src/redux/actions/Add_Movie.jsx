export const addMovie = (content) => {
    return {
        type: 'ADD_MOVIE',
        content,
    }
}

export const deleteMovie = (index) => {
    return {
        type: 'DELETE_MOVIE',
        index,
    }
}
