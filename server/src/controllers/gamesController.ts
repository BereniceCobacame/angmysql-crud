import {Request, Response} from 'express';
import pool from '../database';

class GamesController{
    // public index (req: Request,res: Response){
    //     //res.send('Hello hehe')
    //     pool.query('DESCRIBE games');
    //     res.json('games');
    // }
    public async list(req: Request, res: Response){
        const games = await pool.query('SELECT * FROM games');
        res.json(games);
    }
    public async listu(req: Request, res: Response): Promise <any>{
        const {id} = req.params;
        const games = await pool.query('SELECT * FROM games WHERE id = ?',[id]);
        console.log(games);
        if(games.length > 0){
            return res.json(games[0]);
        }
        res.status(404).json({text: "El juego no existe"});
    }
    public async create(req: Request, res: Response): Promise <void>{
        await pool.query('INSERT INTO games set ?', [req.body]);
        res.json({message: 'creando un juego'});
    }
    public async update(req: Request, res: Response): Promise <void>{
        const {id} = req.params;
        await pool.query('UPDATE games set ? WHERE id = ?',[req.body, id]);
        res.json({message: 'actualizando un juego: ' + req.params.id});
    }
    public async delete(req: Request, res: Response): Promise <void>{
        const {id} = req.params;
        await pool.query('DELETE FROM games WHERE id = ?',[id]);
        res.json({message: 'eliminando un juego: ' + req.params.id});
    }
}

const gamesController = new GamesController();
export default gamesController;