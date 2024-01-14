import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  tableHeader = ['Index', 'Name', 'Quantity', 'Price', 'Active'];
  tableData: any[] = [
    { index: 1, name: 'a', quantity: 2, price: 5, active: false },
    { index: 2, name: 'b', quantity: 50, price: 99, active: true }
  ];
  newProduct: {index: number, name: string, quantity: number, price: number, active: boolean}= {index: 0, name:"", quantity: 0, price: 0, active: true};



  selectedColumn: string = '';
  inputText: string = '';


  populateTable() {
  this.tableData.push({...this.newProduct});
  }

}
