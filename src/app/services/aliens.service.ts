import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/OBservable'
import { Alien } from '../models';
import 'rxjs/add/operator/map';

@Injectable()
export default class AliensService {

  ALIEN_JSON = "https://red-wdp-api.herokuapp.com/api/mars/aliens";
	constructor(private http: Http) { }

	getAliens(): Observable<Alien[]> {
		return this.http.get( this.ALIEN_JSON )
		.map((res: Response) => res.json().aliens);
	};


}


