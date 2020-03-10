//servidor

import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';

class Server{
    public app: Application;
    constructor(){
        //inicializar express
        this.app = express();
        this.config();
        this.routes();
    }

    //para configurar propiedad app
    config(): void{
        //puerto
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }
    //definir de app las rutas de los servidores
    routes(): void{
        this.app.use('/', indexRoutes);
        this.app.use('/api/games', gamesRoutes);
    }

    //inicializar el servirdor (app listen)
    start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        })
    }
}

const server = new Server();
server.start();