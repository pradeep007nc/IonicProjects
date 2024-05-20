import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  text!: string;
  shouldDisplay: boolean = false;

  onClick(){
    this.text = `assigned data mama mia`
  }

  data: string[] = [
    'bangalore',
    'chennai',
    'mysore',
    'ahmedabad',
    'delhi',
    'hyderabad',
    'kolkata',
    'lucknow',
    'pune'
  ]

  results: string[]  = [...this.data];

  onSearch(event: any){
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((data) => {return data.toLowerCase().indexOf(query) > -1})
  }
}
