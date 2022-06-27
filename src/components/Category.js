import axios from "axios";
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../store/movieCategories/movieCategories.actions";
import "../styles/Category.scss";

const Category = ({title, requestUrl}) => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movieCategories[title]);

    useEffect(() => {
        const getCategoryMovies = async () => {
            const result = await axios.get(requestUrl);
            const moviesArray = result.data.results;
            dispatch(setMovies(title, moviesArray));
        }
        getCategoryMovies();
    },[])

    const displayMovieCards = () => {
        return movies.map((movie) => {
            return (<MovieCard {...movie} key={movie.id}/>)
        })
    }

    return (
        <div className="category-container" id={`${title.replace(" ","-")}`}>
            <h2>{title}</h2>
            <div className="movie-cards-container">
                {displayMovieCards()}
            </div>
        </div>
    );
}

export default Category;