import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Flashcard} from "../flashcards/flashcard.model";
import {HttpClient} from "@angular/common/http";
import {GameState} from "./store/game.reducers";
import {Store} from "@ngrx/store";
import * as gameActions from "../game/store/game.actions"
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  flashcardGroups: Flashcard[];

  constructor(private http: HttpClient, private store: Store<GameState>, private router: Router) {
  }

  getActiveFlashcardGroup(groupName: string): Observable<Flashcard[]> {
    return this.http.get<Flashcard[]>('/api/flashcards/group/' + groupName);
  }

  pickRandomFlashcard() {
    this.store.select('game').subscribe(game => {
      this.flashcardGroups = game.activeFlashcardGroup;
    });

    if(this.flashcardGroups.length !== 0) {
      this.store.dispatch(
        new gameActions.SetActiveFlashcard(
          this.flashcardGroups[this.generateRandomNumber(this.flashcardGroups.length -1)]))
    } else {
      this.router.navigate(['/game'])
    }
  }

  generateRandomNumber(arrayLength: number): number {
    return Math.floor(Math.random() * (arrayLength + 1));
  }
}
