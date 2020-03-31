export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    warningSwitch: boolean = true;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }

    shouldShowWarning(){
        // if(this.type.toLowerCase() === 'space debris'){
        //     console.log('in');
        //     return true;
        // }
        this.warningSwitch = true;
        console.log("this thing on?")
    }
}
