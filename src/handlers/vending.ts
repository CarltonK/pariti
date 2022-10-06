interface Product {
    name: string,
    price: number,
    slot: number,
    count: number,
}

export default class VendingHandler {
    private chocolate: Product = { name: 'Chocolate', price: 20, slot: 1, count: 10 };
    private soda: Product = { name: 'Coca Cola', price: 10, slot: 2, count: 8 };
    private cake: Product = { name: 'Vanilla Cake', price: 30, slot: 3, count: 6 };

    private currentChange: number = 100;

    private calculateChange = (product: Product, amount: number) => {
        if (amount > product.price) {
            const change = amount - product.price;
            if (this.currentChange >= change) return change;
            else return false;
        }
        else if (amount == product.price) return null;
        else return false;
    }

    public purchase = (product: Product, amount: number) => {

    }
}