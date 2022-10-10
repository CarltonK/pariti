// Currency
export abstract class Coin {
    constructor(public value: number) { }
}

export class Penny extends Coin {
    constructor() { super(0.05); }
}

export class Dime extends Coin {
    constructor() { super(0.10); }
}

export class Quarter extends Coin {
    constructor() { super(0.25); }
}

export class Half extends Coin {
    constructor() { super(0.50); }
}

// Dollar
export class Dollar extends Coin {
    constructor() { super(1.00); }
}