import { Component, OnInit } from '@angular/core';
import { Colonist, Job } from '../models';
import JobsService from '../services/jobs.service'
@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css'],
	providers: [JobsService]
})
export class RegisterComponent implements OnInit {

	colonist: Colonist;
	marsJobs: Job[];

	constructor(jobsService: JobsService) { 
		this.colonist = new Colonist('Tesla', null, null, null);
		jobsService.getJobs().subscribe((jobs) => {
			// console.log(jobs);
			this.marsJobs = jobs;
		})
	}

	ngOnInit() {
	}

}
