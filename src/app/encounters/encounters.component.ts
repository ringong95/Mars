import { Component, OnInit } from '@angular/core';
import { NewEncounter, Encounter } from '../models';
import EncountersService from '../services/encounters.service';
import {
	HostBinding,
	trigger, transition, animate,
	style, state
} from '@angular/core';


@Component({
	selector: 'app-encounters',
	templateUrl: './encounters.component.html',
	styleUrls: ['./encounters.component.css'],
	providers: [EncountersService],
	animations: [
	trigger('routeAnimation', [
		state('*',
			style({
				opacity: 1,
				transform: 'translateX(0)'
			})
			),
		transition(':enter', [
			style({
				opacity: 0,
				transform: 'translateX(-100%)'
			}),
			animate('1.2s ease-in')
			]),
		transition(':leave', [
			animate('1.5s ease-out', style({
				opacity: 1,
				transform: 'translateY(100%)'
			}))
			])
		])
	]
})
export class EncountersComponent implements OnInit {

	encounters: NewEncounter;
	encounterlist: NewEncounter[];

	@HostBinding('@routeAnimation') get routeAnimation(){
		return true;
	}

	@HostBinding('style.display') get display(){
		return 'block';
	}


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
