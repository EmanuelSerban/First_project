import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

export class Category {
  id: number;
  name: string;

  constructor(id: number = 0, name: string = "") {
    this.id = id;
    this.name = name;
  }
}


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  tableData: Category[] = [
    { id: 1, name: 'a' }
  ];
  newCategory: Category = new Category(1, "abc");

  addCategory() {
    this.tableData.push({ ...this.newCategory });
  }
  removeCategory(index: number): void {
    if (index >= 0 && index < this.tableData.length) {
      this.tableData.splice(index, 1);
    }
  }
}

