export class NewColonist {
    constructor(
        public name: string,
        public age: number,
        public job_id: string,
    ) { }
}

export interface Colonist {

    name: string;
    id: number;
    age: number;
    job: Job;
}

export class Job {
         name: string;
         id: number;
         description: string;

}
export interface Encounter {
    id: number;
    date: string;
    atype: string;
    action: string;
    colonist_id: number;
}

export class NewEncounter {
    constructor(
        public date: string,
        public atype: string,
        public action: string,
        public colonist_id: number,
    ) { }

}
export interface Alien {
    
         id: number;
         type: string;
         submitted_by: string;
         description: string;

}


