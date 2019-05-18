import { ActionReducerMap } from '@ngrx/store';
import * as fromAlerts from '../shared/alert/store/alert.reducers'
import * as fromFlashcardGroups from '../flashcards/flashcard-group/store/flashcard-group.reducers'
import * as fromGame from '../game/store/game.reducers'

export interface AppState {
  alerts: fromAlerts.AlertState,
  flashcardGroups: fromFlashcardGroups.FlashcardGroupState
  game: fromGame.GameState
}

export const appReducer: ActionReducerMap<AppState> = {
  flashcardGroups: fromFlashcardGroups.flashcardGroupReducer,
  alerts: fromAlerts.alertReducer,
  game: fromGame.gameReducer
};
