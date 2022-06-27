import { VIEW_MOVIE_ACTION_TYPES } from "./viewMovie.types";

const VIEW_MOVIE_INITIAL_STATE = {
    isViewingMovie : false,
    movieData : []
}

export const ViewMovieReducer = (state = VIEW_MOVIE_INITIAL_STATE, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case VIEW_MOVIE_ACTION_TYPES.Set_New_Movie:
            return {...state, movieData: payload};
        
        case VIEW_MOVIE_ACTION_TYPES.Toggle_Is_Viewing_Movie:
            return {...state, isViewingMovie: payload};
        
        default:
            return state;
    } 
}