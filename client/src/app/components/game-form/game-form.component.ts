import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { GamesService } from 'src/app/services/games.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  game: Game = {    
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  };

  constructor( private gameService: GamesService, private router: Router) { }

  ngOnInit(): void {
  }

  guardarG(){
    //elimina estos datos para que la base de datos los genere y no aquí porque si no sale mal uwu
    delete this.game.created_at;
    delete this.game.id;
    this.gameService.saveGame(this.game)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/games']);
      },
      err => console.error(err)
    )
  }
}
