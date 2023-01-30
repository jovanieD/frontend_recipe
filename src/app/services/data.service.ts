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

    getRecipeSale(){
      return this.httpclient.get('http://127.0.0.1:8000/api/sale');
    }

    getRecipeFree(){
      return this.httpclient.get('http://127.0.0.1:8000/api/free');
    }

    getSearchTag(name : string){
      return this.httpclient.get('http://127.0.0.1:8000/api/search/' + name);
    }
}
