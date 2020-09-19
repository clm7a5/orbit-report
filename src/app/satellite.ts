export class Satellite {
    //add properties
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

    //add constructor signature
    constructor (name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        //assign the class properties in the constructor
        this.name = name;
        this.orbitType = orbitType;
        this.type = type;
        this.operational = operational;
        this.launchDate = launchDate;
    }



}
