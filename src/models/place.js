
export  default class Place {
    constructor(place) {
        this.id = place.id;
        this.row = place.row;
        this.number = place.number;
        this.status = place.status;
        this.price = place.price;
    }
}

export const PLACE_STATUS = {
    FREE: "FREE",
    RESERVED: "RESERVED",
    HIDDEN: "HIDDEN"
};