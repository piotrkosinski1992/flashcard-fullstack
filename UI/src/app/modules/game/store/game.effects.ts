import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Observable} from "rxjs";
import {Action} from "@ngrx/store";
import * as gameActions from "../../game/store/game.actions";
import {map, mergeMap} from "rxjs/operators";
import {Router} from "@angular/router";
import {GameActionTypes, LoadActiveFlashcardGroup} from "./game.actions";
import {GameService} from "../game.service";


@Injectable()
export class GameEffects {

  constructor(private actions$: Actions, private router: Router, private gameService: GameService) {
  }

  @Effect()
  loadActiveFlashcardGroup: Observable<Action> = this.actions$
    .pipe(ofType(GameActionTypes.LOAD_ACTIVE_FLASHCARD_GROUP),
      mergeMap((result: LoadActiveFlashcardGroup ) =>
        this.gameService.getActiveFlashcardGroup(result.groupName).pipe(
          map(group => {
            return new gameActions.LoadActiveFlashcardGroupSuccess(group)
          })
        )));
}
