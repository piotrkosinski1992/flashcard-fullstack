import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Observable} from "rxjs";
import {Action} from "@ngrx/store";
import * as gameActions from "../../game/store/game.actions";
import {map, mergeMap} from "rxjs/operators";
import {Router} from "@angular/router";
import {GameActionTypes, LoadActiveFlashcardGroup, SaveGameResult} from "./game.actions";
import {GameService} from "../game.service";
import {Result} from "../result.model";
import {FlashcardGroup} from "../../flashcards/flashcard-group/flashcard-group.model";


@Injectable()
export class GameEffects {

  constructor(private actions$: Actions, private router: Router, private gameService: GameService) {
  }

  @Effect()
  loadActiveFlashcardGroup: Observable<Action> = this.actions$
    .pipe(ofType(GameActionTypes.LOAD_ACTIVE_FLASHCARD_GROUP),
      mergeMap((result: LoadActiveFlashcardGroup ) =>
        this.gameService.getActiveFlashcardGroup(result.groupName).pipe(
          map((group: FlashcardGroup) => {
            return new gameActions.LoadActiveFlashcardGroupSuccess(group)
          })
        )));

  @Effect()
  saveResult: Observable<Action> = this.actions$.pipe(
    ofType(GameActionTypes.SAVE_GAME_RESULT),
    map((action: SaveGameResult) => action.result),
    mergeMap((result: Result) =>
      this.gameService.saveResult(result).pipe(
        map((finalScore: number) => (new gameActions.SaveGameResultSuccess(finalScore))/*,
        catchError(err => of(new productActions.CreateProductFail(err)))*/
      ))
    )
  );
}
