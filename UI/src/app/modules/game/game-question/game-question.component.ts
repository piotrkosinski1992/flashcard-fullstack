import { Component, OnInit } from '@angular/core';
import {GameService} from "../game.service";
import {ActivatedRoute, Router} from "@angular/router";
import * as GameActions from "../store/game.actions"
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.reducers";
import {AlertService} from "../../shared/alert/alert.service";
import {GameState} from "../store/game.reducers";
import {Observable} from "rxjs";
import {Flashcard} from "../../flashcards/flashcard.model";

@Component({
  selector: 'app-game-question',
  templateUrl: './game-question.component.html',
  styleUrls: ['./game-question.component.css']
})
export class GameQuestionComponent implements OnInit {
  answer: string;
  correctAnswerFlashcard: Flashcard;
  gameState: Observable<GameState>;

  constructor(private gameService: GameService,
              private router: Router,
              private activeRoute: ActivatedRoute,
              private store: Store<AppState>,
              private alertService: AlertService) { }

  ngOnInit() {
    this.gameService.pickRandomFlashcard();
    this.gameState = this.store.select('game')
  }

  onCheckAnswer() {
    this.store.select('game').subscribe(data => this.correctAnswerFlashcard = data.activeFlashcard);

    if(this.answer == this.correctAnswerFlashcard.tails) {
      this.store.dispatch(new GameActions.IncrementCorrectAnswers());
      this.store.dispatch(new GameActions.DeleteFlashcard(this.correctAnswerFlashcard));
      this.answer = "";

      this.gameService.pickRandomFlashcard();
    }
     else {
      this.alertService.errorAlert("FALSE");
      this.store.dispatch(new GameActions.IncrementIncorrectAnswers());
      this.router.navigate(['../answer/' + this.answer], {relativeTo: this.activeRoute})
    }
  }
}
