export interface Product {
    name: string,
    price: number,
}

export class Soda implements Product {
    name = 'Coca-Cola';
    price = 2.30;
}

export class Chocolate implements Product {
    name = 'Chocolate';
    price = 2.80;
}

export class Peanuts implements Product {
    name = 'Peanuts';
    price = 1.50;
}

export class StartPoint implements Product {
    name = 'please select a product';
    price = 0;
}

export default function GetProduct() {
    let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            return new Soda();
        case 1:
            return new Chocolate();
        case 2:
            return new Peanuts();
    };
    return;
}