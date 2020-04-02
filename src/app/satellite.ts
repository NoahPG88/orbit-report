//import { findLast } from '@angular/compiler/src/directive_resolver';

export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    //showWarning: boolean = true;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
        //console.log(this.showWarning); //test shows true
    }

    shouldShowWarning(): boolean {
        return this.type.toLowerCase() === 'space debris';
      }
}
