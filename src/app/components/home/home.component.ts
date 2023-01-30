import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recipes : any;
  imagePath : any = 'http://127.0.0.1:8000';
  constructor(private dataservices:DataService){}
  ngOnInit(): void {
    this.getRecipeData();
  }

  getRecipeData(){
    this.dataservices.getRecipe().subscribe(res => {
      this.recipes = res;
    })
  }



}
