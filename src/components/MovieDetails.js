import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { API_KEY } from "../API/RequestUrls";
import { setMovieData } from "../store/viewMovie/viewMovie.actions";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarRateIcon from '@mui/icons-material/StarRate';
import "../styles/MovieDetails.scss";

const MovieDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const movieData = useSelector((state) => state.viewMovie.movieData);

    useEffect(() => {
        const getMovieDetails = async () => {
            const result = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
            const movieDetails = result.data;
            dispatch(setMovieData(movieDetails));
            console.log("movie details: ", movieDetails);
        }
        getMovieDetails();
    }, [])

    return (
        <div className="movie-details-container">
            {movieData.vote_average != null ?
                (
                    <>
                        <img src={`https://image.tmdb.org/t/p/w1280${movieData.backdrop_path}`} alt="" />
                        {/* <div className="fade"></div> */}
                        <div className="movie-details-overlay">
                            <div className="info-container">
                                <div className="info-title-container">
                                    {movieData.title}
                                </div>
                                <div className="info-extras-container">
                                    <div className="info-extras-tagline"><i>{movieData.tagline}</i></div>
                                    <div>{movieData.genres.map((genre) => <i>{`${genre.name}`} </i>)}</div>
                                    <div className="movie-icons-container">
                                        <AccessTimeIcon /><span>{` ${movieData.runtime}min.`}</span>
                                        <StarRateIcon /><span>{` ${movieData.vote_average.toFixed(1)}`}</span>
                                    </div>
                                    <div className="overview-container">
                                        <p>{movieData.overview}</p>
                                    </div>
                                </div>
                                <Link to='/'>
                                    <button className="link-btn">← Go Back</button>
                                </Link>
                            </div>
                        </div>
                    </>
                )
                :
                <h1>Loading...</h1>
            }
        </div>
    );
}

export default MovieDetails;

