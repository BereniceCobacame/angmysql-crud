//enrutador

import { Router } from 'express';
import gamesController from '../controllers/gamesController';

class GamesRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }

    config(): void{
        //ruta para la ruta inicial ./ devuelve msg
        this.router.get('/', gamesController.list);
        this.router.get('/:id', gamesController.listu);
        this.router.post('/', gamesController.create);
        this.router.put('/:id', gamesController.update);
        this.router.delete('/:id', gamesController.delete);
    }
}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;