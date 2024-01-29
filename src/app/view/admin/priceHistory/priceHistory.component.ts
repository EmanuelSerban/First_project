import { Component } from "@angular/core";

export class PriceHistory {
    productId: number;
    fromDate: Date;
    price: number;
  
    constructor(productId: number, fromDate: Date, price: number) {
      this.productId = productId;
      this.fromDate = fromDate;
      this.price = price;
    }
  }
  
@Component({
    selector: 'app-priceHistory',
    templateUrl: './priceHistory.component.html'
})

export class PriceHistoryComponent {
    priceHistoryList: PriceHistory[] = [];

    constructor() { }
  
    ngOnInit(): void {
      this.priceHistoryList = [
        new PriceHistory(1, new Date('2023-01-01'), 10),
        new PriceHistory(1, new Date('2023-02-01'), 12),
      ];
    }
}