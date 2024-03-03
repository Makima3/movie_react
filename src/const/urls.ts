const baseURL = 'https://api.themoviedb.org/3/'

const genre = '/genre/movie/list';
const movies = '/discover/movie';
const poster = 'https://image.tmdb.org/t/p/w300/'
const noImage = 'https://i.pinimg.com/736x/82/36/72/823672c13802854000931c67616b6f69.jpg'
const noPoster = 'https://i.pinimg.com/736x/be/aa/4b/beaa4b06ec621368d665eccc509c42c0.jpg'
const movie = '/movie'
const actors = '/movie'
const search = '/search/movie'

const urls = {
    genre,
    movies,
    poster,
    search,
    movie: {
        byId: (id: string) => `${movie}/${id}`
    },
    actors: {
        byId: (id: string) => `${actors}/${id}/credits`
    }
}

export {
    baseURL,
    urls,
    noImage,
    noPoster
}

