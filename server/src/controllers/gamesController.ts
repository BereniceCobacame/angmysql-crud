import {Request, Response} from 'express';
import pool from '../database';

class GamesController{
    public index (req: Request,res: Response){
        //res.send('Hello hehe')
        pool.query('DESCRIBE games');
        res.json('games');
    }
    public create(req: Request, res: Response){
        res.json({text: 'creando un juego'});
    }
}

const gamesController = new GamesController();
export default gamesController;