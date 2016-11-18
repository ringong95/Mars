import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators,ValidatorFn,  AbstractControl } from '@angular/forms';
import { Alien, NewEncounter } from '../models';
import AliensService from '../services/aliens.service';
import EncountersService from '../services/encounters.service';
import { cantBe } from '../shared/validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers: [AliensService, EncountersService]
})
export class ReportComponent implements OnInit {



	alienslist: Alien[];
	reportForm: FormGroup;
	NO_ALIEN_SELECTED = '(none)'

  constructor(private aliensService: AliensService,
		  private encountersService: EncountersService,  
		  private router: Router,) {

	aliensService.getAliens().subscribe((aliens) => {
	  this.alienslist = aliens;
	  console.log(aliens)
	}, (err) => {
	  console.log(err);
	});
  }

private getDate(){
	var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();


const date = `${yyyy}-${mm}-${dd}`

return date

}

onSubmit($event){
			$event.preventDefault();

			const date = this.getDate()
			if(this.reportForm.invalid){
					
			}else {

			}
			const type = this.reportForm.get('atype').value;
			const action = this.reportForm.get('action').value;
					
			const colonist_id = localStorage.getItem("colonist_id")
		
			new NewEncounter(date, type, action, colonist_id );
			const encounter = new NewEncounter(date, type, action, colonist_id )



			this.encountersService.submitEncounter(encounter).subscribe(() =>{
				      this.router.navigate(['encounter']);
			}, (err)=>{
				console.log(err);

			});
			
		}

  ngOnInit() {
  	this.reportForm = new FormGroup({
  		atype: new FormControl(this.NO_ALIEN_SELECTED, [cantBe(this.NO_ALIEN_SELECTED)]),
  		action: new FormControl('', [Validators.required, Validators.maxLength(450)])
  	})
  }

}
