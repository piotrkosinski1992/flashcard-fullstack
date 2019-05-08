import { Action } from '@ngrx/store';
import { Alert } from './alert/model/alert.model';

export enum AppActionTypes {
  ADD_ALERTS = '[core] add alerts',
  CLEAR_ALERTS = '[core] clear alerts',
  LOAD_FLASHCARD_GROUPS = 'load flashcard groups',
  UPDATE_FLASHCARD_GROUPS = 'update flashcard groups',
  DELETE_FLASHCARD_GROUPS = 'delete flashcard groups'
}

export class AddAlert implements Action {
  readonly type = AppActionTypes.ADD_ALERTS;

  constructor(public alert: Alert) {
  }
}

export class ClearAlerts implements Action {
  readonly type = AppActionTypes.CLEAR_ALERTS;
}

export class LoadFlashcardGroups implements Action {
  readonly type = AppActionTypes.LOAD_FLASHCARD_GROUPS;
}

// dodać do końca store i do pracy

export type AppActions = AddAlert | ClearAlerts | LoadFlashcardGroups;
