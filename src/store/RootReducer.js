import { combineReducers } from "redux";
import { MovieCategoriesReducer } from "./movieCategories/MovieCategoriesReducer";
import { ViewMovieReducer } from "./viewMovie/ViewMovieReducer";

export const RootReducer = combineReducers({
   movieCategories : MovieCategoriesReducer,
   viewMovie : ViewMovieReducer
})