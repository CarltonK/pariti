import { Request, Response, Router } from 'express';

export default class MaintenanceController {
  public path = '/maintenance';
  public router = Router();

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(this.path, this.livenessCheck.bind(this));
  }

  private livenessCheck = (request: Request, response: Response) => {
    response.status(200).send({
      status: true,
      detail: `Pariti vending machine is up and running`,
    });
  }

}