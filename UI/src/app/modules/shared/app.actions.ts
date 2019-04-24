import { Action } from '@ngrx/store';
import { Alert } from './alert/model/alert.model';

export enum AppActionTypes {
  ADD_ALERTS = '[core] add alerts',
  CLEAR_ALERTS = '[core] clear alerts',
}

export class AddAlert implements Action {
  readonly type = AppActionTypes.ADD_ALERTS;

  constructor(public alert: Alert) {
  }
}

export class ClearAlerts implements Action {
  readonly type = AppActionTypes.CLEAR_ALERTS;
}


export type AppActions = AddAlert | ClearAlerts;
