export class NewColonist {
    constructor(
        public name: string, 
        public age: number,
        public job_id: string,
        ){}
}

interface Colonist {

    name: string;
    id: number;
    age: number;
    job: Job;
}

export class Job{
    constructor(

        public name: string,
        public id: number,
        public description: string,

        ){}
}
export class Encounter{
    constructor(
        public id: number,
        public date: string,
        public colonist_id: number,
        public atype: string,
        public action: string,
        ){}

}
export class Alien {
    constructor(
        public id: number,
        public type: string,
        public submitted_by: string,
        public description: string
        ){}


}


