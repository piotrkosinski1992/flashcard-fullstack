import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../store/app.reducers";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  questionsLeft: number;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select('game')
      .subscribe(gameState => this.questionsLeft = gameState.questionsLeft);
  }

}
