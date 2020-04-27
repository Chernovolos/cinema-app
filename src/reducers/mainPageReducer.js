import * as ACTION from "../actions/types";

const initialState = {
    films: [],
    preloader: false,
    error: null,
    genres: [
        "Приключения", "Фантастика", "Триллер", "Семейный", "Комедиа","Фэнтези",
        "Анимация", "Боевик", "Экшн", "Романтика", "Ужасы", "Криминал", "Мелодрама"
    ],
    shownFilms: [],
};

export default (state = initialState, action) => {
    let {type, payload} = action;

    switch (type) {
        case ACTION.GET_CURRENT_FILMS_SUCCESS:
            console.log('%c FILMS FROM SERVER', 'font-size: 18px; color: green', payload);
            let shownFilms = filterFilms(payload.films, {genre: payload.genre, search: payload.search});
            return {
                ...state,
                preloader: false,
                films: payload.films,
                shownFilms,
                error: null
            };

        // TODO 29.03.2020 add error handling
        case ACTION.GET_CURRENT_FILMS_ERROR:
            return {
                ...state,
                preloader: false,
                error: payload,
                films: [],
                shownFilms: []
            };

        case ACTION.FILTER_CURRENT_FILMS:
            let newShownFilms = filterFilms(state.films, payload);
            return {
                ...state,
                shownFilms: newShownFilms
            };

        default: return state;
    }
}

function filterFilms (films, filter) {
    return films.filter((film) => {
        let nameGood = false;
        let genreGood = false;

        if (film.title.toUpperCase().indexOf(filter.search.toUpperCase()) >= 0) {
            nameGood = true;
        }
        if (filter.genre.length === 0 || film.genres.filter(genre => genre.toUpperCase().trim() === filter.genre.toUpperCase()).length > 0) {
            genreGood = true;
        }
        return nameGood && genreGood;
    });
}