import LanguageIcon from '@mui/icons-material/Language';
import StarRateIcon from '@mui/icons-material/StarRate';
import { Link } from 'react-router-dom';
import "../styles/MovieCard.scss";

const MovieCard = ({ id, name, poster_path, overview, vote_average, original_language }) => {
    const imgUrl = `https://image.tmdb.org/t/p/w342${poster_path}`
    return (
            <Link to={`/${id}`} style={{textDecoration:"none"}}>
        <div className="movie-card-container">
                <div className="img-container">
                    <img src={imgUrl} alt={name} />
                </div>
                <div className="paragraph-container">
                    <p>{overview}</p>
                </div>
                <div className="icons-container">
                    <span><LanguageIcon /><span>{original_language}</span></span>
                    <span><StarRateIcon /><span>{vote_average.toFixed(1)}</span></span>
                </div>
        </div>
            </Link>
    );
}

export default MovieCard;

/* {
    "adult": false,
    "backdrop_path": "/etoVmQauLgUnu34qlqUPlOkevZO.jpg",
    "genre_ids": [
        10765,
        10759,
        18
    ],
    "id": 92830,
    "media_type": "tv",
    "name": "Obi-Wan Kenobi",
    "origin_country": [
        "US"
    ],
    "original_language": "en",
    "original_name": "Obi-Wan Kenobi",
    "overview": "During the reign of the Galactic Empire, former Jedi Master, Obi-Wan Kenobi, embarks on a crucial mission to confront allies turned enemies and face the wrath of the Empire.",
    "popularity": 1907.019,
    "poster_path": "/qJRB789ceLryrLvOKrZqLKr2CGf.jpg",
    "first_air_date": "2022-05-26",
    "vote_average": 7.794,
    "vote_count": 447
} */