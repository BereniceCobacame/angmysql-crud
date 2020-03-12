import { Component, OnInit, HostBinding } from '@angular/core';
import {GamesService} from '../../services/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  //una fila a todo este componente
  @HostBinding('class') classes = 'row';

  games: any = [];
  constructor(private gameService: GamesService) { }

  ngOnInit() {
    this.getG();
  }

  getG(){
    this.gameService.getGames().subscribe(
      res => {
        this.games = res;
      },
      err => console.error(err)
    );
  }

  deleteG(id: string){
    this.gameService.delete(id).subscribe(
      res => {
        console.log(res);
        this.getG();
        //poner alerta uwu
      },
      err => console.log(err)
    )
  }
  editG(id: string){
    this.gameService.delete(id).subscribe(
      res => {
        console.log(res);
        this.getG();
        //poner alerta uwu
      },
      err => console.log(err)
    )
  }


}
