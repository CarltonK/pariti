import { Coin, Dime, Dollar, Half, Quarter } from './coin';
import GetProduct, { Product, StartPoint } from './product';

export enum VendingMachineSize {
    small = 6,
    medium = 9,
    large = 12,
}

class Cell {
    constructor(public product: Product) { }
    // Set default stock
    stock = 2;
    isSold = false;
}

export default class VendingMachineHandler {
    amountPaid = 0;
    cells: any = [];
    acceptedCoins: Coin[] = [new Dime(), new Quarter(), new Half(), new Dollar()];
    selectedSlot = new Cell(new StartPoint);
    canPay = () => this.amountPaid - this.selectedSlot.product.price >= 0;

    set size(givenSize: VendingMachineSize) {
        this.cells = [];

        for (let index = 0; index < givenSize; index++) {
            let product: any = GetProduct();
            this.cells.push(new Cell(product))
        }
    }

    selectItem = (cell: Cell) => {
        cell.isSold = false;
        this.selectedSlot = cell;
    }

    canAcceptCoin = (coin: Coin) => {
        let totalCoins = this.amountPaid;
        this.amountPaid = totalCoins + coin.value;
    }

    payForItem = (): any => {
        if (this.selectedSlot.stock < 1) {
            return 'Out of product'; 
        }
        let currentPaid = this.amountPaid;
        this.amountPaid  = Math.round(((currentPaid - this.selectedSlot.product.price)*100))/100;
        let currentStock = this.selectedSlot.stock;
        this.selectedSlot.stock = currentStock - 1;
        this.selectedSlot.isSold = true;
    }
}