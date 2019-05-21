import {Component, OnDestroy, OnInit} from '@angular/core';
import {GameState} from "../store/game.reducers";
import {Store} from "@ngrx/store";
import {AlertService} from "../../shared/alert/alert.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-game-answer',
  templateUrl: './game-answer.component.html',
  styleUrls: ['./game-answer.component.css']
})
export class GameAnswerComponent implements OnInit, OnDestroy {

  answer: string;

  constructor(private store: Store<GameState>, private alertService: AlertService) { }

  ngOnInit() {
    this.store.select('game').subscribe(
      gameStore => this.answer = gameStore.activeFlashcard.tails
    )
  }

  ngOnDestroy(): void {
    this.alertService.clearAlerts();
  }
}
