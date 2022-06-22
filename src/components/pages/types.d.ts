
 interface IMovieData {
    ID: string,
    Title: string
    Poster: string,
    Plot: string,
    Rated: string,
    Price: string
}

interface IFilmWorld {
    loading: boolean,
    data: {
       movie: IMovieData,
       provider: string
    }
}

interface ICinemaWorld {
    loading: boolean,
    data: {
        movie: IMovieData,
        provider: string
    }
}

export interface IMovie {
    filmWorld: IFilmWorld,
    cinemaWorld: ICinemaWorld
}

export interface IMovies {
    
}