import * as express from 'express';
import BaseController from './controllers/base';
import MaintenanceController from './controllers/maintenance';
import UserController from './controllers/user';

export default class App {
    public app: express.Application;
    private port: any;
    private controllers: any[] = [
        new MaintenanceController(),
        new UserController(),
        new BaseController(),
    ];

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8080;

        this.initializeMiddlewares();
        this.initializeRoutes();
    }

    private initializeMiddlewares() {
        this.app.use(express.json());
    }

    private initializeRoutes() {
        this.controllers.forEach((controller: any) => {
            this.app.use('/api/', controller.router);
        });
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`\n######\nPariti\n######\n`);
        });
    }
}