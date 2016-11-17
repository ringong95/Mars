import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators,ValidatorFn,  AbstractControl } from '@angular/forms';
import { NewColonist, Job } from '../models';
import JobsService from '../services/jobs.service';

const notNone = (value)=> {
	return value !== "(none)" ? true : true;
}

function cantBe(value: string): ValidatorFn{
	return (control: AbstractControl): {[ key: string ]: any} =>{
		return control.value === value ? { 'cant be none': { value }} : null;
	}
}

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css'],
	providers: [JobsService]
})
export class RegisterComponent implements OnInit {

	marsJobs: Job[];
	registerForm: FormGroup;
	NO_JOB_SELECTED = '(none)';

	constructor(jobsService: JobsService) { 
		jobsService.getJobs().subscribe((jobs) => {
			this.marsJobs = jobs;
			console.log(jobs)	
		}, (err) => {
			console.log(err);
		});
	}

	onSubmit($event){
		// console.log($event)
		$event.preventDefault();


	}
	ngOnInit() {

		this.registerForm = new FormGroup({
			name: new FormControl('',[Validators.required, Validators.minLength(2)]),
			age: new FormControl('', [Validators.required, Validators.maxLength(3)]),
			job_id: new FormControl(this.NO_JOB_SELECTED, [cantBe(this.NO_JOB_SELECTED)])
		});
		// setTimeout(()=>{
			// 	console.log("I\'m Late!")
			// }, 2000);
			// console.log("I\'m on time!")
		}

	}
