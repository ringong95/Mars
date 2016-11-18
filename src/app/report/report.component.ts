import { Component, OnInit } from '@angular/core';
import { Alien, NewEncounter } from '../models';
import AliensService from '../services/aliens.service';
import { FormGroup, FormControl, FormBuilder, Validators,ValidatorFn,  AbstractControl } from '@angular/forms';
import EncountersService from '../services/encounters.service';
import { cantBe } from '../shared/validators'
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
			// console.log( this.reportForm.invalid)
			if(this.reportForm.invalid){
					
			}else {

			}
			const type = this.reportForm.get('atype').value;
			const action = this.reportForm.get('action').value;
			console.log (type , action);
			new NewEncounter(date, type, action, 4 );
			console.log('Okm let\'s register this fuck ', new NewEncounter(date, type, action, 4 ));
			const encounter = new NewEncounter(date, type, action, 4 )



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
