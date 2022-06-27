import { VIEW_MOVIE_ACTION_TYPES } from "./viewMovie.types"

export const setMovieData = (movieData) => {
    return {
        type: VIEW_MOVIE_ACTION_TYPES.Set_New_Movie,
        payload: movieData 
    }
}

export const toggleIsViewingMovie = (bool) => {
    return {
        type: VIEW_MOVIE_ACTION_TYPES.Toggle_Is_Viewing_Movie,
        payload: bool
    }
}