import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";
import * as gameActions from "../../game/store/game.actions"
import {Observable} from "rxjs";
import {GameState} from "../../game/store/game.reducers";
import {GameService} from "../../game/game.service";

@Component({
  selector: 'app-flashcards-list',
  templateUrl: './flashcards-list.component.html',
  styleUrls: ['./flashcards-list.component.css']
})
export class FlashcardsListComponent implements OnInit {

  //flashcards: Flashcard[];
  gameState: Observable<GameState>;

  constructor(private store: Store<GameState>, private router: Router,
              private route: ActivatedRoute,
              private gameService: GameService) { }

  ngOnInit() {
    this.gameState = this.store.select('game')
    //this.store.select('flashcardGroups').subscribe(result => this.flashcards = result.activeFlashcardGroup)
  }

  onBackClicked() {
    this.store.dispatch(new gameActions.ClearActiveFlashcardGroup());
    this.router.navigate(['../all'], {relativeTo: this.route})
  }

  onStartClick() {
    this.gameService.pickRandomFlashcard();
    this.router.navigate(['/game/question'])
  }

  onDeleteFlashcard() {

  }
}
