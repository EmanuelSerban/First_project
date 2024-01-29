export class Product {

    ref: number = 0;
    name: string = "";
    quantity: number = 0;
    price: number = 0;
    active: boolean = true;

    Constructor(ref: number, name: string, quantity: number, price: number, active: boolean) {
        this.ref = ref;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.active = active;
    }
}