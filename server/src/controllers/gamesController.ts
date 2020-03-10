import {Request, Response} from 'express';
import pool from '..routes/database';

class GamesController{
    public index (req: Request,res: Response){
        //res.send('Hello hehe')
        pool.query('DESCRIBE games');
        res.json('games');
    }
}

const gamesController = new GamesController();
export default gamesController;