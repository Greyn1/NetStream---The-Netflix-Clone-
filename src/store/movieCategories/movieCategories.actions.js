import { MOVIE_CATEGORIES_ACTION_TYPES } from "./movieCategories.types"

export const setMovies = (action_type, movieData) => {
    return {
        type: MOVIE_CATEGORIES_ACTION_TYPES[action_type],
        payload: movieData 
    }
}