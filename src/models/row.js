import Place from "./place";

export default class Row {
    constructor(row) {
        this.id = row.id;
        this.hallId = row.hallId;
        this.number = row.number;
        this.places = row.places.map(place => new Place(place));
    }
}