import * as ACTION from "../actions/types";

const initialState = {
    films: [],
    preloader: false,
    error: null,
    genres: [
        "Приключения", "Фантастика", "Триллер", "Семейный", "Комедиа","Фэнтэзи",
        "Анимация", "Боевик", "Экшн", "Романтика", "Ужасы", "Криминал", "Мелодрама"
     ],
    shownFilms: [],
};

export default (state = initialState, action) => {
    let {type, payload} = action;

    switch (type) {
        case ACTION.GET_CURRENT_FILMS_START:
            console.log("GET_CURRENT_FILMS_START");
            return {
                ...state,
                preloader: true
            };

        case ACTION.GET_CURRENT_FILMS_SUCCESS:
            console.log('%c FILMS FROM SERVER', 'font-size: 18px; color: green',payload);
            return {
                ...state,
                preloader: false,
                films: payload,
                shownFilms: payload,
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
            let newShownFilms = state.films.filter((film) => {
                let nameGood = false;
                let genreGood = false;

                if (film.title.toUpperCase().indexOf(payload.search.toUpperCase()) >= 0) {
                    nameGood = true;
                }
                if (payload.genre.length === 0 || film.genre.filter(genre => genre.toUpperCase() === payload.genre.toUpperCase()).length > 0) {
                    genreGood = true;
                }
                return nameGood && genreGood;
            });
            return {
                ...state,
                shownFilms: newShownFilms
            };

        default: return state;
    }
}