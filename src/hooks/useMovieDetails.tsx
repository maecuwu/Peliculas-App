import { useState, useEffect } from 'react';
import movieDB from '../api/movieDB';
import { MovieById } from '../interfaces/movieInterface';
import { Cast, CreditsResponse } from '../interfaces/creaditsInterface';


interface MovieDetails {
    isLoading: boolean;
    movieById?: MovieById;
    cast: Cast[];
}


export const useMovieDetails = (movieId: number) => {

    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        cast: [],
        movieById: undefined
    });

    const getMovieDetails = async () => {

        const movieDetailsPromise = movieDB.get<MovieById>(`/${movieId}`)
        const creditsPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`)

        const [movieDetailsResponse, creditsResponse] = await Promise.all([
            movieDetailsPromise,
            creditsPromise
        ])

        setState({
            isLoading: false,
            movieById: movieDetailsResponse.data,
            cast: creditsResponse.data.cast
        })
    }

    useEffect(() => {
        getMovieDetails();
    }, [])


    return {
        ...state
    }
}
