import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../store/app.reducers";
import * as GameActions from "./store/game.actions"
import {GameState} from "./store/game.reducers";
import {Result} from "./result.model";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  gameState: GameState;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select('game')
      .subscribe(gameState => this.gameState = gameState);
  }

  calculateScore() {
    this.store
      .dispatch(new GameActions.SaveGameResult(
        new Result(this.gameState.correctAnswers,
                  this.gameState.incorrectAnswers,
                  this.gameState.activeGroupName)));
  }
}
