import { combineReducers } from "redux";
import { MovieCategoriesReducer } from "./movieCategories/MovieCategoriesReducer";
import { ViewMovieReducer } from "./viewMovie/ViewMovieReducer";

export const RootReducer = combineReducers({
    // user : userReducer,
    // categories : categoriesReducer
   movieCategories : MovieCategoriesReducer,
   viewMovie : ViewMovieReducer
})