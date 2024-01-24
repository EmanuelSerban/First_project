import { Component } from '@angular/core';

export class Category {
  id: number = 0;
  name: string = "";

  Constructor(id: number, name: string){
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
  tableData: any[] = [
    { id: 1, name: 'a'}
  ];
  newCategory: { id: number, name: string} = { id: 0, name: ""};

addCategory() {
  this.tableData.push(new Category)
}
}
