import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  recipe :any;

  constructor( private httpclient: HttpClient,
    private router: Router) {}

    getRecipe(){
      return this.httpclient.get('http://127.0.0.1:8000/api/home');
    }

    getSearchTag(name : string){
      return this.httpclient.get('http://127.0.0.1:8000/api/search/' + name);
    }
}
