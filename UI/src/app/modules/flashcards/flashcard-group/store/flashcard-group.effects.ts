import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Router} from '@angular/router';
import {DeleteFlashcardGroup, FlashcardGroupActionTypes} from './flashcard-group.actions';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';
import {FlashcardGroupService} from '../flashcard-group.service';
import * as flashcardGroupsActions from '../store/flashcard-group.actions'

@Injectable()
export class FlashcardGroupEffects {

  constructor(private actions$: Actions, private router: Router, private flashcardGroupService: FlashcardGroupService) {
  }

  @Effect()
  loadFlashcardGroups: Observable<Action> = this.actions$
    .pipe(ofType(FlashcardGroupActionTypes.LOAD_FLASHCARD_GROUP),
      mergeMap(() =>
        this.flashcardGroupService.getFlashCardGroups().pipe(
          map(groups => {
            return new flashcardGroupsActions.LoadFlashcardGroupsSuccess(groups)
          })
        )));

  @Effect()
  deleteFlashcardGroup: Observable<Action> = this.actions$
    .pipe(ofType(FlashcardGroupActionTypes.DELETE_FLASHCARD_GROUP),
      mergeMap((result: DeleteFlashcardGroup ) =>
        this.flashcardGroupService.deleteFlashcardGroup(result.groupName).pipe(
          map(() => {
            return new flashcardGroupsActions.LoadFlashcardGroups()
          })
        )));
}
