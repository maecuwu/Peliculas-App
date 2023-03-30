import axios from "axios";


const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'cff31b0d72bac80fcb8cabf3f2029887',
        language:  'es-ES'
    }
})

export default movieDB;