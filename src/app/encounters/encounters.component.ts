import { Component, OnInit } from '@angular/core';
import { NewEncounter, Encounter } from '../models';
import EncountersService from '../services/encounters.service'


@Component({
	selector: 'app-encounters',
	templateUrl: './encounters.component.html',
	styleUrls: ['./encounters.component.css'],
	providers: [EncountersService]
})
export class EncountersComponent implements OnInit {

	encounters: NewEncounter;
	encounterlist: NewEncounter[];

	


	constructor(encounterService: EncountersService) {
		this.encounters = new NewEncounter ( null, null, null, null);
		encounterService.getEncounters().subscribe((encounters) => {
				this.encounterlist = encounters ;
			// this.encounters = encounters
			console.log(this.encounterlist)
			
		}, (err) => {
			console.log(err);
		});
	}

	ngOnInit() {
	}

}
