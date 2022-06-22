

interface IFilmWorld {
    loading: boolean,
    data: {
        movie: {
            ID: string,
            Title: string
        },
        provider: string
    }
}

interface ICinemaWorld {
    loading: boolean,
    data: {
        movie: {
            ID: string,
            Title: string
        },
        provider: string
    }
}

export interface IMovie {
    filmWorld: IFilmWorld,
    cinemaWorld: ICinemaWorld
}