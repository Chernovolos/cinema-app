import Row  from "./row";

class Hall {
    constructor(hall) {
        this.id = hall.id;
        this.name = hall.name;
        this.rows = hall.rows.map(row => new Row(row));
    }
}