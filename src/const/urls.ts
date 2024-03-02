const baseURL = 'https://api.themoviedb.org/3/'

const genre = '/genre/movie/list';
const movies = '/discover/movie';
const poster = 'https://image.tmdb.org/t/p/w300/'
const noPoster = '/noPoster.jpg'
const movie = '/movie'
const actors = '/movie'

const urls = {
    genre,
    movies,
    poster,
    movie: {
        byId:(id: string)=> `${movie}/${id}`
    },
    actors:{
        byId: (id: string) => `${actors}/${id}/credits`
    }
}

export {
    baseURL,
    urls,
    noPoster
}

