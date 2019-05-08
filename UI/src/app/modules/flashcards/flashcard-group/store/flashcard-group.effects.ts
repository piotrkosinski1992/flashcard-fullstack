import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { FlashcardGroupActionTypes } from './flashcard-group.actions';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { FlashcardGroupService } from '../flashcard-group.service';
import * as flashcardGroupsActions from '../store/flashcard-group.actions'

@Injectable()
export class FlashcardGroupEffects {

  constructor(private actions$: Actions, private router: Router, private flashcardGroupService: FlashcardGroupService) {
  }

  @Effect()
  loadFlashcardGroups: Observable<Action> = this.actions$
                                                .pipe(ofType(FlashcardGroupActionTypes.LOAD_FLASHCARD_GROUPS),
                                                mergeMap(action =>
                                                this.flashcardGroupService.getFlashCardGroups().pipe(
                                                  map(groups => (new flashcardGroupsActions.LoadFlashcardGroupsSuccess(groups))),
                                                  //catchError(err => of(new flashcardGroupsActions.LoadFlashcardGroupsFailed(err)))
                                                )));

}
