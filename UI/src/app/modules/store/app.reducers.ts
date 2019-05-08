import { ActionReducerMap } from '@ngrx/store';
import * as fromAlerts from '../shared/alert/store/alert.reducers'
import * as fromFlashcardGroups from '../flashcards/flashcard-group/store/flashcard-group.reducers'

export interface AppState {
  alerts: fromAlerts.AlertState,
  flashcardGroups: fromFlashcardGroups.FlashcardGroupState
}

export const appReducer: ActionReducerMap<AppState> = {
  flashcardGroups: fromFlashcardGroups.flashcardGroupReducer,
  alerts: fromAlerts.alertReducer
};
