
export default class Film {
    constructor(movie) {
        this.id = movie._id;
        this.title = movie.title;
        this.description = movie.description;
        this.age = movie.age;
        this.poster = movie.poster;
        this.trailer = movie.trailer;
        this.language = movie.language;
        this.length = movie.long;
        this.rentStart = movie.rentStart;
        this.rentEnd = movie.rentEnd;
        this.genres = movie.genre.map(genre => genre.trim().replace(",", ""))
            .filter(genre => genre.length);
        this.countries = movie.country.map(country => country.trim().replace(",", ""))
            .filter(country => country.length);
        this.actors = movie.actors.map(actor => actor.trim().replace(",", ""))
            .filter(actor => actor.length);
    }
}
