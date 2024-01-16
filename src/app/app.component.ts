import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'my-first-project';
  // oddNumbers= [1, 3, 5];
  // evenNumbers= [2, 4];
  private numbers: number[] = [1, 2, 3, 4, 5];
  onlyOdd: boolean = false;
  defaultObj = new Obj();
  constructor() {
    console.log(this.defaultObj);
    console.log(this.checkNumber(10));
  }
  getNumbers() {
    return this.numbers;
  }
  checkNumber(item: number) {
    return item % 2 == 0;
  }
}
class Obj {
  x: number;
  constructor() {
    this.x = 0;
  }
}