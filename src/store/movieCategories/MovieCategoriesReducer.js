import { MOVIE_CATEGORIES_ACTION_TYPES } from "./movieCategories.types";

const INITIAL_STATE = {
    "New Movies" : [],
    "Upcoming Movies" : [],
    "Trending Movies" : []
}

export const MovieCategoriesReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case MOVIE_CATEGORIES_ACTION_TYPES["New Movies"]:
            return {...state, "New Movies": payload};
            
        case MOVIE_CATEGORIES_ACTION_TYPES["Upcoming Movies"]:
            return {...state, "Upcoming Movies": payload};
                
        case MOVIE_CATEGORIES_ACTION_TYPES["Trending Movies"]:
            return {...state, "Trending Movies": payload};

        default:
            return state;
    } 
}