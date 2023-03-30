import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MovieDBResponse, Movie } from '../interfaces/movieInterface';


interface MovieState {
    nowPlaying: Movie[];
    popular: Movie[];
    toprated: Movie[];
    upcoming: Movie[];
}

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [moviesState, setMoviesState] = useState<MovieState>({
        nowPlaying: [],
        popular: [],
        toprated: [],
        upcoming: []
    });
    
    useEffect(() => {
        // now Playing
        getMoviesNowPlaying();
    }, [])


    const getMoviesNowPlaying = async() => {

        const {data: {results :nowPlayingResults}} = await movieDB.get<MovieDBResponse>('/now_playing');
        const {data: {results :popularResults}} = await movieDB.get<MovieDBResponse>('/popular');
        const {data: {results :topratedResults}} = await movieDB.get<MovieDBResponse>('/top_rated');
        const {data: {results :upcomingResults}} = await movieDB.get<MovieDBResponse>('/upcoming');

        setMoviesState({
            nowPlaying: nowPlayingResults,
            popular: popularResults,
            toprated: topratedResults,
            upcoming: upcomingResults
        });

        setIsLoading(false);
    }
    
    
    return {
        ...moviesState,
        isLoading
    }
}
