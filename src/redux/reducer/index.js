const initialState = {
    task: [
        {
        title: '',
        complete: false,
        }
    ]
}

function addMovieReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_MOVIE':
        return {
            ...state,
            task: [
                ...state.task,
                {
                    title: action.content,
                    completed: false,
                }
            ]
        }
    }
}