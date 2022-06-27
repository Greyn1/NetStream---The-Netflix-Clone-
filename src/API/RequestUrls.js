export const API_KEY = '4b81f03446b0c1fd0bc75a90dded27b8';

export const RequestUrl = {
    new: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&primary_release_date.gte=2022-06-01&primary_release_date.lte=2022-06-30`,
    upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1&region=us`,
    trendingMovies: `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
}


