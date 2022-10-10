import { Request, Response, Router } from 'express';
import VendingMachineHandler, { VendingMachineSize } from '../handlers/vending';

export default class UserController {
  public path = '/users';
  public router = Router();

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.post(this.path + '/purchase', this.buyProduct.bind(this));
  }

  private buyProduct = (request: Request, response: Response) => {
    let detail: string = '';
    let status: boolean = false;
    
    const vendingMachine = new VendingMachineHandler()
    vendingMachine.size = VendingMachineSize.medium;

    const { coins } = request.body;
    if (!vendingMachine.acceptedCoins.includes(coins)) detail = 'Please enter a valid coin';

    response.status(200).send({ status, detail });
  }

}