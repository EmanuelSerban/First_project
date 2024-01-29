import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export class Product {
  ref: number;
  name: string;
  quantity: number;
  price: number;
  active: boolean;

  constructor(ref: number, name: string = "", quantity: number = 0, price: number = 0, active: boolean = true) {
    this.ref = ref;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.active = active;
  }
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
[x: string]: any;
  selectedColumn: string = '';
  inputText: string = '';

  tableData: Product[] = [
    new Product(1, "Produs 1", 1, 1, true),
    new Product(2, "Produs 2", 2, 2, false)
  ];
  newProduct: Product = new Product(0);

  populateTable() {
    this.tableData.push({ ...this.newProduct });
  }

  removeProduct(index: number): void {
    console.log("Se elimină produsul de la index:", index);
    if (index >= 0 && index < this.tableData.length) {
      this.tableData.splice(index, 1);
    }
  }


  saveToLocalStorage(): void {
    localStorage.setItem('products', JSON.stringify(this.tableData));
  }

  loadFromLocalStorage(): void {
    const savedData = localStorage.getItem('products');
    if (savedData) {
      this.tableData = JSON.parse(savedData);
    }
  }
}
  