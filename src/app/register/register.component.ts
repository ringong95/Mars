import { Component, OnInit } from '@angular/core';
import { Colonist } from '../models';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	colonist: Colonist;

	constructor() { 
		this.colonist = new Colonist('Tesla', null, null, null);
	}

	ngOnInit() {
	}

}
