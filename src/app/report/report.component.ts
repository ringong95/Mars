import { Component, OnInit } from '@angular/core';
import { Alien } from '../models';
import AliensService from '../services/aliens.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers: [AliensService]
})
export class ReportComponent implements OnInit {

  alien: Alien;
  alienslist: Alien[];


  constructor(aliensService: AliensService) {
    this.alien = new Alien(null, null, null, null);
    aliensService.getAliens().subscribe((aliens) => {
      this.alienslist = aliens;
      console.log(aliens)
    }, (err) => {
      console.log(err);
    });
  }


  ngOnInit() {
  }

}
