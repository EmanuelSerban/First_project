import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  tableData: any[] = [
    { ref: 1, name: 'a', quantity: 2, price: 5, active: false },
    { ref: 2, name: 'b', quantity: 50, price: 99, active: true }
  ];
  newProduct: {ref: number, name: string, quantity: number, price: number, active: boolean}= {ref: 0, name:"", quantity: 0, price: 0, active: true};



  selectedColumn: string = '';
  inputText: string = '';


  populateTable() {
  this.tableData.push({...this.newProduct});
  }

}
