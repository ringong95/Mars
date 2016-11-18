import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators,ValidatorFn,  AbstractControl } from '@angular/forms';
import { NewColonist, Job } from '../models';
import JobsService from '../services/jobs.service';
import ColonistsService from '../services/colonists.service';
import { cantBe } from '../shared/validators';
import { Router } from '@angular/router';

const notNone = (value)=> {
	return value !== "(none)" ? true : true;
}


function tooOld(value: number): ValidatorFn{
	return (control: AbstractControl): {[ key: string ]: any} =>{
		return control.value > 100 ? { 'too old': { value }} : null;
	}
}

	@Component({
		selector: 'app-register',
		templateUrl: './register.component.html',
		styleUrls: ['./register.component.css'],
		providers: [JobsService, ColonistsService]
	})
	export class RegisterComponent implements OnInit {

		marsJobs: Job[];
		registerForm: FormGroup;
		NO_JOB_SELECTED = '(none)';
		submited : boolean;

		constructor(private jobsService: JobsService, private colonistService: ColonistsService, private router: Router) { 
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
			console.log( this.registerForm.invalid)
			if(this.registerForm.invalid){
			this.submited = true;
			}else {

			}
			const name = this.registerForm.get('name').value;
			const age = this.registerForm.get('age').value;
			const job_id = this.registerForm.get('job_id').value;
			const colonist = new NewColonist(name, age , job_id);
			// console.log('Okm let\'s register this fuck ', new NewColonist(name, age, job_id));
			this.colonistService.submitColonist(colonist).subscribe((response) => {
				localStorage.setItem("colonist_id",JSON.stringify(response.id));
				  this.router.navigate(['encounter']);
			}, (err) => {
				console.log(err);
			});
		}
		ngOnInit() {

			this.registerForm = new FormGroup({
				name: new FormControl('',[Validators.required, Validators.minLength(2)]),
				age: new FormControl('', [Validators.required, tooOld(100)]),
				job_id: new FormControl(this.NO_JOB_SELECTED, [cantBe(this.NO_JOB_SELECTED)])
			});
			// setTimeout(()=>{
				// 	console.log("I\'m Late!")
				// }, 2000);
				// console.log("I\'m on time!")
			}

		}



// localStorage.setItem("Ass",{ Hello: 'hello'})