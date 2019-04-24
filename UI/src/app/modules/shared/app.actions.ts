import { Action } from '@ngrx/store';
import { Alert } from './alert/model/alert.model';

export enum AppActionTypes {
  ADD_ALERTS = '[core] add alerts',
  CLEAR_ALERTS = '[core] clear alerts',
}

export class AddAlerts implements Action {
  readonly type = AppActionTypes.ADD_ALERTS;

  constructor(public alerts: Alert[]) {
  }
}

export class ClearAlerts implements Action {
  readonly type = AppActionTypes.CLEAR_ALERTS;
}


export type AppActions = AddAlerts | ClearAlerts;
