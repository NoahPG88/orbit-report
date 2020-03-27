export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
        name = this.name;
        orbitType = this.orbitType;
        type = this.type;
        launchDate = this.launchDate;
        orbitType = this.orbitType;
        operational = this.operational;
    }
}
