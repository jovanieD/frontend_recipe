import { DataService } from './../../services/data.service';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {

  recipes : any;
  data : any;
  imagePath : any = 'http://127.0.0.1:8000';
  constructor(private dataservices:DataService,
    private router:Router){}


  getTag(name:any){
    const tag = name.target.value;
    this.data= tag;
  }

  getData(){
    this.dataservices.getSearchTag(this.data).subscribe(res => {this.recipes = res;})
    this.router.navigateByUrl('search')
  }

}
